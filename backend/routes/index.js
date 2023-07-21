import express from 'express';
import AuthController from '../controllers/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Contact Manager');
});

router.post('/signup', AuthController.signup);

export default router;
