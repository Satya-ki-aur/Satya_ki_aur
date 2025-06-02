
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png" 
              alt="Hansanand ji Maharaj" 
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            The Teachings of<br />
            <span className="text-blue-600">Hansanand ji Maharaj</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Discover the profound wisdom and spiritual teachings that guide seekers 
            toward self-realization and inner transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/hansanand">
              <Button size="lg" className="w-full sm:w-auto">
                Explore His Life
              </Button>
            </NavLink>
            <NavLink to="/teachings">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Read Teachings
              </Button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sacred Texts</h3>
              <p className="text-gray-600">Explore profound spiritual writings and commentaries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Audio Teachings</h3>
              <p className="text-gray-600">Listen to recorded discourses and spiritual guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Life Timeline</h3>
              <p className="text-gray-600">Journey through the significant moments and teachings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
