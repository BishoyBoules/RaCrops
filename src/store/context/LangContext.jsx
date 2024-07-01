"use client"
import { createContext, useState } from 'react';

export const LangContext = createContext("");

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <LangContext.Provider value={{ language, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
