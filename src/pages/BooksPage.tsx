
import { useState, useEffect } from 'react';
import { books, authors, genres } from '@/lib/data';
import BookCard from '@/components/BookCard';
import BookFilter from '@/components/BookFilter';
import Header from '@/components/Header';
import { Book } from '@/lib/data';

const BooksPage = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [selectedAuthors, setSelectedAuthors] = useState<number[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    let result = [...books];
    
    if (selectedAuthors.length > 0) {
      result = result.filter(book => selectedAuthors.includes(book.author.id));
    }
    
    if (selectedGenres.length > 0) {
      result = result.filter(book => 
        book.genres.some(genre => selectedGenres.includes(genre.id))
      );
    }
    
    setFilteredBooks(result);
  }, [selectedAuthors, selectedGenres]);

  const handleFilterChange = (authorIds: number[], genreIds: number[]) => {
    setSelectedAuthors(authorIds);
    setSelectedGenres(genreIds);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">पुस्तकालय</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <BookFilter onFilterChange={handleFilterChange} />
          </div>
          
          <div className="md:w-3/4">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  इस फिल्टर से कोई पुस्तक नहीं मिली।
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© 2025 हिंदी साहित्य पुस्तकालय</p>
      </footer>
    </div>
  );
};

export default BooksPage;
