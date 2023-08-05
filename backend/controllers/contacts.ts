import { Request, Response } from 'express';
import { Contact } from '../models/contact';

interface MyRequest extends Request {
  id?: string;
}

class ContactController {
  static async myContacts(req: MyRequest, res: Response) {
    try {
      const contacts = await Contact.find({ postedBy: req.id });
      if (contacts.length === 0) {
        res.status(404).json({ status: 'fail', message: 'No contact found' });
      }
      res.status(200).json({ status: 'success', data: contacts });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.messge,
      });
    }
  }

  static async getContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  }

  static async createContact(req, res) {
    try {
      const { firstName, lastName, email, phoneNumber, avatar, isFavourite } =
        req.body;
      if (!firstName || !lastName || !phoneNumber) {
        return res
          .status(400)
          .send({ error: 'Please fill all required fields' });
      }
      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        avatar,
        isFavourite,
        postedBy: req.userId,
      });

      contact.save();
      res.status(201).json({ status: 'success', data: contact });
    } catch (error) {
      res.status(500).json({ status: 'fail', message: error.message });
    }
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
      res.status(500).json({ status: 'fail', message: error.message });
    }
  }

  static async deleteContact(req: MyRequest, res: Response) {
    try {
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
    } catch (error) {
      res.status(500).json({ status: 'fail', message: error.message });
    }
  }
}

export default ContactController;
