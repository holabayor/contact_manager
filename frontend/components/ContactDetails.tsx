
const ContactDetails: React.FC = () => {
    // Replace this with actual contact details fetched from the backend
    const contact = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </div>
    );
};

export default ContactDetails;
