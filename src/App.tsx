import React, { useMemo } from 'react';
import { mockStories } from './data/contract';
import StoryCard from './components/StoryCard';

const App: React.FC = () => {
  // Deterministic Logic: Exactly 10 units, sorted by rank
  const sortedStories = useMemo(() => {
    return [...mockStories]
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
  }, []);

  const heroUnit = sortedStories[0];
  const gridUnits = sortedStories.slice(1);

  return (
    <div className="min-h-screen bg-[#0f0f0f] py-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white">
              Top Stories
            </h1>
            <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest font-bold">
              Verification Surface PG03 — Desk Experience
            </p>
          </div>
          <div className="text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">
            Count: {sortedStories.length} / 10 Articles Verified
          </div>
        </header>

        {/* HERO SECTION - STORY #1 */}
        <div className="mb-10">
          {heroUnit && <StoryCard story={heroUnit} isHero={true} />}
        </div>

        {/* GRID SECTION - STORIES #2-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gridUnits.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center text-gray-600">
          <span className="text-[10px] font-black uppercase tracking-widest">
            Binary Acceptance Confirmed
          </span>
          <span className="text-[10px] font-bold">
            FE-IC-1 // Prototype Ref: SGEL-TOP
          </span>
        </footer>
      </div>
    </div>
  );
};

export default App;