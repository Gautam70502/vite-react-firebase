
import { AuthResponse, ForgotPasswordRequest, ForgotPasswordResponse, LoginCredentials, User } from './types';

// Mock user for testing
const mockUser: User = {
  id: "1",
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  role: "user"
};

// Mock login function
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For testing - accept only specific credentials
  if (credentials.email === "test@example.com" && credentials.password === "password") {
    // Mock successful login
    const token = "mock-jwt-token-" + Date.now().toString();
    
    // Save to localStorage for persistence
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(mockUser));
    
    return {
      user: mockUser,
      token,
      success: true,
      message: "Login successful"
    };
  }
  
  // Mock failed login
  throw new Error("Invalid email or password");
};

// Mock logout function
export const logout = (): void => {
  // Clear auth data from localStorage
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};

// Mock forgot password function
export const forgotPassword = async (request: ForgotPasswordRequest): Promise<ForgotPasswordResponse> => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always succeed in mock implementation
  return {
    success: true,
    message: "If the email exists in our system, you will receive password reset instructions."
  };
};

// Check if user is authenticated
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem("user");
  if (!userJson) return null;
  
  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    logout(); // Clear potentially corrupt data
    return null;
  }
};

// Check if token exists
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken") && !!getCurrentUser();
};
