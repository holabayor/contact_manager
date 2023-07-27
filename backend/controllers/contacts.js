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
    const newContact = new Contact(req.body);
    newContact.postedBy = req.userId;
    await newContact.save();
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
    await Contact.deleteOne(req.params.id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  }
}

export default ContactController;
