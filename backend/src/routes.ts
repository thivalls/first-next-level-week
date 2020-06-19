import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import Validationpoints from './middlewares/ValidationPoints';

const pointsController = new PointsController;
const itemsController = new ItemsController;

const upload = multer(uploadConfig);

// Items Routes
routes.get('/items', itemsController.index);

// Points Routes
routes.post('/points', 
  upload.single('image'),
  Validationpoints,
  pointsController.create
);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;