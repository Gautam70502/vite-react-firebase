
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@/api/types';
import { getCurrentUser, isAuthenticated, login, logout } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from './use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const navigate = useNavigate();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
        setIsAuthUser(true);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Login function
  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await login({ email, password });
      setUser(response.user);
      setIsAuthUser(true);
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate("/");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed. Please try again.";
      toast({
        variant: "destructive",
        title: "Login failed",
        description: message,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuthUser(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/login");
  };

  const value = {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated: isAuthUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
