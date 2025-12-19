export interface Story {
  id: string;
  rank: number;
  headline: string;
  summary?: string;
  imageUrl?: string;
  publishDate: string;
}

export const mockStories: Story[] = [
  {
    id: "1",
    rank: 2,
    headline: "Global Markets Rally Amidst Economic Recovery Hopes",
    summary: "Investors are showing renewed confidence as manufacturing data beats expectations across major economies.",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400",
    publishDate: "2025-12-19T10:00:00Z"
  },
  {
    id: "2",
    rank: 1,
    headline: "Breakthrough in Fusion Energy Research Announced",
    summary: "Scientists at the National Ignition Facility achieve a significant milestone in sustainable energy production.",
    imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400",
    publishDate: "2025-12-19T08:30:00Z"
  },
  {
    id: "3",
    rank: 4,
    headline: "New Space Mission to Explore Jupiter's Moons",
    // Missing summary to test edge case
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400",
    publishDate: "2025-12-18T15:45:00Z"
  },
  {
    id: "4",
    rank: 3,
    headline: "Local Community Transforms Vacant Lot into Urban Garden",
    summary: "The project aims to provide fresh produce and green space for neighborhood residents.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400",
    publishDate: "2025-12-19T12:00:00Z"
  },
  {
    id: "5",
    rank: 5,
    headline: "Tech Giants Unveil Collaborative AI Safety Framework",
    summary: "The initiative focuses on ethical development and deployment of generative AI technologies.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    publishDate: "2025-12-19T14:20:00Z"
  }
];
