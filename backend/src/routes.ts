import knex from './database/connection';
import { Router } from 'express';

const routes = Router();

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');
  const serializedItems = items.map( item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }
  })
  return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
  const {
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const point = await knex('points').insert({
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });
  
  return response.json({ success: true });
});

routes.get('/points', async (request, response) => {
  const points = await knex('points').select('*');
  return response.json(points);
});

export default routes;