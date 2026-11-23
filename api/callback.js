function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((acc, part) => {
    const [key, ...rest] = part.trim().split('=');
    if (key) acc[key] = decodeURIComponent(rest.join('='));
    return acc;
  }, {});
}

function renderCallbackHtml(status, content) {
  const safeContent = JSON.stringify(content).replace(/</g, '\\u003c');
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorizing...</title>
  </head>
  <body>
    <p>Completing authentication...</p>
    <script>
      (function () {
        function receiveMessage(e) {
          if (e.origin !== window.location.origin) {
            return;
          }
          window.opener.postMessage(
            "authorization:github:${status}:" + JSON.stringify(${safeContent}),
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('GitHub OAuth environment variables are missing on Vercel.');
    return;
  }

  const { code, state } = req.query;
  const cookies = parseCookies(req.headers.cookie);

  if (!code || !state || !cookies.decap_oauth_state || state !== cookies.decap_oauth_state) {
    res.setHeader('Content-Type', 'text/html');
    res.status(400).send(
      renderCallbackHtml('error', { message: 'Invalid OAuth state or missing authorization code.' })
    );
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    // Clear the one-time state cookie
    res.setHeader(
      'Set-Cookie',
      'decap_oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=0'
    );
    res.setHeader('Content-Type', 'text/html');

    if (data.error || !data.access_token) {
      res.status(401).send(
        renderCallbackHtml('error', {
          message: data.error_description || data.error || 'Failed to obtain access token.',
        })
      );
      return;
    }

    res.status(200).send(
      renderCallbackHtml('success', {
        token: data.access_token,
        provider: 'github',
      })
    );
  } catch (err) {
    res.setHeader('Content-Type', 'text/html');
    res.status(500).send(
      renderCallbackHtml('error', { message: err?.message || 'OAuth exchange failed.' })
    );
  }
}
