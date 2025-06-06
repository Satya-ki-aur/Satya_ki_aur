import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingCart, ArrowLeft, MessageCircle, User } from 'lucide-react';
import BookPurchaseModal from '@/components/BookPurchaseModal';
import { useToast } from '@/hooks/use-toast';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  // Mock reviews data (in real app, this would come from Supabase)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "राम कुमार",
      rating: 5,
      comment: "यह पुस्तक वास्तव में आत्मा के वास्तविक स्वरूप को समझने में अत्यंत सहायक है। लेखक ने बहुत ही सरल भाषा में गहरे विषयों को समझाया है।",
      date: "2024-05-15"
    },
    {
      id: 2,
      name: "सुनीता शर्मा",
      rating: 4,
      comment: "आध्यात्मिक जिज्ञासुओं के लिए एक उत्कृष्ट पुस्तक। व्यावहारिक ज्ञान से भरपूर।",
      date: "2024-05-10"
    }
  ]);

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
      category: "Spiritual Philosophy",
      fullDescription: "यह पुस्तक आत्मा के वास्तविक स्वरूप पर एक गहन चिंतन प्रस्तुत करती है। हंसानंद महाराज ने इसमें प्राचीन वैदिक ज्ञान को आधुनिक संदर्भ में प्रस्तुत किया है। पुस्तक तीन मुख्य भागों में विभाजित है - प्रेम का अंत, ज्ञान का प्रवाह, और एकत्व में विलय। प्रत्येक भाग में पाठकों को आत्म-अन्वेषण की यात्रा पर ले जाने वाले व्यावहारिक अभ्यास और चिंतन के विषय दिए गए हैं।"
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
      category: "Upanishad Commentary",
      fullDescription: "मांडुक्य उपनिषद के इस अनूठे विश्लेषण में लेखक ने ॐ के तीन मात्राओं - अ, उ, म - का गहन अध्ययन प्रस्तुत किया है। पुस्तक में चेतना की चार अवस्थाओं - जागृत, स्वप्न, सुषुप्ति और तुरीय - का विस्तृत वर्णन है। यह केवल एक शास्त्रीय व्याख्या नहीं है बल्कि एक साधक की अनुभूति पर आधारित मौलिक चिंतन है।"
    }
  ];

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Book not found</h1>
          <Button onClick={() => navigate('/books')} className="bg-orange-500 hover:bg-orange-600">
            Back to Books
          </Button>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // In real app, this would save to Supabase
    const newReview = {
      id: reviews.length + 1,
      name: reviewForm.name,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([newReview, ...reviews]);
    setReviewForm({ name: '', email: '', rating: 5, comment: '' });
    toast({
      title: "Review Added!",
      description: "Thank you for your review. It will help other readers.",
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Button 
            onClick={() => navigate('/books')} 
            variant="ghost" 
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Books</span>
          </Button>
        </div>
      </div>

      {/* Book Details */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Book Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center p-8">
              <img 
                src={book.image} 
                alt={book.title}
                className="max-h-full max-w-full object-contain shadow-lg"
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-2">{book.subtitle}</p>
              <p className="text-lg text-orange-600 font-semibold">by {book.author}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {renderStars(Math.round(averageRating))}
                <span className="text-sm text-gray-600 ml-2">
                  ({averageRating.toFixed(1)}) • {reviews.length} reviews
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-orange-600">
              {book.currency}{book.price}
            </div>

            <div className="prose text-gray-700">
              <p className="leading-relaxed">{book.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-800">Pages:</span>
                <span className="text-gray-600 ml-2">{book.pages}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Language:</span>
                <span className="text-gray-600 ml-2">{book.language}</span>
              </div>
              <div className="col-span-2">
                <span className="font-semibold text-gray-800">Category:</span>
                <span className="text-gray-600 ml-2">{book.category}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {book.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white py-4 text-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Purchase Book - {book.currency}{book.price}</span>
            </Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Add Review */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Write a Review
              </h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm({...reviewForm, email: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating *</Label>
                  <select 
                    id="rating"
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({...reviewForm, rating: parseInt(e.target.value)})}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="comment">Review *</Label>
                  <Textarea
                    id="comment"
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                    placeholder="Share your thoughts about this book..."
                    required
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Customer Reviews ({reviews.length})
            </h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <BookPurchaseModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BookDetail; 