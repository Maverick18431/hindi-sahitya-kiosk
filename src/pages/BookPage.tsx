
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getBookById } from '@/lib/data';
import BookDetails from '@/components/BookDetails';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import { shlokas } from '@/lib/shlokas';

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bookId = parseInt(id || '0');
  const book = getBookById(bookId);

  useEffect(() => {
    if (!book) {
      navigate('/books', { replace: true });
    }
  }, [book, navigate]);

  if (!book) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BookDetails book={book} />
        
        <div className="mt-12 bg-saffron-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <BookText className="h-6 w-6 text-maroon-600 mr-2" />
            <h3 className="text-xl font-bold text-maroon-800">संस्कृत साहित्य के मोती</h3>
          </div>
          <p className="mb-4 text-gray-700">
            हमारे संग्रह में शामिल प्राचीन संस्कृत श्लोक और उनके अर्थ देखें। ज्ञान और साहित्य की इस अनमोल धरोहर से परिचित हों।
          </p>
          <Link to="/#shlokas">
            <Button className="bg-saffron-500 hover:bg-saffron-600 text-white">
              श्लोक संग्रह देखें
            </Button>
          </Link>
        </div>
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© 2025 हिंदी साहित्य पुस्तकालय</p>
      </footer>
    </div>
  );
};

export default BookPage;
