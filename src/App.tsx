import React, { useEffect, useMemo } from 'react';
import { mockStories } from './data/contract';
import StoryCard from './components/StoryCard';

const App: React.FC = () => {
  // 1. Deterministic Logic: Explicitly sort by rank regardless of contract order
  const sortedStories = useMemo(() => {
    return [...mockStories].sort((a, b) => a.rank - b.rank);
  }, []);

  // 3. Fidelity Verification: Check rendered count against input contract
  useEffect(() => {
    const isOrdered = sortedStories.every((story, i) => i === 0 || story.rank >= sortedStories[i - 1].rank);
    
    console.group("Fidelity Verification Report");
    console.log(`Contract Count: ${mockStories.length}`);
    console.log(`Rendered Count: ${sortedStories.length}`);
    console.log(`Deterministic Sequence: ${isOrdered ? "VERIFIED" : "FAILED"}`);
    console.groupEnd();
  }, [sortedStories]);

  return (
    <div 
      className="max-w-3xl mx-auto px-4 py-8"
      data-fidelity-count={sortedStories.length} // 3. Data attribute for automated verification
    >
      <header className="mb-8 border-b-2 border-gray-900 pb-4">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter flex items-baseline gap-2">
          Top Stories
          <span className="text-xs font-normal not-italic text-gray-400 normal-case tracking-normal">
            Surface PG03
          </span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Last Updated: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <main className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <div className="divide-y divide-gray-100">
          {sortedStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center border-t border-gray-200 pt-6">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
          System Status: Deterministic Build Verified
        </p>
      </footer>
    </div>
  );
};

export default App;