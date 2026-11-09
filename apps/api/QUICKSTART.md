 # Quick Start Guide
 
 ## Installation
 
 1. Install dependencies:
 ```bash
 cd apps/api
 bun install
 ```
 
 2. Configure environment:
 ```bash
 cp .env.example .env
 ```
 
 3. Start development server:
 ```bash
 bun run dev
 ```
 
 Server runs at: `http://localhost:3000/api/v1`
 
 ## API Documentation
 
 **Interactive Swagger UI:**
 ```
 http://localhost:3000/api/v1/docs
 ```
 
 **Health Check:**
 ```bash
 curl http://localhost:3000/api/v1/health
 ```
 
 ## Common Commands
 
 | Command | Description |
 |---------|-------------|
 | `bun run dev` | Start development server with hot reload |
 | `bun run build` | Build for production |
 | `bun start` | Run production build |
 | `bun test` | Run tests |
 | `bun run lint` | Check code style |
 | `bun run format` | Auto-format code |
 
 ## Testing Endpoints
 
 **Health Check:**
 ```bash
 curl http://localhost:3000/api/v1/health
 ```
 
 **Create User:**
 ```bash
 curl -X POST http://localhost:3000/api/v1/users \
   -H "Content-Type: application/json" \
   -d '{
     "email": "test@example.com",
     "name": "Test User",
     "password": "password123"
   }'
 ```
 
 **List Users:**
 ```bash
 curl http://localhost:3000/api/v1/users
 ```
 
 **Login:**
 ```bash
 curl -X POST http://localhost:3000/api/v1/auth/login \
   -H "Content-Type: application/json" \
   -d '{
     "email": "test@example.com",
     "password": "password123"
   }'
 ```
 
 ## Project Structure
 
 ```
 src/
 ├── application/        # App bootstrap
 ├── modules/            # Feature modules
 │  ├── auth/           # Authentication
 │  ├── users/          # User management
 │  └── health/         # Health checks
 ├── services/          # Business logic
 ├── middleware/        # Request handling
 ├── exceptions/        # Error types
 ├── config/            # Configuration
 ├── types/             # TypeScript types
 ├── utils/             # Helper functions
 └── index.ts           # Entry point
 ```
 
 ## Next Steps
 
 1. Read [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed design
 2. Check [API_REFERENCE.md](./API_REFERENCE.md) for all endpoints
 3. Explore modules to understand patterns
 4. Extend with new features
 
 ## Production Deployment
 
 1. Set NODE_ENV=production
 2. Set secure JWT_SECRET
 3. Configure CORS_ORIGIN for your domain
 4. Build: `bun run build`
 5. Run: `bun start`
 
 ## Support
 
 For issues or questions, check:
 - README.md - General information
 - ARCHITECTURE.md - Design patterns
 - API_REFERENCE.md - Endpoint documentation
