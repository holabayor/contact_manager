class ContactController {
  async myContacts(req, res) {
    const allContacts = await Contact.find({ postedBy: req.user._id });
    res.status(200).json(allContacts);
  }
}

export default ContactController;
