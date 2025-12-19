import React, { useState } from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
  isHero?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, isHero = false }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFlipped(!flipped);
  };

  return (
    <div className={`perspective-1000 ${isHero ? 'h-[420px]' : 'h-[320px]'} w-full group`}>
      <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
        
        {/* FRONT: SPEC COMPLIANT */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-[#1a1a1a] border border-white/5 shadow-xl">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent p-6 flex flex-col">
            {/* Rank - Top Left */}
            <span className="text-5xl font-black italic tracking-tighter text-white/30 mb-2">
              {story.rank}
            </span>
            
            <div className="mt-auto">
              <h2 className={`${isHero ? 'text-3xl' : 'text-xl'} font-bold leading-tight line-clamp-2 mb-2 text-white`}>
                {story.title}
              </h2>
              {isHero && (
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {story.shortSummary}
                </p>
              )}
            </div>
          </div>

          {/* Trigger - Absolute Bottom Right */}
          <button 
            onClick={handleFlip}
            className="absolute bottom-4 right-4 z-10 bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black transition-all"
          >
            Preview
          </button>
        </div>

        {/* BACK: SPEC COMPLIANT */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg overflow-hidden bg-[#151515] border border-blue-500/20 p-8 flex flex-col">
          <div className="flex-grow custom-scrollbar overflow-y-auto">
            <div className="flex justify-between items-baseline mb-6 border-b border-white/5 pb-2">
              <span className="text-blue-500 font-black text-xs uppercase tracking-tighter">
                Unit {story.rank}
              </span>
              <span className="text-gray-500 text-[9px] uppercase font-bold">
                Authored by {story.authorName}
              </span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-4 leading-snug">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {story.shortSummary}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] px-6 py-2.5 rounded font-black uppercase tracking-widest transition-colors">
              Read More
            </button>
            <button 
              onClick={handleFlip}
              className="text-gray-600 hover:text-white text-[10px] uppercase font-black tracking-widest"
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryCard;
