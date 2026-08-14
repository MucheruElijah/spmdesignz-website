const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\elmqd\\.gemini\\antigravity\\brain\\abee5f0a-f945-49ff-9b0e-84f992d0a01f\\.system_generated\\steps\\1602\\content.md', 'utf-8');

const titleMatch = html.match(/"title":"([^"]+)"/g);
const descMatch = html.match(/"description":\s*"((?:\\"|[^"])*)"/);

console.log('Title matches:', titleMatch ? titleMatch.slice(0, 5) : 'None');
console.log('Desc match:', descMatch ? descMatch[1].substring(0, 500) : 'None');

// Look for 'Struggling with a messy'
const idx = html.indexOf('Struggling with a messy');
if (idx !== -1) {
    console.log('Found "Struggling...":', html.substring(idx, idx + 1000));
}
