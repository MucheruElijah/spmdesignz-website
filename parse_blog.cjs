const fs = require('fs');
const data = JSON.parse(fs.readFileSync('blogger.json', 'utf8'));
const posts = data.feed.entry ? data.feed.entry.map(e => ({
  title: e.title['$t'],
  id: e.id['$t'],
  published: e.published['$t'],
  content: e.content['$t'],
  link: e.link.find(l => l.rel === 'alternate').href
})) : [];
fs.mkdirSync('src/data', {recursive:true});
fs.writeFileSync('src/data/blogPosts.json', JSON.stringify(posts, null, 2));
console.log('Blog posts successfully parsed!');
