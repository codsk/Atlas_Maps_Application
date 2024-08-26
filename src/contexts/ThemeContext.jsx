import { createContext, useState } from "react";

export const themeContext=createContext()

export function ThemeProvider({children}){
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (<themeContext.Provider value={[mode,setMode]}>{children}</themeContext.Provider>)
}