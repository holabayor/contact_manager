import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dbClient from './utils/db.js';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set up cors
app.use(cors());

app.disable('x-powered-by');

app.use('/api/', router);

app.get('/', (req, res) => {
  res.json('Contact Manager');
});

app.listen(port, () => {
  dbClient();
  console.log(`Server is running on http://localhost:${port}`);
});
