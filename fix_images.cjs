const fs = require('fs');
const path = 'src/data/services.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/_1786184135949/g, '');
content = content.replace(/_1786184156682/g, '');
content = content.replace(/_1786184146882/g, '');

fs.writeFileSync(path, content);
console.log('Fixed image paths in services.jsx');
