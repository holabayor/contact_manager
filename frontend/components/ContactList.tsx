
const ContactList: React.FC = () => {
    // Replace this with actual contact data fetched from the backend
    const contacts = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Contacts</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
