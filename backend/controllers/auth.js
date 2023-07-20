import User from '../models/user';

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
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }

  static login(req, res) {
    res.json('Login');
  }
}
