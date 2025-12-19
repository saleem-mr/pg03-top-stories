import React from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-white transition-colors items-start">
      {/* Rank Indicator */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full text-sm">
        {story.rank}
      </div>
      
      {/* Content Section */}
      <div className="flex-grow min-w-0">
        <h2 className="text-lg font-bold leading-tight mb-1 hover:text-blue-700 cursor-pointer line-clamp-2">
          {story.headline}
        </h2>
        {story.summary ? (
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {story.summary}
          </p>
        ) : (
          <div className="h-4 mb-2" /> /* Maintaining vertical rhythm even without summary */
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {new Date(story.publishDate).toLocaleDateString(undefined, { 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>

      {/* Image Section with Fixed Aspect Ratio for Layout Stability */}
      <div className="flex-shrink-0 w-32 aspect-video bg-gray-200 rounded overflow-hidden relative">
        {story.imageUrl ? (
          <img 
            src={story.imageUrl} 
            alt={story.headline} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic text-[10px] text-center p-2 uppercase font-bold tracking-tighter">
            No Media
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;