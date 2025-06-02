
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    year: string;
    title: string;
    description: string;
    yearEn?: string;
    titleEn?: string;
    descriptionEn?: string;
  } | null;
}

const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose, event }) => {
  const { translate } = useLanguage();

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {translate(event.title, event.titleEn || event.title)}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              {translate(event.year, event.yearEn || event.year)}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed text-base">
            {translate(event.description, event.descriptionEn || event.description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineModal;
