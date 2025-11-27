const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const serverless = require('serverless-http');

const app = express();

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Serve Markdown dynamically
app.get('/*', (req, res) => {
  let urlPath = req.path === '/' ? '/homepage' : req.path;

  // Support i18n
  const segments = urlPath.split('/').filter(Boolean);
  let lang = 'default';
  if (segments[0] === 'lang') {
    lang = segments[1] || 'default';
    segments.splice(0, 2); // remove /lang/ro
  }

  const filePath = path.join(__dirname, '..', 'docs', lang, ...segments) + '.md';
  if (!fs.existsSync(filePath)) return res.status(404).send('Page not found');

  const file = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(file);
  const htmlContent = marked(content);

  res.render('doc', { title: segments.slice(-1)[0] || 'Home', content: htmlContent });
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
