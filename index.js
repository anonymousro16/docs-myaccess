const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const serverless = require('serverless-http');
const yaml = require('js-yaml');

const app = express();

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Load routes.yaml once at startup
const routesFile = path.join(__dirname, '..', 'routes.yaml');
const routesYaml = yaml.load(fs.readFileSync(routesFile, 'utf8'));

// Serve Markdown dynamically based on routes.yaml
app.get('/*', (req, res) => {
  let urlPath = req.path;

  // Determine language
  const segments = urlPath.split('/').filter(Boolean);
  let lang = 'default';
  let routePath = urlPath;

  if (segments[0] === 'lang') {
    lang = segments[1] || 'default';
    routePath = '/' + segments.slice(2).join('/');
    if (routePath === '/') routePath = '/';
  }

  // Get mapped Markdown file from routes.yaml
  const langRoutes = routesYaml[lang] || {};
  const mdFileRelative = langRoutes[routePath];

  if (!mdFileRelative) return res.status(404).send('Page not found');

  const filePath = path.join(__dirname, '..', 'docs', lang, mdFileRelative);
  if (!fs.existsSync(filePath)) return res.status(404).send('Markdown file missing');

  const file = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(file);
  const htmlContent = marked(content);

  res.render('doc', { title: routePath === '/' ? 'Home' : routePath.slice(1), content: htmlContent });
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
