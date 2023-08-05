import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserModel extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profileImage?: string;
  contacts?: string[];
}

// Define the user schema
const userSchema: Schema = new Schema<UserModel>(
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
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
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

// Remove sensitive fields from the user object before converting it to JSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

// Create the User model based on the user schema and export it
export const User = mongoose.model<UserModel>('User', userSchema);
