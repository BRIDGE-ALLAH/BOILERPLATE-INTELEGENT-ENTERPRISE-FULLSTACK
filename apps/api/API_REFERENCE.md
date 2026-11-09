 # MOONWITNESS API Reference
 
 Complete API documentation with examples.
 
 ## Base URL
 ```
 http://localhost:3000/api/v1
 ```
 
 ## Response Format
 
 All responses include metadata and consistent formatting:
 
 **Success (2xx):**
 ```json
 {
   "success": true,
   "data": { /* response payload */ },
   "meta": {
     "timestamp": "2024-01-01T12:00:00.000Z",
     "version": "v1"
   }
 }
 ```
 
 **Error (4xx, 5xx):**
 ```json
 {
   "success": false,
   "error": {
     "code": "ERROR_CODE",
     "message": "Human readable message",
     "details": { /* validation errors */ },
     "path": "/api/v1/resource"
   },
   "meta": {
     "timestamp": "2024-01-01T12:00:00.000Z",
     "version": "v1"
   }
 }
 ```
 
 ## Endpoints
 
 ### Health & Status
 
 #### GET /health
 Check API health status
 
 **Response:**
 ```json
 {
   "status": "healthy",
   "timestamp": "2024-01-01T12:00:00.000Z",
   "uptime": 3600000,
   "checks": {
     "memory": "ok",
     "database": "ok"
   }
 }
 ```
 
 #### GET /health/live
 Liveness probe for Kubernetes/Docker
 
 **Response:** `{ "status": "alive" }`
 
 #### GET /health/ready
 Readiness probe for Kubernetes/Docker
 
 **Response:**
 ```json
 {
   "ready": true
 }
 ```
 
 ### Authentication
 
 #### POST /auth/login
 Login with email and password
 
 **Request:**
 ```json
 {
   "email": "user@example.com",
   "password": "password123"
 }
 ```
 
 **Response:** (200)
 ```json
 {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   "user": {
     "email": "user@example.com"
   }
 }
 ```
 
 **Errors:**
 - `400` - Validation failed
 - `401` - Invalid credentials
 
 #### POST /auth/signup
 Register a new user
 
 **Request:**
 ```json
 {
   "email": "newuser@example.com",
   "password": "securepassword123",
   "name": "John Doe"
 }
 ```
 
 **Response:** (201)
 ```json
 {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   "user": {
     "email": "newuser@example.com",
     "name": "John Doe"
   }
 }
 ```
 
 **Errors:**
 - `400` - Validation failed
 - `409` - Email already exists
 
 #### POST /auth/refresh
 Refresh authentication token
 
 **Headers:**
 ```
 Authorization: Bearer {token}
 ```
 
 **Response:** (200)
 ```json
 {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 }
 ```
 
 #### POST /auth/logout
 Logout current session
 
 **Response:** (200)
 ```json
 {
   "message": "Logged out successfully"
 }
 ```
 
 ### Users (CRUD)
 
 #### GET /users
 List all users with pagination
 
 **Query Parameters:**
 - `page` (number, default: 1)
 - `pageSize` (number, default: 10, max: 100)
 
 **Example:**
 ```
 GET /users?page=1&pageSize=20
 ```
 
 **Response:** (200)
 ```json
 {
   "items": [
     {
       "id": "uuid-123",
       "email": "user@example.com",
       "name": "John Doe",
       "createdAt": "2024-01-01T12:00:00.000Z",
       "updatedAt": "2024-01-01T12:00:00.000Z"
     }
   ],
   "total": 50,
   "page": 1,
   "pageSize": 20,
   "totalPages": 3
 }
 ```
 
 #### POST /users
 Create a new user
 
 **Request:**
 ```json
 {
   "email": "newuser@example.com",
   "name": "Jane Doe",
   "password": "securepassword123"
 }
 ```
 
 **Response:** (201)
 ```json
 {
   "id": "uuid-456",
   "email": "newuser@example.com",
   "name": "Jane Doe",
   "createdAt": "2024-01-01T12:30:00.000Z",
   "updatedAt": "2024-01-01T12:30:00.000Z"
 }
 ```
 
 **Errors:**
 - `400` - Validation failed
 - `409` - Email already exists
 
 #### GET /users/:id
 Get specific user
 
 **Response:** (200)
 ```json
 {
   "id": "uuid-456",
   "email": "newuser@example.com",
   "name": "Jane Doe",
   "createdAt": "2024-01-01T12:30:00.000Z",
   "updatedAt": "2024-01-01T12:30:00.000Z"
 }
 ```
 
 **Errors:**
 - `404` - User not found
 
 #### PUT /users/:id
 Update specific user
 
 **Request:**
 ```json
 {
   "email": "newemail@example.com",
   "name": "Jane Smith"
 }
 ```
 
 **Response:** (200)
 ```json
 {
   "id": "uuid-456",
   "email": "newemail@example.com",
   "name": "Jane Smith",
   "createdAt": "2024-01-01T12:30:00.000Z",
   "updatedAt": "2024-01-01T13:00:00.000Z"
 }
 ```
 
 **Errors:**
 - `400` - Validation failed
 - `404` - User not found
 - `409` - Email already in use
 
 #### DELETE /users/:id
 Delete specific user
 
 **Response:** (200)
 ```json
 {
   "message": "User deleted successfully"
 }
 ```
 
 **Errors:**
 - `404` - User not found
 
 ## Status Codes
 
 | Code | Meaning |
 |------|---------|
 | 200 | Success |
 | 201 | Created |
 | 400 | Bad Request / Validation Error |
 | 401 | Unauthorized |
 | 403 | Forbidden |
 | 404 | Not Found |
 | 409 | Conflict |
 | 500 | Internal Server Error |
 | 503 | Service Unavailable |
 
 ## Error Codes
 
 | Code | Description |
 |------|-------------|
 | `VALIDATION_ERROR` | Input validation failed |
 | `UNAUTHORIZED` | Missing or invalid authentication |
 | `FORBIDDEN` | Insufficient permissions |
 | `NOT_FOUND` | Resource not found |
 | `CONFLICT` | Resource conflict (e.g., duplicate) |
 | `INTERNAL_ERROR` | Server error |
 
 ## Rate Limiting
 
 Currently not implemented. Will be added in future releases.
 
 ## Authentication
 
 Use JWT bearer token:
 
 ```bash
 curl -H "Authorization: Bearer {token}" \
   http://localhost:3000/api/v1/users
 ```
 
 ## CORS
 
 CORS is enabled for configured origins. Default: `http://localhost:3001`
 
 Allowed Methods: `GET, POST, PUT, PATCH, DELETE, OPTIONS`
 Allowed Headers: `Content-Type, Authorization`
 
 ## Pagination
 
 All list endpoints support pagination:
 - `page`: Page number (starts at 1)
 - `pageSize`: Items per page (max 100)
 
 Response includes pagination metadata:
 ```json
 {
   "items": [...],
   "total": 500,
   "page": 1,
   "pageSize": 10,
   "totalPages": 50
 }
 ```
 
 ## Examples
 
 ### Using cURL
 
 **Create user:**
 ```bash
 curl -X POST http://localhost:3000/api/v1/users \
   -H "Content-Type: application/json" \
   -d '{
     "email": "user@example.com",
     "name": "John Doe",
     "password": "password123"
   }'
 ```
 
 **Login:**
 ```bash
 curl -X POST http://localhost:3000/api/v1/auth/login \
   -H "Content-Type: application/json" \
   -d '{
     "email": "user@example.com",
     "password": "password123"
   }'
 ```
 
 **Get users:**
 ```bash
 curl -X GET "http://localhost:3000/api/v1/users?page=1&pageSize=10" \
   -H "Authorization: Bearer {token}"
 ```
 
 ### Using JavaScript/Fetch
 
 ```javascript
 // Create user
 const response = await fetch('http://localhost:3000/api/v1/users', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
     email: 'user@example.com',
     name: 'John Doe',
     password: 'password123',
   }),
 });
 const result = await response.json();
 console.log(result);
 ```
 
 ## Swagger Documentation
 
 Interactive API documentation available at:
 ```
 http://localhost:3000/api/v1/docs
 ```
