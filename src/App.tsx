import React, { useEffect, useMemo } from 'react';
import { mockStories } from './data/contract';
import StoryCard from './components/StoryCard';

const App: React.FC = () => {
  // Sort stories by rank (Deterministic sorting)
  const sortedStories = useMemo(() => {
    return [...mockStories].sort((a, b) => a.rank - b.rank);
  }, []);

  useEffect(() => {
    // Fidelity Check: Verification of data integrity and order
    const isOrdered = sortedStories.every((story, i) => i === 0 || story.rank >= sortedStories[i - 1].rank);
    
    console.log("--- Fidelity Check ---");
    console.log(`Expected items: ${mockStories.length}`);
    console.log(`Rendered items: ${sortedStories.length}`);
    console.log(`Deterministic Order Verified: ${isOrdered ? "PASSED" : "FAILED"}`);
    console.log("-----------------------");
  }, [sortedStories]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8 border-b-2 border-gray-900 pb-4">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter">
          Top Stories
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Snapshot: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <main className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
        <div className="divide-y divide-gray-100">
          {sortedStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-400 text-xs">
        &copy; 2025 FE-IC-1 (PG03 Surface) Implementation
      </footer>
    </div>
  );
};

export default App;
