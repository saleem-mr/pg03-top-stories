# FE-IC-1 (PG03 Surface) - Top Stories

This project is a technical implementation of the **PG03 — Top Stories** surface, designed to be a high-fidelity, data-driven UI component.

## Technical Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Core Features & Logic
1. **Deterministic Ordering:** The application strictly enforces sorting by the `rank` field from the data contract. This ensures the layout remains consistent regardless of the raw data sequence.
2. **Edge Case Handling:** 
   - Gracefully handles missing `imageUrl` with a dedicated placeholder.
   - Handles missing `summary` by adjusting the layout dynamically.
   - Uses `line-clamp` for consistent text density.
3. **Fidelity Check:** Upon rendering, the system performs a self-verification check (logged to console) to confirm:
   - Match between input count and rendered count.
   - Verification of the rank-based sequence.

## Execution Logic
The surface is treated as a pure function of the data contract defined in `src/data/contract.ts`. The UI reacts to the schema, ensuring "Binary Acceptance" where the implementation perfectly matches the expected technical constraints.

## How to Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
Last deployed: Fri Dec 19 08:01:32 PM UTC 2025
