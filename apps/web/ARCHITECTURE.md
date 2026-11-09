 # Frontend Architecture - Enterprise Standard
 
 Next.js + React frontend following MOONWITNESS enterprise standards.
 
 ## 📂 Structure (Target)
 
 ```
 src/
 ├── @core/                 # Core framework setup
 │   ├── components/        # Core UI components
 │   ├── contexts/          # Core React contexts
 │   ├── hooks/             # Core custom hooks
 │   ├── providers/         # App providers
 │   ├── theme/             # Theme configuration
 │   ├── styles/            # Global styles
 │   └── utils/             # Core utilities
 ├── common/
 │   ├── components/        # Reusable UI components
 │   ├── layouts/           # Layout components
 │   ├── constants/         # App constants
 │   ├── types/             # Shared types
 │   ├── utils/             # Shared utilities
 │   └── enums/             # Shared enums
 ├── features/              # Feature modules
 │   ├── auth/
 │   │   ├── pages/
 │   │   ├── components/
 │   │   ├── hooks/
 │   │   ├── services/
 │   │   ├── types/
 │   │   └── utils/
 │   ├── users/
 │   │   ├── pages/
 │   │   ├── components/
 │   │   ├── hooks/
 │   │   ├── services/
 │   │   ├── types/
 │   │   └── utils/
 │   └── [other-features]/
 ├── services/
 │   ├── api/               # API client services
 │   ├── auth/              # Auth services
 │   └── storage/           # Local storage, session, etc
 ├── hooks/                 # Global custom hooks
 ├── store/                 # Redux/Zustand store
 ├── assets/
 │   ├── images/
 │   ├── icons/
 │   ├── fonts/
 │   └── svg/
 ├── app/                   # Next.js app directory
 │   └── layout.tsx
 └── pages/                 # Next.js pages (if using pages router)
 ```
 
 ## 🔤 Naming Conventions
 
 ### React Components
 - PascalCase file names
 - Co-locate styles/tests
 
 Example:
 ```
 UserCard/
 ├── UserCard.tsx          # Component
 ├── UserCard.module.css   # Styles
 ├── UserCard.spec.tsx     # Tests
 └── index.ts              # Export
 ```
 
 ### Hooks
 - camelCase: `useUser.ts`, `useFetch.ts`
 
 ### Services
 - camelCase: `api.service.ts`, `auth.service.ts`
 
 ### Types/Interfaces
 - PascalCase: `User.ts`, `UserResponse.ts`
 
 ### Constants
 - UPPER_SNAKE_CASE: `API_ENDPOINTS.ts`
 
 ## 📦 API Client Pattern
 
 ### Create typed API client
 ```typescript
 // services/api/client.ts
 import axios from 'axios';
 import { User, CreateUserDto } from '@/common/types';
 
 const client = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
 });
 
 export const userApi = {
   getAll: () => client.get<{ data: User[] }>('/users'),
   getById: (id: string) => client.get<{ data: User }>(`/users/${id}`),
   create: (data: CreateUserDto) => client.post<{ data: User }>('/users', data),
   update: (id: string, data: Partial<CreateUserDto>) => 
     client.put<{ data: User }>(`/users/${id}`, data),
   delete: (id: string) => client.delete(`/users/${id}`),
 };
 ```
 
 ## 🎣 Custom Hooks Pattern
 
 ### Data fetching hook
 ```typescript
 // features/users/hooks/useUsers.ts
 import { useQuery } from '@tanstack/react-query';
 import { userApi } from '@/services/api';
 
 export const useUsers = () => {
   return useQuery({
     queryKey: ['users'],
     queryFn: () => userApi.getAll(),
   });
 };
 ```
 
 ## 📋 Component Pattern
 
 ### Feature component
 ```typescript
 // features/users/components/UserList.tsx
 'use client';
 
 import { useUsers } from '../hooks/useUsers';
 import { UserCard } from './UserCard';
 
 export const UserList = () => {
   const { data, isLoading, error } = useUsers();
 
   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error loading users</div>;
 
   return (
     <div className="grid gap-4">
       {data?.map(user => (
         <UserCard key={user.id} user={user} />
       ))}
     </div>
   );
 };
 ```
 
 ## 🧪 Testing Pattern
 
 ### Component test
 ```typescript
 // features/users/components/UserCard.spec.tsx
 import { render, screen } from '@testing-library/react';
 import { UserCard } from './UserCard';
 
 describe('UserCard', () => {
   it('should_display_user_name_when_rendered', () => {
     const user = { id: '1', name: 'John', email: 'john@example.com' };
     render(<UserCard user={user} />);
     expect(screen.getByText('John')).toBeInTheDocument();
   });
 });
 ```
 
 ## 🌐 Environment Setup
 
 ### .env.local
 ```env
 NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
 NEXT_PUBLIC_APP_NAME=MOONWITNESS
 ```
 
 ## 🏗️ Current State vs Target
 
 **Current:** Existing structure with @core, @layouts, @menu, etc.
 **Target:** Aligned with enterprise standard
 
 ### Migration Steps:
 1. Organize existing code into `features/` by domain
 2. Move reusable components to `common/components`
 3. Create typed API clients in `services/api`
 4. Implement pattern-based hooks
 5. Standardize naming conventions
 6. Update documentation
