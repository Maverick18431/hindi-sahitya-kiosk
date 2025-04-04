
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getBookById } from '@/lib/data';
import Header from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReadPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bookId = parseInt(id || '0');
  const book = getBookById(bookId);

  useEffect(() => {
    if (!book || !book.readAvailable) {
      navigate('/books', { replace: true });
    }
  }, [book, navigate]);

  if (!book || !book.readAvailable) {
    return null;
  }

  // This is a simplified reading experience for demonstration purposes
  // In a real application, this would be more sophisticated
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to={`/books/${book.id}`}>
              <Button variant="ghost" className="flex items-center text-maroon-600 hover:text-maroon-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                वापस जाएँ
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {book.hindiTitle || book.title}
            </h1>
            <p className="text-gray-600 mb-8">
              {book.author.hindiName || book.author.name} द्वारा
            </p>
            
            <div className="prose max-w-none text-lg">
              {/* For demonstration purposes, we're just showing the preview text. 
                  In a real app, this would be the full content of the book */}
              <p className="whitespace-pre-line font-hindi text-gray-800 leading-relaxed">
                {book.previewText || "कृपया क्षमा करें, इस पुस्तक का पूर्ण पाठ अभी उपलब्ध नहीं है।"}
              </p>
              
              {/* Adding placeholder text to simulate more content */}
              <p className="whitespace-pre-line font-hindi text-gray-800 leading-relaxed mt-6">
                यह केवल एक प्रदर्शन के लिए है। वास्तविक एप्लिकेशन में, यहाँ पूरी पुस्तक की सामग्री होगी।
              </p>
              
              <p className="whitespace-pre-line font-hindi text-gray-800 leading-relaxed mt-6">
                हम शीघ्र ही अधिक पुस्तकों का पूर्ण पाठ जोड़ेंगे। धन्यवाद।
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© 2025 हिंदी साहित्य पुस्तकालय</p>
      </footer>
    </div>
  );
};

export default ReadPage;
