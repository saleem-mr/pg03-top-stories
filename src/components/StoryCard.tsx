import React, { useState } from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
  isFeatured?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, isFeatured = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`perspective-1000 ${isFeatured ? 'h-[400px]' : 'h-[300px]'} w-full group`}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#333] shadow-2xl">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-between">
            <span className="text-4xl font-black italic text-white/80 self-start">
              {story.rank}
            </span>
            
            <div className="mb-4">
              <h2 className={`${isFeatured ? 'text-2xl' : 'text-lg'} font-bold leading-tight line-clamp-2 mb-2`}>
                {story.title}
              </h2>
              {isFeatured && (
                <p className="text-gray-300 text-sm line-clamp-3 mb-2">
                  {story.shortSummary}
                </p>
              )}
            </div>
          </div>

          <button 
            onClick={handleFlip}
            className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold transition-all"
          >
            Preview
          </button>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#151515] border border-blue-500/30 p-6 flex flex-col shadow-2xl shadow-blue-500/10">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-blue-400 font-bold uppercase tracking-wider">
                Rank {story.rank}
              </span>
              <span className="text-[10px] text-gray-500 uppercase">
                {story.authorName}
              </span>
            </div>
            
            <h3 className="text-sm font-bold text-white mb-3 line-clamp-2">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-xs leading-relaxed">
              {story.shortSummary}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] px-4 py-2 rounded-lg font-bold transition-colors"
            >
              Read More
            </button>
            <button 
              onClick={handleFlip}
              className="text-gray-500 hover:text-white text-[10px] uppercase font-bold"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryCard;
