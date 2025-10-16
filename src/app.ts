import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { setupSwagger } from './config/swagger';
import { routeNotFound } from './config/middleware/route-not-found.middleware';

dotenv.config();

const app = express();

// if needed change to body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

setupSwagger(app);

app.use(cors());

app.use('/api', routes);

app.use(routeNotFound);

export default app;
