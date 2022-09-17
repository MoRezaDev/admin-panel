import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    const isLight = theme === "light";
    isLight ? setTheme("dark") : setTheme("light");
  };
  return (
    <themeContext.Provider value={(theme, changeTheme)}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
