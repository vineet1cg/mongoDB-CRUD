# MongoDB Task - User CRUD API

A simple Node.js and Express application demonstrating CRUD (Create, Read, Update, Delete) operations with MongoDB using Mongoose.

## Features

- **User Management**: Create single or multiple users, fetch all users, or find a specific user by ID.
- **Updates**: Update user information using both `PUT` (full update) and `PATCH` (partial update for name).
- **Deletion**: Remove users from the database by ID.
- **Environment Driven**: Configuration via environment variables.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)
- **CORS**
- **Dotenv**

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MongoDB_URI=your_mongodb_connection_string
   ```

### Running the Server

Start the server using:
```bash
npm start
```
The server will be running on the port specified in your `.env` file (defaulting to 3000).

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health check |
| `POST` | `/one` | Create a single user |
| `POST` | `/many` | Bulk create users |
| `GET` | `/users` | Get all users |
| `GET` | `/users/:id` | Get user by ID |
| `PUT` | `/users/:id` | Update user by ID |
| `PATCH` | `/users/name/:id` | Update user name by ID |
| `DELETE` | `/users/:id` | Delete user by ID |

## Schema

```javascript
{
  name: String,
  password: String
}
```
