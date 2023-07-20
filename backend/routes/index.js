import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Contact Manager');
});

router.post('/signup', AuthController.signup);
