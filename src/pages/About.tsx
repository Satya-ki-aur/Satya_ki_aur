
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-light text-gray-800 mb-8 text-center">About</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to the official website dedicated to the life and teachings of Hansanand ji Maharaj, 
              a spiritual teacher whose wisdom continues to inspire seekers around the world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website serves as a comprehensive resource for understanding his profound teachings, 
              exploring his life journey, and accessing his written works and audio recordings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through these pages, you will find a timeline of his life, his core teachings, 
              a collection of his books, and audio recordings that capture the essence of his wisdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
