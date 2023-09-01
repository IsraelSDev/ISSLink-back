import {Request, Router, Response} from 'express';
import userController from '@modules/user/controllers/user.controller';

const routes = Router();

routes.post('/auth', userController.create);
routes.get('/auth', userController.select);

export default routes;
