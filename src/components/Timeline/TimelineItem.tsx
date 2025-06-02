
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  yearEn?: string;
  titleEn?: string;
  descriptionEn?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  yearEn,
  titleEn,
  descriptionEn,
  isActive = false,
  onClick 
}) => {
  const { translate } = useLanguage();

  return (
    <div 
      className={`flex items-start mb-8 cursor-pointer transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mr-6">
        <div className={`w-4 h-4 rounded-full border-4 ${
          isActive ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'
        }`}></div>
        <div className="w-px h-16 bg-gray-300 mt-2"></div>
      </div>
      
      <div className="flex-1">
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 ${
          isActive ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-700'
        }`}>
          {translate(year, yearEn || year)}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {translate(title, titleEn || title)}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {translate(description, descriptionEn || description)}
        </p>
        <p className="text-blue-600 text-sm mt-2 font-medium">
          {translate('विस्तार से पढ़ें →', 'Read more →')}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
