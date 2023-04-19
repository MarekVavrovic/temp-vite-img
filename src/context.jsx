import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

//DARKMODE WITH JAVASCRIPT
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem(`darkTheme`) === `true`;
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  //dark theme variable
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState(`dog`);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    //saving Theme preference into local storage
    localStorage.setItem(`darkTheme`, newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
