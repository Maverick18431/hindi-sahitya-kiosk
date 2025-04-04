
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'hindi' | 'english';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translate: (hindi: string, english: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hindi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hindi' ? 'english' : 'hindi');
  };

  const translate = (hindi: string, english: string) => {
    return language === 'hindi' ? hindi : english;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
