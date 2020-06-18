import { Request, Response } from 'express';
import knex from '../database/connection';

export default class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        item_image_url: `http://192.168.15.19:3333/uploads/${item.image}`,
      }
    });
    return response.json(serializedItems);
  }
}