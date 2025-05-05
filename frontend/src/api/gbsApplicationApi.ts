
// API utilities for GBS Application

// Types for API responses
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

// Mock data for development
const mockChapters: Chapter[] = [
  { id: "chapter1", name: "Chapter 1" },
  { id: "chapter2", name: "Chapter 2" },
  { id: "chapter3", name: "Chapter 3" },
  { id: "chapter4", name: "Chapter 4" }
];

const mockCities: City[] = [
  { id: "surat", name: "Surat" },
  { id: "ahmedabad", name: "Ahmedabad" },
  { id: "vadodara", name: "Vadodara" },
  { id: "mumbai", name: "Mumbai" }
];

// API Functions with artificial delay to simulate real API calls
export const fetchChapters = async (): Promise<Chapter[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In production, this would be a real API call:
  // return fetch('https://api.example.com/chapters').then(res => res.json());
  
  return mockChapters;
};

export const fetchCities = async (): Promise<City[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In production, this would be a real API call:
  // return fetch('https://api.example.com/cities').then(res => res.json());
  
  return mockCities;
};

export const submitApplication = async (formData: any): Promise<SubmissionResponse> => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Log the submission data
  console.log("Submitting application data:", formData);
  
  // In production, this would be a real API call:
  // return fetch('https://api.example.com/applications', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // }).then(res => res.json());
  
  // Mock successful response
  return {
    success: true,
    message: "Application submitted successfully",
    applicationId: "APP-" + Date.now().toString()
  };
};
