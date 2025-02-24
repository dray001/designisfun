import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    // Toggle between light mode (empty string) and dark mode
    setTheme((prevTheme) => (prevTheme === '' ? 'dark-mode' : ''));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
