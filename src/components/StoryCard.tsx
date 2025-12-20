import React, { useState } from 'react';
import { Story } from '../data/contract';
import { Eye, MessageSquare, Share2, ChevronRight } from 'lucide-react';

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
    <div className={`perspective-1000 ${isHero ? 'h-[450px]' : 'h-[350px]'} w-full group`}>
      <div className={`flip-card-inner h-full transition-all duration-700 ${flipped ? 'is-flipped' : ''}`}>
        
        {/* FRONT FACE: IMAGE DOMINANT WITH OVERLAYS */}
        <div className="absolute inset-0 backface-hidden rounded-md overflow-hidden bg-[#111] border border-white/5 shadow-2xl">
          <img 
            src={story.coverImage} 
            alt={story.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Large Rank Number - Top Left */}
          <div className="absolute top-0 left-0 p-4">
            <span className="text-6xl font-black italic text-white/30 leading-none drop-shadow-lg select-none">
              {story.rank}
            </span>
          </div>

          {/* Title Overlay - Bottom with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 pb-14">
            <h2 className={`${isHero ? 'text-3xl' : 'text-xl'} font-bold leading-tight text-white mb-2 line-clamp-2 drop-shadow-md`}>
              {story.title}
            </h2>
            {isHero && (
              <p className="text-gray-300 text-sm line-clamp-2 mb-2 max-w-2xl drop-shadow-sm">
                {story.shortSummary}
              </p>
            )}
          </div>

          {/* Bottom Interaction Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
            {/* Interaction Icons (Bottom-Left) */}
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <Eye size={14} strokeWidth={2.5} />
                <span className="text-[10px] font-bold tracking-tight">{story.views}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <MessageSquare size={14} strokeWidth={2.5} />
                <span className="text-[10px] font-bold tracking-tight">{story.comments}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <Share2 size={14} strokeWidth={2.5} />
                <span className="text-[10px] font-bold tracking-tight">{story.shares}</span>
              </div>
            </div>

            {/* Preview Button - Absolute Bottom Right */}
            <button 
              onClick={toggleFlip}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-md text-[9px] uppercase tracking-[0.1em] font-black transition-all duration-300"
            >
              Preview
              <ChevronRight size={10} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* BACK FACE: DATA FOCUS */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-md overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 flex flex-col shadow-2xl">
          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
              <div>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black mb-1">Position</p>
                <p className="text-3xl font-black italic text-white leading-none">{story.rank}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black mb-1">Author</p>
                <p className="text-xs font-bold text-gray-200">{story.authorName}</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              {story.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {story.shortSummary}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-white/5 rounded-md border border-white/5">
              <div>
                <p className="text-[8px] text-gray-500 uppercase font-black">Published</p>
                <p className="text-[10px] text-gray-300 font-bold">{new Date(story.publishDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-[8px] text-gray-500 uppercase font-black">Engagement</p>
                <p className="text-[10px] text-gray-300 font-bold">{story.views} Interactions</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
            {/* Read More Button (Back of Card) - Solid & Prominent */}
            <button className="flex-1 bg-white text-black hover:bg-gray-200 active:scale-95 text-[11px] py-3 rounded-md font-black uppercase tracking-widest transition-all duration-200 mr-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Read Full Story
            </button>
            <button 
              onClick={toggleFlip}
              className="text-gray-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors px-2"
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