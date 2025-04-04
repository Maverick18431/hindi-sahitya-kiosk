
import { useState } from 'react';
import { authors, genres } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

interface BookFilterProps {
  onFilterChange: (authors: number[], genres: number[]) => void;
}

const BookFilter = ({ onFilterChange }: BookFilterProps) => {
  const [selectedAuthors, setSelectedAuthors] = useState<number[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleAuthor = (authorId: number) => {
    setSelectedAuthors(prev => 
      prev.includes(authorId) 
        ? prev.filter(id => id !== authorId) 
        : [...prev, authorId]
    );
  };

  const toggleGenre = (genreId: number) => {
    setSelectedGenres(prev => 
      prev.includes(genreId) 
        ? prev.filter(id => id !== genreId) 
        : [...prev, genreId]
    );
  };

  const applyFilters = () => {
    onFilterChange(selectedAuthors, selectedGenres);
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  const clearFilters = () => {
    setSelectedAuthors([]);
    setSelectedGenres([]);
    onFilterChange([], []);
  };

  return (
    <div className="mb-8">
      <div className="md:hidden">
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-center gap-2 bg-maroon-600 hover:bg-maroon-700"
        >
          <Filter className="h-4 w-4" />
          <span>फिल्टर्स</span>
        </Button>
      </div>
      
      <div className={`${isFilterOpen || 'md:block hidden'} mt-4 p-6 bg-white rounded-lg shadow-md`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">फिल्टर करें</h3>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsFilterOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">लेखक</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {authors.map(author => (
                <div key={author.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`author-${author.id}`}
                    checked={selectedAuthors.includes(author.id)}
                    onChange={() => toggleAuthor(author.id)}
                    className="rounded border-gray-300 text-maroon-600 focus:ring-maroon-500"
                  />
                  <label 
                    htmlFor={`author-${author.id}`} 
                    className="ml-2 text-sm text-gray-700"
                  >
                    {author.hindiName || author.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">विधाएँ</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {genres.map(genre => (
                <div key={genre.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`genre-${genre.id}`}
                    checked={selectedGenres.includes(genre.id)}
                    onChange={() => toggleGenre(genre.id)}
                    className="rounded border-gray-300 text-maroon-600 focus:ring-maroon-500"
                  />
                  <label 
                    htmlFor={`genre-${genre.id}`} 
                    className="ml-2 text-sm text-gray-700"
                  >
                    {genre.hindiName || genre.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={applyFilters}
              className="bg-maroon-600 hover:bg-maroon-700"
            >
              फिल्टर लागू करें
            </Button>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="border-maroon-600 text-maroon-600 hover:bg-maroon-50"
            >
              फिल्टर हटाएँ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
