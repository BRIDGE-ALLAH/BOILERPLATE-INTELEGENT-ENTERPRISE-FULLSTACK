 # API Architecture - Enterprise Standard
 
 Fastify-based REST API following MOONWITNESS enterprise standards.
 
 ## 📂 Structure
 
 ```
 src/
 ├── config/                  # Configuration
 │   ├── env.ts              # Environment validation
 │   └── app.ts              # App configuration
 ├── common/
 │   ├── types/              # Shared types
 │   │   └── user.ts        # User types
 │   ├── interfaces/         # Shared interfaces
 │   ├── constants/          # Constants
 │   └── enums/              # Enums
 ├── core/
 │   ├── exceptions/         # Custom exceptions
 │   ├── guards/             # Route guards
 │   └── utils/              # Core utilities
 ├── modules/                # Feature modules
 │   ├── health/
 │   │   ├── health.controller.ts
 │   │   └── health.service.ts
 │   └── users/
 │       ├── users.controller.ts
 │       ├── user.service.ts
 │       └── repositories/
 │           └── user.repository.ts
 └── index.ts                # Entry point
 ```
 
 ## 🔄 Layer Responsibilities
 
 ### Controllers
 - Handle HTTP requests/responses
 - Route definitions
 - Call services
 - Return formatted responses
 
 ### Services
 - Business logic
 - Data validation
 - Error handling
 - Orchestration
 
 ### Repositories
 - Database access
 - Query building
 - Entity mapping
 
 ## 🌐 API Response Format
 
 All responses follow standard format:
 
 **Success:**
 ```json
 {
   "success": true,
   "data": { /* payload */ },
   "meta": {
     "timestamp": "2024-01-01T00:00:00Z",
     "version": "v1"
   }
 }
 ```
 
 **Error:**
 ```json
 {
   "success": false,
   "error": {
     "code": "NOT_FOUND",
     "message": "User not found"
   },
   "meta": {
     "timestamp": "2024-01-01T00:00:00Z",
     "version": "v1"
   }
 }
 ```
 
 ## 🛠️ Development
 
 ### Setup
 ```bash
 npm install
 cp .env.example .env
 npm run dev
 ```
 
 ### Build
 ```bash
 npm run build
 npm start
 ```
 
 ## 📋 Endpoints
 
 | Method | Path | Description |
 |--------|------|-------------|
 | GET | `/api/v1/health` | Health check |
 | GET | `/api/v1/users` | List users |
 | POST | `/api/v1/users` | Create user |
 | GET | `/api/v1/users/:id` | Get user |
 | PUT | `/api/v1/users/:id` | Update user |
 | DELETE | `/api/v1/users/:id` | Delete user |
