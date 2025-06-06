import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Truck, Shield, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Book {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  currency: string;
  image: string;
}

interface BookPurchaseModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookPurchaseModal: React.FC<BookPurchaseModalProps> = ({ book, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'online'
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      // Validate contact details (email is now optional)
      if (!formData.name || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in your name and phone number.",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate address
      if (!formData.address || !formData.city || !formData.state || !formData.pincode) {
        toast({
          title: "Missing Information",
          description: "Please fill in all address details.",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCompleteOrder = () => {
    // Here you would integrate with a payment gateway
    toast({
      title: "Order Placed Successfully!",
      description: `Your order for "${book?.title}" has been confirmed. You will receive a confirmation email shortly.`,
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      paymentMethod: 'online'
    });
    setCurrentStep(1);
    onClose();
  };

  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Purchase Book
          </DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step ? 'bg-orange-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Book Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-4">
            <img src={book.image} alt={book.title} className="w-16 h-20 object-contain" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.subtitle}</p>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-lg font-bold text-orange-600 mt-1">{book.currency}{book.price}</p>
            </div>
          </div>
        </div>

        {/* Step 1: Contact Details */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email (optional)"
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Delivery Address */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              Delivery Address
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Pincode"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Method
            </h3>
            <div className="space-y-3">
              <div className="border rounded-lg p-4 border-orange-200 bg-orange-50">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleInputChange}
                    className="text-orange-500"
                  />
                  <div>
                    <span className="font-medium">Online Payment</span>
                    <p className="text-sm text-gray-600">Pay securely using UPI, Credit/Debit Card, or Net Banking</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold mb-3">Order Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Book Price:</span>
                  <span>{book.currency}{book.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>{book.currency}{book.price}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600 mt-4">
              <Shield className="w-4 h-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onClose : handlePreviousStep}
          >
            {currentStep === 1 ? 'Cancel' : 'Previous'}
          </Button>
          
          {currentStep < 3 ? (
            <Button
              onClick={handleNextStep}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Next Step
            </Button>
          ) : (
            <Button
              onClick={handleCompleteOrder}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Complete Order
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookPurchaseModal; 