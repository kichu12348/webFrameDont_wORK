// index.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App'; 

const app = express();

app.use(express.static('./client'));

app.get('*', (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My SSR Framework</title>
    </head>
    <body>
      <div id="root">${appString}</div>
      <script type="module" src="/client/index.js" ></script>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html'); // Set content type explicitly
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
