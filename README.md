# Node.js Clean Architecture API

A scalable NodeJS REST API built with Clean Architecture principles using Express and MongoDB.

## Features

- Clean Architecture pattern for maintainability
- RESTful API endpoints for student management
- MongoDB integration
- Docker support
- Comprehensive test coverage
- Environment-based configuration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Containerization**: Docker
- **Testing**: Jest


## Installation

### Prerequisites
- Node.js (v14+)
- Docker (optional)

### Steps

1. Clone the repository
```bash
git clone https://github.com/shashankbiet/nodejs-clean-architecture-api.git
cd nodejs-clean-architecture-api
```

2. Install dependencies
```bash
npm i
```

3. Configure environment variables
```bash
cp .env.example .env
```

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/students
PORT=3001
NODE_ENV=development
```

## Running the Application

### Locally
```bash
npm run dev
```

### With Docker
```bash
docker-compose up -d
```

The API will be available at `http://localhost:5000`

## Usage Examples

### Get all students
```http
GET /api/student
```

### Get student by ID
```http
GET /api/student/65a1b2c3d4e5f6g7h8i9j0k1
```

### Create student
```http
POST /api/student
Content-Type: application/json

{
  "name": "John Doe",
  "gender": "male",
  "email": "john@test.com",
  "mobileNo": "1234567890"
}
```

### Update student
```http
PUT /api/student/65a1b2c3d4e5f6g7h8i9j0k1
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@test.com"
}
```

### Delete student
```http
DELETE /api/student/65a1b2c3d4e5f6g7h8i9j0k1
```

## Testing

Run tests with the following command:
```bash
npm run test
```

## License

MIT License - see LICENSE file for details
