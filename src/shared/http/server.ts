import 'reflect-metadata';
require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';
import routesAuth from './routes/auth';
import AppError from '@shared/errors/AppError';
import path from 'path';
import '@config/mongodb';

const app = express();
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

app.use('/files', express.static(uploadFolder));
app.use(cors());
app.use(express.json());
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: 'error',
      message: error.message,
    });
  }
  return res.status(500).json({
    error: 'error',
    message: 'Internal Server Error',
  });
});
app.use(routes);
app.use(routesAuth);

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
});
