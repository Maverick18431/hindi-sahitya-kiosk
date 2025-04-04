
import { Link } from 'react-router-dom';
import { Book } from '@/lib/data';
import { Button } from '@/components/ui/button';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card group">
      <div className="book-card-image">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="book-card-overlay">
          <div className="flex flex-col space-y-2">
            <Link to={`/books/${book.id}`}>
              <Button variant="default" className="bg-maroon-600 hover:bg-maroon-700">
                विवरण देखें
              </Button>
            </Link>
            {book.readAvailable && (
              <Link to={`/read/${book.id}`}>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  पढ़ें
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="book-card-content">
        <h3 className="text-lg font-bold text-gray-800">{book.hindiTitle || book.title}</h3>
        <p className="text-sm text-gray-600">{book.author.hindiName || book.author.name}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {book.genres.map((genre) => (
            <span 
              key={genre.id} 
              className="text-xs px-2 py-1 rounded-full bg-saffron-100 text-saffron-800"
            >
              {genre.hindiName || genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
