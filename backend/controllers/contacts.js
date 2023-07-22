class ContactController {
  static async myContacts(req, res) {
    const allContacts = await Contact.find({ postedBy: req.user._id });
    res.status(200).json(allContacts);
  }

  static async getContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  }

  static async createContact(req, res) {
    const newContact = new Contact(req.body);
    newContact.postedBy = req.user._id;
    await newContact.save();
    res.status(201).json(newContact);
  }

  static async updateContact(req, res) {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedContact);
  }

  static async deleteContact(req, res) {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  }
}

export default ContactController;
