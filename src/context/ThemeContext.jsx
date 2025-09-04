import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a theme preference stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  // Or check system preference if no stored preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initialize theme state (dark by default, or based on stored/system preference)
  const [isDarkTheme, setIsDarkTheme] = useState(
    storedTheme ? storedTheme === 'dark' : prefersDark
  );

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    // Store theme preference
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    
    // Update document class for CSS theme switching
    if (isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};