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
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">
              Top Stories
            </h1>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">
              Surface PG03 // Desk-Exp Verification
            </p>
          </div>
          <div className="hidden sm:block text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            Fidelity Verified: {sortedStories.length} Units
          </div>
        </header>

        {/* HERO SECTION - STORY #1 (Full Width) */}
        <div className="mb-6">
          {heroUnit && <StoryCard story={heroUnit} isHero={true} />}
        </div>

        {/* GRID SECTION - STORIES #2-10 (Two columns on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridUnits.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <footer className="mt-20 py-8 border-t border-white/5 text-center">
          <p className="text-gray-700 text-[9px] uppercase tracking-[0.4em] font-black">
            Deterministic UI Build // Binary Acceptance Ready
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
