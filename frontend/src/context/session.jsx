import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the session ID when the app starts
  useEffect(() => {
    const fetchSessionId = async () => {
      try {
        const response = await fetch('http://localhost:3000/session');
        const data = await response.json();
        setSessionId(data.sessionId);
      } catch (error) {
        console.error('Error fetching session ID:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionId();
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
