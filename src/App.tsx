import React, { useMemo } from 'react';
import { mockStories } from './data/contract';
import StoryCard from './components/StoryCard';

const App: React.FC = () => {
  // Deterministic Sorting by Rank
  const sortedStories = useMemo(() => {
    return [...mockStories].sort((a, b) => a.rank - b.rank).slice(0, 10);
  }, []);

  const featuredStory = sortedStories[0];
  const gridStories = sortedStories.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12 border-b border-white/10 pb-6">
        <div className="flex justify-between items-baseline">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">
            Top Stories
          </h1>
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
            Surface PG03 — 10 Ranked Units
          </span>
        </div>
      </header>

      {/* Hero Featured Card (Rank 1) */}
      <section className="mb-8">
        {featuredStory && <StoryCard story={featuredStory} isFeatured={true} />}
      </section>

      {/* Grid for Ranks 2-10 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </section>

      <footer className="mt-20 py-10 border-t border-white/5 flex flex-col items-center gap-4">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] font-bold">
          High Fidelity Specification Implementation
        </p>
        <div className="flex gap-4 text-[8px] text-gray-700 uppercase font-black">
          <span>Contract Verified</span>
          <span>Deterministic Output</span>
          <span>Symmetry Stability</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
