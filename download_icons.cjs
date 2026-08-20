const fs = require('fs');
const https = require('https');
const path = require('path');

const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const icons = [
  { name: 'behance.png', url: 'https://cdn-icons-png.flaticon.com/512/145/145799.png' },
  { name: 'linkedin.png', url: 'https://cdn-icons-png.flaticon.com/512/145/145807.png' },
  { name: 'instagram.png', url: 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png' },
  { name: 'facebook.png', url: 'https://cdn-icons-png.flaticon.com/512/145/145802.png' },
  { name: 'whatsapp.png', url: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
  { name: 'fiverr.png', url: 'https://cdn-icons-png.flaticon.com/512/5968/5968846.png' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const icon of icons) {
    const dest = path.join(iconsDir, icon.name);
    console.log(`Downloading ${icon.name}...`);
    await download(icon.url, dest);
  }
  console.log('All icons downloaded successfully to public/icons/');
}

run().catch(console.error);
