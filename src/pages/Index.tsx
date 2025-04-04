import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { books, featuredBooks, genres, authors } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';
import ShlokaSection from '@/components/ShlokaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-maroon-800 to-maroon-600 text-white py-16">
          <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/free-photo/old-books-arrangement-with-copy-space_23-2148898331.jpg?w=1380&t=st=1712268450~exp=1712269050~hmac=4fcbb61a91b92b22a15cb1fec4a9091a6b5db3f2bef5e23c7fdc08bc8fe6e59f')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                हिंदी साहित्य का डिजिटल पुस्तकालय
              </h1>
              <p className="text-xl mb-8">
                हिंदी के प्रमुख रचनाकारों की विरासत को संजोकर रखने वाला एक पहल। यहाँ आपको कालजयी साहित्य, कहानियां और कविताएँ मिलेंगी।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/books">
                  <Button className="bg-white text-maroon-700 hover:bg-gray-100">
                    पुस्तकालय देखें <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/authors">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    लेखक परिचय
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">प्रमुख रचनाएँ</h2>
              <Link to="/books" className="text-maroon-600 hover:text-maroon-700 flex items-center">
                सभी देखें <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* Shlokas Section */}
        <ShlokaSection />

        {/* Genres Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">साहित्य विधाएँ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {genres.map(genre => (
                <Link 
                  key={genre.id}
                  to={`/genres/${genre.id}`}
                  className="block p-6 bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-lg hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {genre.hindiName || genre.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {books.filter(book => book.genres.some(g => g.id === genre.id)).length} पुस्तकें
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Authors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">प्रसिद्ध लेखक</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {authors.map(author => (
                <Link 
                  key={author.id}
                  to={`/authors/${author.id}`}
                  className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 bg-maroon-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-maroon-600">
                      {(author.hindiName || author.name).charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {author.hindiName || author.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {books.filter(book => book.author.id === author.id).length} कृतियाँ
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-maroon-800 to-maroon-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl font-bold mb-4">हिंदी साहित्य का अनमोल खजाना</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              साहित्य हमारी संस्कृति और विरासत को सहेजता है। हमारे पुस्तकालय में हिंदी साहित्य की अमूल्य रचनाओं का संग्रह देखें।
            </p>
            <Link to="/books">
              <Button className="bg-white text-maroon-700 hover:bg-gray-100">
                पुस्तकालय देखें
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                <span className="text-xl font-bold">हिंदी साहित्य पुस्तकालय</span>
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link to="/books" className="hover:text-saffron-300">पुस्तकें</Link>
              <Link to="/authors" className="hover:text-saffron-300">लेखक</Link>
              <Link to="/genres" className="hover:text-saffron-300">विधाएँ</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 हिंदी साहित्य पुस्तकालय. सर्वाधिकार सुरक्षित.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
