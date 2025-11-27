const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const yaml = require('js-yaml');

const app = express();
const PORT = process.env.PORT || 3129;

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load routes.yaml
const routesFile = path.join(__dirname, 'routes.yaml');
const routesYaml = yaml.load(fs.readFileSync(routesFile, 'utf8'));

// Serve Markdown dynamically
app.get('/*', (req, res) => {
  let urlPath = req.path;

  // Determine language
  const segments = urlPath.split('/').filter(Boolean);
  let lang = 'default';
  let routePath = urlPath;

  if (segments[0] === 'lang') {
    lang = segments[0 + 1] || 'default';
    routePath = '/' + segments.slice(2).join('/');
    if (routePath === '/') routePath = '/';
  }

  // Get mapped Markdown file
  const langRoutes = routesYaml[lang] || {};
  const mdFileRelative = langRoutes[routePath];

  if (!mdFileRelative) return res.status(404).send('Page not found');

  const filePath = path.join(__dirname, 'docs', lang, mdFileRelative);
  if (!fs.existsSync(filePath)) return res.status(404).send('Markdown file missing');

  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data: frontmatter } = matter(file);
  const htmlContent = marked(content);

  res.render('doc', {
    title: frontmatter.title || (routePath === '/' ? 'Home' : routePath.slice(1)),
    content: htmlContent
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
