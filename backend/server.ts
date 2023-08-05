import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dbClient } from './utils/db';
import router from './routes/index';
import { checkAccessTokenExpiry } from './utils/middlewares';

const app: Express = express();
const port = process.env.PORT || 8000;

// app.use(cookieParser());

// set up cors
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.disable('x-powered-by');

app.use('/api/', router);

app.get('/', (req, res) => {
  res.json('Contact Manager');
});

app.use(checkAccessTokenExpiry);

app.listen(port, () => {
  dbClient();
  console.log(`Server is running on http://localhost:${port}`);
});
