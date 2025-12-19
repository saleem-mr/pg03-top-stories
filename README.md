# Technical Verification: PG03 — Top Stories (FE-IC-1)

This repository contains the implementation of the **PG03 — Top Stories** surface, developed as part of the Frontend Engineer technical verification (FE-IC-1).

## 1. Local Run Instructions
To run this project locally, ensure you have **Node.js (v18+)** installed.

```bash
# Clone the repository (or download)
cd pg03-top-stories

# Install dependencies
npm install

# Start the development server
npm run dev
```
The application will be available at `http://localhost:5173`.

## 2. Deployment Instructions
The project is configured for automated deployment via **GitHub Actions**.
- **Build Workflow:** `.github/workflows/build.yml` verifies the build integrity on every push.
- **Deploy Workflow:** `.github/workflows/deploy.yml` publishes the production artifact to GitHub Pages.
- **Live Demo URL:** [https://saleem-mr.github.io/pg03-top-stories/](https://saleem-mr.github.io/pg03-top-stories/)

## 3. Specification Mapping
The implementation maps directly to the **PG03** surface definition:
- **Ranked Rendering:** The surface consumes a data contract containing stories with a `rank` property.
- **Contract Fidelity:** The UI renders headlines, summaries, and images exactly as provided in `src/data/contract.ts`.
- **Edge-Case Handling:** The `StoryCard` component handles missing `imageUrl` or `summary` fields by maintaining a stable layout with consistent vertical rhythm using fixed aspect ratios and placeholders.

## 4. Assumptions & Simplifications
- **Data Source:** It is assumed that the data contract provided by the backend follows the `Story` interface defined in `src/data/contract.ts`.
- **Image Hosting:** External URLs are assumed to be accessible. A "No Media" placeholder is implemented for stories without images to ensure layout stability.
- **Styling:** Tailwind CSS was used to provide a clean, news-standard layout without introducing "stylistic flair" that distracts from functional correctness.

## 5. Tests & Verification Notes
### Deterministic Ordering
The implementation ensures that stories are displayed in the correct order regardless of their position in the raw data array.
- **Logic:** `App.tsx` uses `useMemo` to sort the stories: `[...mockStories].sort((a, b) => a.rank - b.rank)`.
- **Verification:** On mount, the system executes a "Fidelity Verification" (visible in the browser console) which compares the rendered count against the contract length and verifies the rank sequence.

### Layout Stability
- **Fixed Dimensions:** All story cards use a fixed `aspect-video` for the media section to prevent Cumulative Layout Shift (CLS).
- **Text Constraints:** CSS `line-clamp` is applied to prevent extremely long headlines or summaries from breaking the vertical alignment of the list.