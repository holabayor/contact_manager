import mongoose from 'mongoose';

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

// Create the User model based on the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
