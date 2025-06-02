
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'hindi' | 'english';
  setLanguage: (lang: 'hindi' | 'english') => void;
  translate: (hindiText: string, englishText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'hindi' | 'english'>('hindi');

  const translate = (hindiText: string, englishText: string) => {
    return language === 'hindi' ? hindiText : englishText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
