import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const url = process.env.MONGODB_URL;

// console.log(url);

const dbClient = () => {
  mongoose.connect(url).then(() => {
    console.log(`Database is connected successfully.`);
  });
};

export default dbClient;
