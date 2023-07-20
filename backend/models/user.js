import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // You can add a validation for email format here if needed
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
      default: '', // insert a default image here
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

// Hash the password before saving the user data
userSchema.pre('save', async function (next) {
  try {
    // Check if the password is modified or is new (for new user)
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(10); // Generate a salt
      const hashedPassword = await bcrypt.hash(this.password, salt); // Hash the password
      this.password = hashedPassword; // Replace the plain password with the hashed one
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Create the User model based on the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
