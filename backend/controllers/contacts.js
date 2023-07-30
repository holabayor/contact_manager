import Contact from '../models/contact.js';

class ContactController {
  static async myContacts(req, res) {
    const allContacts = await Contact.find({ postedBy: req.userId });
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

  static async updateContact(req, res) {
    const { firstName, lastName, email, phoneNumber, avatar, isFavourite } =
      req.body;
    const updatedContact = await Contactact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedContact);
  }

  static async deleteContact(req, res) {
    const contactId = req.params.id;
    const contact = await Contact.deleteOne({
      _id: contactId,
      postedBy: req.userId,
    });
    if (contact.deletedCount) {
      res.status(204).json({ message: 'Contact deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Contact not found' });
    }
  }
}

export default ContactController;
