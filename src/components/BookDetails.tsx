
import { Link } from 'react-router-dom';
import { Book } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Calendar, User, Bookmark } from 'lucide-react';

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 p-6 flex justify-center">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full max-w-[250px] object-cover rounded-md shadow-md"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {book.hindiTitle || book.title}
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            {book.title !== book.hindiTitle && book.title}
          </h2>

          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-maroon-500 mr-2" />
            <Link to={`/authors/${book.author.id}`} className="text-maroon-600 hover:underline">
              {book.author.hindiName || book.author.name}
            </Link>
          </div>

          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-maroon-500 mr-2" />
            <span className="text-gray-600">{book.publishedYear}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {book.genres.map(genre => (
              <Link
                key={genre.id}
                to={`/genres/${genre.id}`}
                className="inline-flex items-center px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 hover:bg-saffron-200 transition-colors"
              >
                <Bookmark className="h-4 w-4 mr-1" />
                {genre.hindiName || genre.name}
              </Link>
            ))}
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700">{book.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {book.readAvailable ? (
              <Link to={`/read/${book.id}`}>
                <Button className="bg-maroon-600 hover:bg-maroon-700">पढ़ें</Button>
              </Link>
            ) : (
              <Button disabled className="bg-gray-400 cursor-not-allowed">पढ़ना उपलब्ध नहीं</Button>
            )}
            <Link to="/books">
              <Button variant="outline" className="border-maroon-600 text-maroon-600 hover:bg-maroon-50">
                अन्य पुस्तकें देखें
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {book.previewText && (
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">अंश:</h3>
          <blockquote className="p-4 italic bg-gray-50 rounded-lg border-l-4 border-maroon-500">
            <p className="whitespace-pre-line text-gray-700 font-hindi">{book.previewText}</p>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
