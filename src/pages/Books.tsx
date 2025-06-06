import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BookOpen, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookPurchaseModal from '@/components/BookPurchaseModal';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "आत्मा",
      subtitle: "प्रेम का अंत | ज्ञान का प्रवाह | एकत्व में विलय",
      author: "हंसानंद महाराज",
      image: "/lovable-uploads/63d4ad27-e4c9-4979-b2bd-c0f83f4fc7b7.png",
      price: 500,
      currency: "₹",
      description: "A profound exploration of the nature of the Self, the flow of knowledge, and the dissolution into oneness.",
      detailedDescription: "इस पुस्तक में आत्मा के वास्तविक स्वरूप को समझाया गया है। यह पुस्तक उन सभी भ्रांतियों को दूर करती है जो आत्मा के नाम पर फैली हुई हैं और स्पष्ट करती है कि आत्मा कोई रहस्यमय या दिव्य वस्तु नहीं बल्कि आपका ही 'मैं' है। सरल भाषा में लिखी गई यह पुस्तक आध्यात्मिक जिज्ञासुओं के लिए अत्यंत उपयोगी है।",
      features: ["गीता और उपनिषद के मूल सिद्धांत", "व्यावहारिक आध्यात्मिक मार्गदर्शन", "सरल हिंदी भाषा में", "आत्म-चिंतन के लिए प्रेरणादायक"],
      pages: 250,
      language: "Hindi",
      category: "Spiritual Philosophy"
    },
    {
      id: 2,
      title: "ॐ = ब्रह्म = आत्मा",
      subtitle: "मांडुक्य उपनिषद पर एक स्वानुभूति प्रेरित मौलिक चिंतन",
      author: "हंसानंद महाराज",
      image: "/lovable-uploads/e51f14d9-2a5b-4896-b6e5-2e76d06ffa83.png",
      price: 350,
      currency: "₹",
      description: "An inspired commentary on the Upanishads, exploring the equation of Om, Brahman, and Atma.",
      detailedDescription: "मांडुक्य उपनिषद की यह व्याख्या लेखक की स्वानुभूति से प्रेरित है। इस पुस्तक में जागृत, स्वप्न और सुषुप्ति अवस्थाओं का गहन विश्लेषण किया गया है। यह पुस्तक भाषा के माध्यम से उस परम सत्य की ओर इशारा करती है जिसे केवल उच्च बुद्धि वाले साधक ही ग्रहण कर सकते हैं।",
      features: ["मांडुक्य उपनिषद की मौलिक व्याख्या", "चेतना की विभिन्न अवस्थाओं का विश्लेषण", "ॐ के गूढ़ अर्थ की व्याख्या", "व्यावहारिक अध्यात्म"],
      pages: 180,
      language: "Hindi",
      category: "Upanishad Commentary"
    }
  ];

  const handlePurchase = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleViewDetails = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-100 to-blue-100 py-20">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <BookOpen className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Sacred Books
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of profound spiritual texts that illuminate the path to self-realization and inner wisdom. 
            Each book offers deep insights into the nature of consciousness and the eternal truths of existence.
          </p>
        </div>
      </div>

      {/* Books Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {books.map((book) => (
            <Card key={book.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center p-8">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 shadow-lg"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {book.currency}{book.price}
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2 leading-relaxed">{book.subtitle}</p>
                  <p className="text-orange-600 font-semibold">by {book.author}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{book.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Pages:</span> {book.pages}
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span> {book.language}
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold">Category:</span> {book.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {book.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-600">
                    {book.currency}{book.price}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => handleViewDetails(book.id)}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </Button>
                    <Button 
                      onClick={() => handlePurchase(book)}
                      className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Purchase</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      <BookPurchaseModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Books;
