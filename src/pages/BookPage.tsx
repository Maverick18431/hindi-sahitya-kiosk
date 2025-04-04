
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '@/lib/data';
import BookDetails from '@/components/BookDetails';
import Header from '@/components/Header';

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
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© 2025 हिंदी साहित्य पुस्तकालय</p>
      </footer>
    </div>
  );
};

export default BookPage;
