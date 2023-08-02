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
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        res
          .status(403)
          .json({ error: 'Please, enter your email and password' });
        return;
      }
      User.findOne({ email }).then((user) => {
        if (!user) {
          return res.status(403).json({ error: 'Invalid credentials' });
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (isMatch) {
            // Generate access token
            const accessToken = jwt.sign(
              { id: user._id },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: 1200,
              }
            );
            // Generate refresh token
            const refreshToken = jwt.sign(
              { id: user._id },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: '7d',
              }
            );

            res.cookie('refreshToken', refreshToken, {
              httpOnly: true,
              sameSite: 'lax',
              secure: true,
            });
            res.setHeader('Authorization', `Bearer ${accessToken}`);
            res.status(200).send({
              user,
            });
          } else {
            res.status(403).json({ error: 'Invalid credentials' });
          }
        });
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(403);
    }
  }

  static async logout(req, res) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
    });
    return res.status(200).json({ message: 'User logged out successfully' });
  }
}

export default AuthController;
