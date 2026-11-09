// ** Fake user data and data type

// ** SECURITY WARNING: This is demo/template data only.
// ** REMOVE THIS FILE and replace with real database authentication before production deployment.
// ** Never store plaintext passwords — use bcrypt or argon2 in production.
export type UserTable = {
  id: number
  name: string
  email: string
  image: string
  password: string
}

// =============== Fake Data — FOR DEVELOPMENT/DEMO ONLY ============================

export const users: UserTable[] = [
  {
    id: 1,
    name: 'John Doe',
    password: 'admin',
    email: 'admin@vuexy.com',
    image: '/images/avatars/1.png'
  }
]
