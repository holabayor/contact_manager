# Simple Contact Manager Application Backend

This is a simple contact manager application built with Node.js, Express.js, and MongoDB. It allows users to sign up, log in, and manage their contacts.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v12 or higher)
- MongoDB

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/contact-manager.git
   ```

2. Install dependencies:

   ```
   cd contact-manager
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory of the project and add the following:

   ```
   MONGODB_URL=your-mongodb-connection-url
   ```

4. Run the application:

   ```
   npm start
   ```

   The server will start running on `http://localhost:5000`.

## API Endpoints

- `POST /api/signup`: Create a new user account. Requires `name`, `email`, and `password` in the request body.

- `POST /api/login`: Authenticate the user. Requires `email` and `password` in the request body.

- `GET /api/contacts`: Get all contacts of the authenticated user.

- `POST /api/contacts`: Add a new contact. Requires `name`, `email`, and `phone` in the request body.

- `PUT /api/contacts/:id`: Update an existing contact. Requires `name`, `email`, and `phone` in the request body.

- `DELETE /api/contacts/:id`: Delete a contact.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Aanuoluwapo Liasu - [Github](https://github.com/holabayor)
