import { resolve } from 'path';
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('running')
});

