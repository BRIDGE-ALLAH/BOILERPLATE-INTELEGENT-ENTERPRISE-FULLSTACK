 # MOONWITNESS API - Fastify
 
 Production-grade REST API dengan **Fastify** + **Node.js/TypeScript**.
 
 ## 🚀 Quick Start
 
 ```bash
 cd apps/api
 npm install
 npm run dev
 ```
 
 **API:** http://localhost:3000  
 **Docs:** http://localhost:3000/docs
 
 ## 📡 Endpoints
 
 | Method | Path | Description |
 |--------|------|-------------|
 | GET | `/api/v1/health` | Health check |
 | GET | `/api/v1/users` | List users |
 | POST | `/api/v1/users` | Create user |
 | GET | `/api/v1/users/:id` | Get user |
 | PUT | `/api/v1/users/:id` | Update user |
 | DELETE | `/api/v1/users/:id` | Delete user |
 
 ## 📂 Structure
 
 ```
 src/
 ├── index.ts              # Main app + routes
 └── api/
     ├── health/
     │   └── health.service.ts
     └── users/
         └── user.service.ts
 ```
 
 ## 🔧 Features
 
 ✅ Fastify (High performance)
 ✅ TypeScript (Type safety)
 ✅ CORS (Cross-origin)
 ✅ Swagger (Auto docs)
 ✅ Logger (Built-in)
 ✅ Async/await (Modern)
 
 ## 📦 Scripts
 
 ```bash
 npm run dev      # Development (watch mode)
 npm run build    # Build TypeScript
 npm start        # Production
 ```
 
 ## 🚢 Production
 
 ```bash
 npm run build
 npm start
 ```
 
 Server runs at http://localhost:3000
 
 ## 💾 Example Request
 
 ```bash
 # Create user
 curl -X POST http://localhost:3000/api/v1/users \
   -H "Content-Type: application/json" \
   -d '{"name":"John","email":"john@example.com"}'
 
 # List users
 curl http://localhost:3000/api/v1/users
 
 # Health check
 curl http://localhost:3000/api/v1/health
 ```
 
 ## 📚 Docs
 
 - Fastify: https://www.fastify.io
 - Swagger UI: http://localhost:3000/docs
