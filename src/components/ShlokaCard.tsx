
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ShlokaCardProps {
  sanskrit: string[];
  meaning: string;
  author?: string;
  source?: string;
}

const ShlokaCard = ({ sanskrit, meaning, author, source }: ShlokaCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-saffron-200 hover:border-saffron-300 transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-saffron-50 to-saffron-100 pb-2">
        <CardTitle className="font-hindi text-maroon-800 text-xl">{author || "संस्कृत श्लोक"}</CardTitle>
        {source && <CardDescription>{source}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          {Array.isArray(sanskrit) && sanskrit.map((line, index) => (
            <p key={index} className="font-hindi text-lg mb-1 text-gray-800 leading-relaxed">{line}</p>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <h4 className="font-bold text-sm text-gray-600 mb-2">अर्थ / व्याख्या:</h4>
          <p className="text-gray-700 font-hindi">{meaning}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShlokaCard;
