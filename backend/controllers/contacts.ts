import { Request, Response } from 'express';
import { Contact } from '../models/contact';

interface MyRequest extends Request {
  id?: string;
}

class ContactController {
  static async myContacts(req: MyRequest, res: Response) {
    const allContacts = await Contact.find({ postedBy: req.id });
    res.status(200).json(allContacts);
  }

  static async getContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  }

  static async createContact(req, res) {
    const { firstName, lastName, email, phoneNumber, avatar, isFavourite } =
      req.body;
    if (!firstName || !lastName || !phoneNumber) {
      return res.status(400).send({ error: 'Please fill all required fields' });
    }
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      avatar,
      isFavourite,
      postedBy: req.userId,
    });

    newContact.save();
    res.status(201).json(newContact);
  }

  static async updateContact(req: MyRequest, res: Response) {
    try {
      const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedContact);
    } catch (error) {
      res.status(404).json({ error: 'Contact not found' });
    }
  }

  static async deleteContact(req: MyRequest, res: Response) {
    const contactId = req.params.id;
    const contact = await Contact.deleteOne({
      _id: contactId,
      postedBy: req.id,
    });
    if (contact.deletedCount) {
      res.status(204).json({ message: 'Contact deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Contact not found' });
    }
  }
}

export default ContactController;
