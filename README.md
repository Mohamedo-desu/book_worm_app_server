# Book Worm Backend Service

A robust backend service built with Node.js and Express to power the Book Worm mobile application.

## Features

- RESTful API architecture
- MongoDB database integration
- JWT-based authentication
- File upload support with Cloudinary
- Scheduled tasks with cron jobs
- Secure password hashing
- CORS enabled for cross-origin requests
- Environment-based configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Cloudinary for file storage
- dotenv for environment variables
- cors for cross-origin resource sharing
- cron for scheduled tasks

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- MongoDB instance
- Cloudinary account (for file uploads)

### Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

### Running the Server

Development mode:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

- `/src` - Source code directory
  - `/controllers` - Request handlers
  - `/models` - Database models
  - `/routes` - API routes
  - `/middleware` - Custom middleware
  - `/utils` - Utility functions
  - `/config` - Configuration files
  - `index.js` - Application entry point

## API Documentation

The API endpoints are organized as follows:

- `/api/auth` - Authentication endpoints
- `/api/books` - Book management endpoints
- `/api/users` - User management endpoints
- `/api/upload` - File upload endpoints

## Development

- Follow the existing code style and patterns
- Use async/await for asynchronous operations
- Implement proper error handling
- Add appropriate validation for requests
- Write meaningful commit messages

## Security

- All passwords are hashed using bcryptjs
- JWT tokens are used for authentication
- Environment variables are used for sensitive data
- CORS is configured for security
- Input validation is implemented

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT License

Copyright (c) 2024 Book Worm App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
