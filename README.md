# MongoDB CRUD API

A Node.js and Express REST API for MongoDB CRUD operations using Mongoose.

## Features

- Create single/bulk users
- Read all users or by ID
- Update user (PUT full, PATCH partial)
- Delete user by ID

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- Dotenv

## Quick Start

```bash
npm install
npm start
```

## Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/crud
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/one` | Create single user |
| POST | `/many` | Bulk create users |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| PUT | `/users/:id` | Full update |
| PATCH | `/users/name/:id` | Update name only |
| DELETE | `/users/:id` | Delete user |

## Request/Response Examples

**Create User:**
```json
POST /one
{ "name": "John", "password": "123" }
```

## Deploy on Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Set environment variables:
   - `MONGO_URI` - Your MongoDB connection string
   - `PORT` - (Render auto-sets this)

## License

ISC
