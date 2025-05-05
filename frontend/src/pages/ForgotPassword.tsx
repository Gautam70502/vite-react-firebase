
import React from 'react';
import AuthLayout from '@/components/layouts/AuthLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ForgotPassword = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLayout title="Loading...">
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
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
