
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-amber-400 hover:text-amber-300 hover:bg-amber-800/20"
    >
      <Languages className="h-4 w-4" />
      {language === 'hindi' ? 'English' : 'हिंदी'}
    </Button>
  );
};

export default LanguageSwitcher;
