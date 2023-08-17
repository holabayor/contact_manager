"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type SocialMedia = {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
};

export type Contact = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    dateOfBirth?: string;
    socialMedia?: SocialMedia;
    isFavorite: boolean;
    postedBy: string; // Replace with actual user ID
};

export const columns: ColumnDef<Contact>[] = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
    },
    {
        accessorKey: 'avatar',
        header: 'Avatar',
        cell: ({ row }) => <Image src={row.getValue('avatar')} height={40} width={40} alt="Avatar" className="rounded-full" />,
    },
    {
        accessorKey: 'isFavorite',
        header: 'Favorite',
        cell: ({ row }) => row.getValue('isFavorite') ? <AiFillHeart size={35} className="text-red-500" /> : <AiOutlineHeart size={35} />,
    },
];

export const contacts: Contact[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        avatar: 'https://randomuser.me/api/potraits/men/1.jpg',
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
        avatar: 'https://randomuser.me/api/potraits/men/2.jpg',
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
        avatar: 'https://randomuser.me/api/potraits/men/3.jpg',
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
