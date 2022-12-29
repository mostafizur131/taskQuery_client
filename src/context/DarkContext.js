import React, { createContext, useEffect, useState } from "react";

export const DARK_CONTEXT = createContext();

const DarkContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const darkToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = { darkToggle };
  return (
    <DARK_CONTEXT.Provider value={value}>{children}</DARK_CONTEXT.Provider>
  );
};

export default DarkContext;
