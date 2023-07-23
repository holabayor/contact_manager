import express from 'express';
import AuthController from '../controllers/auth.js';
import ContactController from '../controllers/contacts.js';
import { isLoggedIn, refreshAccessToken } from '../utils/middlewares.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Contact Manager');
});

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

router.get('/refresh', isLoggedIn, refreshAccessToken, AuthController.getUser);

router.get('/contacts', ContactController.myContacts);
router.get('/contacts/:id', isLoggedIn, ContactController.getContact);
router.post('/contacts', isLoggedIn, ContactController.createContact);
router.put('/contacts/:id', isLoggedIn, ContactController.updateContact);
router.delete('/contacts/:id', isLoggedIn, ContactController.deleteContact);

export default router;
