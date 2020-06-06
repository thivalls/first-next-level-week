import { Router } from 'express';

const routes = Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController;
const itemsController = new ItemsController;

// Points Routes
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

// Items Routes
routes.get('/items', itemsController.index);

export default routes;