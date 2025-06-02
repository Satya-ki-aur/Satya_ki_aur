
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';

const AudioBooks = () => {
  const audioBooks = [
    {
      title: "आत्मा की खोज - भाग 1",
      duration: "45 मिनट",
      narrator: "हंसानंद महाराज",
      description: "आत्मा की प्रकृति और उसकी पहचान पर गहरी चर्चा।"
    },
    {
      title: "ब्रह्म और जीव - एकत्व का रहस्य",
      duration: "38 मिनट",
      narrator: "हंसानंद महाराज",
      description: "ब्रह्म और जीवात्मा के बीच के संबंध की व्याख्या।"
    },
    {
      title: "ध्यान और साधना",
      duration: "52 मिनट",
      narrator: "हंसानंद महाराज",
      description: "ध्यान की तकनीक और आध्यात्मिक साधना के मार्ग।"
    },
    {
      title: "उपनिषदों की शिक्षाएं",
      duration: "1 घंटा 15 मिनट",
      narrator: "हंसानंद महाराज",
      description: "प्राचीन उपनिषदों से मिली अमूल्य शिक्षाओं की व्याख्या।"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">Audio Books</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to the profound teachings and wisdom through these carefully curated audio recordings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audioBooks.map((audioBook, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{audioBook.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {audioBook.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {audioBook.narrator}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">{audioBook.description}</p>
                <Button variant="outline" className="w-full">
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioBooks;
