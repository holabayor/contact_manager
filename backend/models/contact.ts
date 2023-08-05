import mongoose, { Document, Schema } from 'mongoose';

interface ContactModel extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  dateOfBirth: Date;
  socialMedia: {
    twiter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  isFavorite: boolean;
  postedBy: mongoose.Schema.Types.ObjectId;
}

const contactSchema: Schema = new Schema<ContactModel>(
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
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: '', // insert a default image here
    },
    dateOfBirth: {
      type: Date,
    },
    socialMedia: {
      twiter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      linkedin: {
        type: String,
      },
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<ContactModel>('Contact', contactSchema);
