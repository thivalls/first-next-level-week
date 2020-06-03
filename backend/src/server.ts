import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Thiago',
    'Andre'
  ]);
});

app.listen(3333, () => {
  console.log('running')
});

