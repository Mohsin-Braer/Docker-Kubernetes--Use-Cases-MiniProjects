const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Testing deployment on Kubernetes app!</h1>
    <p>Sending a req to /error to test</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
