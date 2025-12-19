export interface Story {
  id: string;
  rank: number;
  title: string;
  shortSummary: string;
  coverImage: string;
  authorName: string;
  publishDate: string;
}

export const mockStories: Story[] = [
  {
    id: "story-1",
    rank: 1,
    title: "Global Energy Transition: The Shift to Fusion Power",
    shortSummary: "A massive breakthrough in containment technology brings us closer to clean, limitless energy for the entire planet.",
    coverImage: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    authorName: "Dr. Aris Thorne",
    publishDate: "2025-12-19T08:00:00Z"
  },
  {
    id: "story-2",
    rank: 2,
    title: "The Future of Neural Computing",
    shortSummary: "New biological-silicon hybrids are outperforming traditional GPUs in complex inference tasks.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    authorName: "Sarah Jenkins",
    publishDate: "2025-12-19T09:30:00Z"
  },
  {
    id: "story-3",
    rank: 3,
    title: "Deep Sea Cities: Construction Begins",
    shortSummary: "The first permanent underwater habitat is being assembled in the North Atlantic ridge.",
    coverImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400",
    authorName: "Marcus Vane",
    publishDate: "2025-12-19T10:15:00Z"
  },
  {
    id: "story-4",
    rank: 4,
    title: "AI Ethics: The Great Decentralization",
    shortSummary: "Open-source governance models are replacing corporate gatekeepers in major AI projects.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400",
    authorName: "Elena Rossi",
    publishDate: "2025-12-19T11:00:00Z"
  },
  {
    id: "story-5",
    rank: 5,
    title: "Mars Colony Alpha: First Harvest",
    shortSummary: "Scientists successfully grow high-yield crops in Martian regolith using advanced hydro-filters.",
    coverImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=400",
    authorName: "Kenji Sato",
    publishDate: "2025-12-19T12:45:00Z"
  },
  {
    id: "story-6",
    rank: 6,
    title: "Quantum Encryption Becomes Standard",
    shortSummary: "The global financial system has officially migrated to quantum-resistant communication protocols.",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400",
    authorName: "Linda Wu",
    publishDate: "2025-12-19T13:20:00Z"
  },
  {
    id: "story-7",
    rank: 7,
    title: "The Rebirth of the Great Barrier Reef",
    shortSummary: "Genetic engineering techniques have led to a 40% increase in resilient coral growth.",
    coverImage: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=400",
    authorName: "David Atten",
    publishDate: "2025-12-19T14:10:00Z"
  },
  {
    id: "story-8",
    rank: 8,
    title: "Next-Gen Hyperloop Connects Continents",
    shortSummary: "The first trans-continental vacuum tube line reduces travel time between London and NY to 2 hours.",
    coverImage: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400",
    authorName: "Jameson Ford",
    publishDate: "2025-12-19T15:05:00Z"
  },
  {
    id: "story-9",
    rank: 9,
    title: "The End of Traditional Plastic",
    shortSummary: "New mushroom-based polymers have officially replaced single-use plastics in global retail.",
    coverImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400",
    authorName: "Gaia Green",
    publishDate: "2025-12-19T16:30:00Z"
  },
  {
    id: "story-10",
    rank: 10,
    title: "Universal Basic Services Implementation",
    shortSummary: "A pilot program across Northern Europe shows 95% reduction in absolute poverty.",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
    authorName: "Sven Gunder",
    publishDate: "2025-12-19T17:50:00Z"
  }
];