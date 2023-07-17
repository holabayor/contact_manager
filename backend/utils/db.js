import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const DATABASE = process.env.DB || 'contact_manager';
const url = process.env.MONGODB_URL;

// console.log(url);

const dbClient = () => {
  mongoose.connect(url).then(() => {
    console.log(`${DATABASE} is connected to MongoDB successfully.`);
  });
};

export default dbClient;
