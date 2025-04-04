
import React, { useState } from 'react';
import { shlokas } from '@/lib/shlokas';
import ShlokaCard from './ShlokaCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const ShlokaSection = () => {
  const [displayCount, setDisplayCount] = useState(2);
  const { translate } = useLanguage();
  
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 2, shlokas.length));
  };

  return (
    <section id="shlokas" className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Ancient symbols/decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/free-vector/ancient-symbols-background_23-2148057780.jpg')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-500 mb-4 animate-glow">
            {translate(translations.sanskritTitle.hindi, translations.sanskritTitle.english)}
          </h2>
          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            {translate(translations.sanskritDescription.hindi, translations.sanskritDescription.english)}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shlokas.slice(0, displayCount).map((shloka) => (
            <ShlokaCard
              key={shloka.id}
              sanskrit={shloka.sanskrit}
              meaning={shloka.meaning}
              englishMeaning={shloka.englishMeaning}
              author={shloka.author}
              source={shloka.source}
            />
          ))}
        </div>
        
        {displayCount < shlokas.length && (
          <div className="mt-8 text-center">
            <Button 
              onClick={loadMore} 
              className="bg-amber-700 hover:bg-amber-800 text-amber-100"
            >
              {translate(translations.moreShlokas.hindi, translations.moreShlokas.english)}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShlokaSection;
