
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Books = () => {
  const books = [
    {
      title: "आत्मा",
      subtitle: "प्रेम का अंत | ज्ञान का प्रवाह | एकत्व में विलय",
      author: "हंसानंद महाराज",
      image: "/lovable-uploads/63d4ad27-e4c9-4979-b2bd-c0f83f4fc7b7.png",
      description: "A profound exploration of the nature of the Self, the flow of knowledge, and the dissolution into oneness."
    },
    {
      title: "ॐ = ब्रह्म = आत्मा",
      subtitle: "मानुषात् उपनिषद् पर एक स्वयंभूति प्रेरित पोलिक्लिनिकल",
      author: "हंसानंद महाराज",
      image: "/lovable-uploads/e51f14d9-2a5b-4896-b6e5-2e76d06ffa83.png",
      description: "An inspired commentary on the Upanishads, exploring the equation of Om, Brahman, and Atma."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">Books</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of profound spiritual texts that illuminate the path to self-realization and inner wisdom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.subtitle}</p>
                <p className="text-sm font-medium text-gray-700 mb-3">by {book.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{book.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
