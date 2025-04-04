
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-maroon-600" />
            <div>
              <h1 className="text-2xl font-bold text-maroon-600">हिंदी साहित्य</h1>
              <p className="text-xs text-maroon-500">पुस्तकालय</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-maroon-600 transition-colors">
              {translate(translations.mainPage.hindi, translations.mainPage.english)}
            </Link>
            <Link to="/books" className="text-gray-700 hover:text-maroon-600 transition-colors">
              {translate(translations.books.hindi, translations.books.english)}
            </Link>
            <Link to="/authors" className="text-gray-700 hover:text-maroon-600 transition-colors">
              {translate(translations.authors.hindi, translations.authors.english)}
            </Link>
            <Link to="/genres" className="text-gray-700 hover:text-maroon-600 transition-colors">
              {translate(translations.genres.hindi, translations.genres.english)}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder={translate(translations.search.hindi, translations.search.english)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent w-64"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={translate(translations.search.hindi, translations.search.english)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent w-full"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-maroon-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translate(translations.mainPage.hindi, translations.mainPage.english)}
              </Link>
              <Link 
                to="/books" 
                className="text-gray-700 hover:text-maroon-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translate(translations.books.hindi, translations.books.english)}
              </Link>
              <Link 
                to="/authors" 
                className="text-gray-700 hover:text-maroon-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translate(translations.authors.hindi, translations.authors.english)}
              </Link>
              <Link 
                to="/genres" 
                className="text-gray-700 hover:text-maroon-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translate(translations.genres.hindi, translations.genres.english)}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
