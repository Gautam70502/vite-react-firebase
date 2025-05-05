
import { mockChapters } from './mockData';
import { Chapter } from './types';

// In production, use a real API endpoint
export const fetchChapters = async (): Promise<Chapter[]> => {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For production:
    // const response = await fetch('https://api.example.com/chapters');
    // if (!response.ok) throw new Error('Failed to fetch chapters');
    // return await response.json();
    
    return mockChapters;
  } catch (error) {
    console.error('Error fetching chapters:', error);
    throw new Error('Failed to fetch chapters. Please try again later.');
  }
};
