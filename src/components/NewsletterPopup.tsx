
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already subscribed
      const hasSubscribed = localStorage.getItem('newsletter_subscribed');
      if (!hasSubscribed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // Here we would normally submit to a backend
      console.log('Subscribing email:', email);
      
      // Store that user has subscribed
      localStorage.setItem('newsletter_subscribed', 'true');
      
      // Show success toast
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
      
      // Close popup
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="text-gray-600">Stay updated with the latest news, events, and opportunities from REACH Nationals.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-reach-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to our privacy policy and consent to receive updates from REACH Nationals.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
