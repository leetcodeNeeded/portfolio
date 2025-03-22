import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Authentication Context
const AuthContext = createContext();

// Hook to easily use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component to wrap the app and provide auth context values
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('authUser');
      }
    }
    setLoading(false);
  }, []);

  // Mock login function - in a real app, this would call an API
  async function login(email, password) {
    // In a real application, this would call an authentication API
    // For demo purposes, we'll just check if the credentials match hardcoded values
    
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check credentials (in real app, this would be done server-side)
    if (email === 'admin@example.com' && password === 'password123') {
      const user = {
        uid: '1',
        email: 'admin@example.com',
        displayName: 'Dr. Harpuneet'
      };
      
      setCurrentUser(user);
      localStorage.setItem('authUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  }

  // Logout function
  async function logout() {
    setCurrentUser(null);
    localStorage.removeItem('authUser');
  }

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext; 