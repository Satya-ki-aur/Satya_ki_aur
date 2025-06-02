
import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import TimelineModal from './TimelineModal';
import LanguageToggle from '../LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  yearEn?: string;
  titleEn?: string;
  descriptionEn?: string;
  isActive?: boolean;
  backgroundImage?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  title: string;
  subtitle: string;
  titleEn?: string;
  subtitleEn?: string;
}

const Timeline: React.FC<TimelineProps> = ({ events, title, subtitle, titleEn, subtitleEn }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png');
  const { translate } = useLanguage();

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    
    // Change background image when timeline item is clicked
    if (event.backgroundImage) {
      setBackgroundImage(event.backgroundImage);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png" 
              alt="Hansanand ji Maharaj" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {translate(title, titleEn || title)}
          </h1>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {translate(subtitle, subtitleEn || subtitle)}
          </p>
        </div>
      </div>

      {/* Timeline Section with Background */}
      <div 
        className="max-w-4xl mx-auto px-4 py-16 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg"></div>
        
        <div className="relative bg-white rounded-lg shadow-sm p-8">
          {/* Language Toggle - Top Right */}
          <div className="flex justify-end mb-6">
            <LanguageToggle />
          </div>
          
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              yearEn={event.yearEn}
              titleEn={event.titleEn}
              descriptionEn={event.descriptionEn}
              isActive={event.isActive}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <TimelineModal
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
    </div>
  );
};

export default Timeline;
