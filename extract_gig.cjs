const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\elmqd\\.gemini\\antigravity\\brain\\abee5f0a-f945-49ff-9b0e-84f992d0a01f\\.system_generated\\steps\\1602\\content.md', 'utf-8');

// Strip tags roughly
const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
fs.writeFileSync('gig_text.txt', text);
