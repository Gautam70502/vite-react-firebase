
import React from 'react';
import AuthLayout from '@/components/layouts/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLayout title="Signing in...">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </AuthLayout>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <AuthLayout 
      title="Welcome back"
      subtitle="Sign in to your account"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
