
import { mockCities } from './mockData';
import { City } from './types';

// In production, use a real API endpoint
export const fetchCities = async (): Promise<City[]> => {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For production:
    // const response = await fetch('https://api.example.com/cities');
    // if (!response.ok) throw new Error('Failed to fetch cities');
    // return await response.json();
    
    return mockCities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw new Error('Failed to fetch cities. Please try again later.');
  }
};
