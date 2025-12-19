import React, { useState } from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
  isHero?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, isHero = false }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFlipped(!flipped);
  };

  return (
    <div className={`perspective-1000 ${isHero ? 'h-[450px]' : 'h-[350px]'} w-full`}>
      <div className={`flip-card-inner h-full ${flipped ? 'is-flipped' : ''}`}>
        
        {/* FRONT FACE: IMAGE DOMINANT WITH OVERLAYS */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-[#111] border border-white/5 shadow-2xl group">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Large Rank Number - Top Left */}
          <div className="absolute top-0 left-0 p-6">
            <span className="text-7xl font-black italic text-white/40 leading-none drop-shadow-lg">
              {story.rank}
            </span>
          </div>

          {/* Title Overlay - Bottom with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6">
            <h2 className={`${isHero ? 'text-3xl' : 'text-xl'} font-bold leading-tight text-white mb-2 line-clamp-2`}>
              {story.title}
            </h2>
            {isHero && (
              <p className="text-gray-300 text-sm line-clamp-2 mb-4 max-w-2xl">
                {story.shortSummary}
              </p>
            )}
          </div>

          {/* Preview Button - Absolute Bottom Right */}
          <button 
            onClick={toggleFlip}
            className="absolute bottom-4 right-4 z-10 bg-black/40 hover:bg-white hover:text-black backdrop-blur-md border border-white/10 px-4 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-black transition-all"
          >
            Preview
          </button>
        </div>

        {/* BACK FACE: DATA FOCUS */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 flex flex-col shadow-2xl">
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/5">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Rank</p>
                <p className="text-2xl font-black italic text-white leading-none">{story.rank}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Contributor</p>
                <p className="text-xs font-bold text-gray-300">{story.authorName}</p>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-4 leading-snug">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {story.shortSummary}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
            <button className="bg-white text-black hover:bg-gray-200 text-[10px] px-6 py-2.5 rounded-lg font-black uppercase tracking-widest transition-colors">
              Read More
            </button>
            <button 
              onClick={toggleFlip}
              className="text-gray-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors"
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