import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [koMode, setKoMode] = useState(false);
  const toggleKoMode = () => setKoMode((prev) => !prev);
  return (
    <LanguageContext.Provider value={{ koMode, toggleKoMode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguageMode = () => useContext(LanguageContext);
