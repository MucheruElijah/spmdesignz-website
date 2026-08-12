const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));

const cleanHtml = (html) => {
  if (!html) return html;
  return html
    // Remove all style="..." attributes
    .replace(/\s*style="[^"]*"/gi, '')
    // Remove all class="..." attributes
    .replace(/\s*class="[^"]*"/gi, '')
    // Remove <font> and </font> tags
    .replace(/<\/?font[^>]*>/gi, '')
    // Remove <span> and </span> tags
    .replace(/<\/?span[^>]*>/gi, '')
    // Change <div...> and </div> to <br/> to maintain line breaks for block elements that were divs, 
    // but honestly just removing them is safer if they are mostly wrappers for images.
    // Let's just remove div tags entirely, since paragraphs (<p>) already exist.
    .replace(/<\/?div[^>]*>/gi, '')
    // Remove <br> and <br /> just at the start
    .replace(/^(?:<br\s*\/?>\s*)+/gi, '')
    // Replace empty tags like <p></p> with nothing
    .replace(/<p>\s*<\/p>/gi, '')
    // Remove <o:p></o:p> tags
    .replace(/<o:p>.*?<\/o:p>/gi, '');
};

data.forEach(post => {
  post.content = cleanHtml(post.content);
});

fs.writeFileSync('src/data/blogPosts.json', JSON.stringify(data, null, 2));
console.log('Done cleaning JSON.');
