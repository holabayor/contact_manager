interface SocialMedia {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  dateOfBirth: string;
  socialMedia: SocialMedia;
  isFavorite: boolean;
  postedBy: string; // Replace with actual user ID
}

const contacts: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    avatar: 'https://example.com/avatar1.jpg',
    dateOfBirth: '1990-05-15',
    socialMedia: {
      twitter: 'john_doe_twitter',
      facebook: 'john.doe.facebook',
      instagram: 'john_doe_instagram',
      linkedin: 'john-doe-linkedin',
    },
    isFavorite: true,
    postedBy: 'user_id_1', // Replace with actual user ID
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '987-654-3210',
    avatar: 'https://example.com/avatar2.jpg',
    dateOfBirth: '1985-08-20',
    socialMedia: {
      twitter: 'jane_smith_twitter',
      facebook: 'jane.smith.facebook',
      instagram: 'jane_smith_instagram',
      linkedin: 'jane-smith-linkedin',
    },
    isFavorite: false,
    postedBy: 'user_id_2', // Replace with actual user ID
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phoneNumber: '555-123-4567',
    avatar: 'https://example.com/avatar3.jpg',
    dateOfBirth: '1982-03-10',
    socialMedia: {
      twitter: 'michael_johnson_twitter',
      facebook: 'michael.johnson.facebook',
      instagram: 'michael_johnson_instagram',
      linkedin: 'michael-johnson-linkedin',
    },
    isFavorite: true,
    postedBy: 'user_id_3', // Replace with actual user ID
  },
  // Add more entries as needed
];

export { contacts, User };
