import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = (e) => {
    e.target.id === "light" ? setTheme("light") : setTheme("dark");
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
