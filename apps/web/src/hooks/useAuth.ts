// @app - Authentication hook for React components
import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@app/components/ui/use-toast';

// Types
export interface User {
  id: string;
  email: string;
  role: string;
  name?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

// Context
const AuthContext = createContext<AuthContextType | null>(null);

// Auth provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  // Refresh user from API
  const refreshUser = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          setState({
            user: data.data,
            isLoading: false,
            isAuthenticated: true,
          });
          return;
        }
      }

      // If we get here, auth failed
      setState({ user: null, isLoading: false, isAuthenticated: false });
      localStorage.removeItem('token');
    } catch {
      setState({ user: null, isLoading: false, isAuthenticated: false });
      localStorage.removeItem('token');
    }
  }, []);

  // Login
  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error?.message || 'Login failed');
      }

      // Store token
      localStorage.setItem('token', data.data.token);

      setState({
        user: data.data.user,
        isLoading: false,
        isAuthenticated: true,
      });

      toast({
        title: 'Welcome back!',
        description: `Logged in as ${data.data.user.email}`,
      });

      navigate('/');
    } catch (error: any) {
      setState({ user: null, isLoading: false, isAuthenticated: false });
      toast({
        title: 'Login failed',
        description: error.message,
        variant: 'destructive',
      });
      throw error;
    }
  }, [navigate, toast]);

  // Signup
  const signup = useCallback(async (name: string, email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error?.message || 'Signup failed');
      }

      // Store token
      localStorage.setItem('token', data.data.token);

      setState({
        user: data.data.user,
        isLoading: false,
        isAuthenticated: true,
      });

      toast({
        title: 'Account created!',
        description: `Welcome, ${data.data.user.name || data.data.user.email}`,
      });

      navigate('/');
    } catch (error: any) {
      setState({ user: null, isLoading: false, isAuthenticated: false });
      toast({
        title: 'Signup failed',
        description: error.message,
        variant: 'destructive',
      });
      throw error;
    }
  }, [navigate, toast]);

  // Logout
  const logout = useCallback(async () => {
    const token = localStorage.getItem('token');

    try {
      if (token) {
        await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch {
      // Ignore logout API errors
    } finally {
      localStorage.removeItem('token');
      setState({ user: null, isLoading: false, isAuthenticated: false });
      navigate('/login');
    }
  }, [navigate]);

  // Initialize auth on mount
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        await refreshUser();
      } else {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
    initAuth();
  }, [refreshUser]);

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// HOC for protected routes
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function WithAuthComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
      return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (!isAuthenticated) {
      return <div className="flex items-center justify-center h-screen">Access denied. Please log in.</div>;
    }

    return <Component {...props} />;
  };
}