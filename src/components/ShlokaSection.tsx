
import React, { useState } from 'react';
import { shlokas } from '@/lib/shlokas';
import ShlokaCard from './ShlokaCard';
import { Button } from '@/components/ui/button';

const ShlokaSection = () => {
  const [displayCount, setDisplayCount] = useState(2);
  
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 2, shlokas.length));
  };

  return (
    <section id="shlokas" className="py-16 bg-gradient-to-b from-white to-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">संस्कृत साहित्य के मोती</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            प्राचीन संस्कृत श्लोक जिनका अर्थ आज भी हमारे जीवन को समृद्ध करता है
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shlokas.slice(0, displayCount).map((shloka) => (
            <ShlokaCard
              key={shloka.id}
              sanskrit={shloka.sanskrit}
              meaning={shloka.meaning}
              author={shloka.author}
              source={shloka.source}
            />
          ))}
        </div>
        
        {displayCount < shlokas.length && (
          <div className="mt-8 text-center">
            <Button 
              onClick={loadMore} 
              className="bg-maroon-600 hover:bg-maroon-700"
            >
              और श्लोक देखें
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShlokaSection;
