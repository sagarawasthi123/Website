// Simple auth service for handling authentication
// This is a placeholder implementation that can be replaced with actual Firebase auth

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const auth = {
  // Sign out the current user
  signOut: async () => {
    // Simulate network delay
    await delay(800);
    
    // Clear any auth tokens from localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    
    return { success: true };
  },
  
  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('auth_token');
  }
};