
// Common types for API responses
export interface Chapter {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  applicationId?: string;
}

// Auth types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  success: boolean;
  message: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}
