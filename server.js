const express = require('express');
const app = express();
const port = 8561; // If you change the port, make sure to also change it in the vite.config.js

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});