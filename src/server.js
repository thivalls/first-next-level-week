const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('It is running express on port 3333');
});

app.listen(3333, () => {
  console.log('running')
});

