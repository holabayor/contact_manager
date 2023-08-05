import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

export const dbClient = () => {
  mongoose
    .connect(MONGODB_URL as string)
    .then(() => {
      console.log(`Database is connected successfully.`);
    })
    .catch((err) => {
      console.error(`Error connecting to database: ${err.message}`);
    });
};
