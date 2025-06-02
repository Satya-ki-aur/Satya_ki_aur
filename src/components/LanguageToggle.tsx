
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? 'english' : 'hindi');
  };

  return (
    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border">
      <span className={`text-sm font-medium ${language === 'hindi' ? 'text-gray-900' : 'text-gray-500'}`}>
        हिंदी
      </span>
      <Switch
        checked={language === 'english'}
        onCheckedChange={handleLanguageChange}
      />
      <span className={`text-sm font-medium ${language === 'english' ? 'text-gray-900' : 'text-gray-500'}`}>
        English
      </span>
    </div>
  );
};

export default LanguageToggle;
