import React from 'react';
import { Story } from '../data/contract';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-white transition-colors">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full text-sm">
        {story.rank}
      </div>
      
      <div className="flex-grow">
        <h2 className="text-xl font-bold leading-tight mb-2 hover:text-blue-700 cursor-pointer">
          {story.headline}
        </h2>
        {story.summary && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {story.summary}
          </p>
        )}
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          {new Date(story.publishDate).toLocaleDateString(undefined, { 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>

      <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded overflow-hidden">
        {story.imageUrl ? (
          <img 
            src={story.imageUrl} 
            alt={story.headline} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-[10px] text-center p-2">
            No Image
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
