const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.port;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
