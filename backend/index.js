import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dbClient from './utils/db';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json('Contact Manager');
});

app.listen(port, () => {
  dbClient();
  console.log(`Server is running on http://localhost:${port}`);
});
