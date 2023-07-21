import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

class AuthController {
  static async signup(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }

      // Create a new user
      const newUser = User({ firstName, lastName, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        res
          .status(403)
          .json({ error: 'Please, enter your email and password' });
        return;
      }
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          res.status(403).json({ error: 'Invalid email' });
          return;
        }
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (isMatch) {
            const accessToken = jwt.sign(
              { id: user._id },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: 1200,
              }
            );
            const refreshToken = jwt.sign(
              { id: user._id },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: '7d',
              }
            );
            res.cookie('refreshToken', refreshToken, { httpOnly: true });
            res.setHeader('Authorization', `Bearer ${accessToken}`);
            res.status(200).send({
              accessToken,
              refreshToken,
              user,
            });
          } else {
            res.status(403).json({ error: 'Invalid password' });
          }
        });
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(403);
    }
  }
}

export default AuthController;
