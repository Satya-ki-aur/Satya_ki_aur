
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Teachings = () => {
  const teachings = [
    {
      title: "The Nature of Atma",
      description: "Understanding the true Self beyond the limitations of body and mind",
      content: "The Atma is not born, nor does it die. It is eternal, unchanging, and the very essence of who you are."
    },
    {
      title: "Brahman and Unity",
      description: "Realizing the fundamental oneness that underlies all existence",
      content: "When the wave realizes it is the ocean, all sense of separation dissolves into the infinite expanse of Being."
    },
    {
      title: "Direct Experience",
      description: "The importance of firsthand realization over intellectual understanding",
      content: "Truth cannot be learned from books alone. It must be discovered through direct inquiry and experience."
    },
    {
      title: "Self-Inquiry",
      description: "The practice of questioning 'Who am I?' to discover one's true nature",
      content: "Ask yourself: Who is the one who is aware? Who knows that thoughts come and go? Find the knower."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">The Teachings</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Core principles and wisdom teachings that guide seekers toward self-realization and inner peace.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teachings.map((teaching, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{teaching.title}</CardTitle>
                <CardDescription className="text-gray-600">{teaching.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic leading-relaxed">"{teaching.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachings;
