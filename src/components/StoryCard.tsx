import React, { useState } from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
  isFeatured?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, isFeatured = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Flipping story ${story.rank}. Current state: ${isFlipped}`);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`perspective-1000 ${isFeatured ? 'h-[400px]' : 'h-[320px]'} w-full`}>
      <div className={`flip-card h-full ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-between">
            <span className="text-5xl font-black italic text-white/20 select-none">
              {story.rank}
            </span>
            
            <div>
              <h2 className={`${isFeatured ? 'text-3xl' : 'text-xl'} font-bold leading-tight line-clamp-2 mb-3 text-white shadow-sm`}>
                {story.title}
              </h2>
              {isFeatured && (
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {story.shortSummary}
                </p>
              )}
            </div>
          </div>

          <button 
            onClick={toggleFlip}
            className="absolute bottom-6 right-6 z-20 bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all active:scale-95"
          >
            Preview
          </button>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#111] border border-blue-500/40 p-8 flex flex-col shadow-2xl shadow-blue-500/10">
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-blue-500/20 text-blue-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-blue-500/20">
                Rank {story.rank}
              </span>
              <span className="text-[10px] text-gray-500 uppercase font-medium">
                By {story.authorName}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-4 leading-snug">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed overflow-y-auto max-h-[120px] custom-scrollbar">
              {story.shortSummary}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
            <button 
              className="flex-grow bg-blue-600 hover:bg-blue-500 text-white text-[10px] py-3 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Read Full Story
            </button>
            <button 
              onClick={toggleFlip}
              className="text-gray-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors px-2"
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