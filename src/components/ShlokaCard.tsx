
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
    <Card className="h-full overflow-hidden border-amber-800/30 hover:border-amber-700/50 bg-gradient-to-b from-gray-900/80 to-gray-900 transition-all duration-300 shadow-md hover:shadow-amber-900/20">
      <CardHeader className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 pb-2">
        <CardTitle className="font-hindi text-amber-400 text-xl animate-glow">{author || "संस्कृत श्लोक"}</CardTitle>
        {source && <CardDescription className="text-amber-300/70">{source}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          {Array.isArray(sanskrit) && sanskrit.map((line, index) => (
            <p key={index} className="font-hindi text-lg mb-1 text-amber-200/90 leading-relaxed">{line}</p>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-amber-900/30">
          <h4 className="font-bold text-sm text-amber-400/80 mb-2">अर्थ / व्याख्या:</h4>
          <p className="text-amber-100/80 font-hindi">{meaning}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShlokaCard;
