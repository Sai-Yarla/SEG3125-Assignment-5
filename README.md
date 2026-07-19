# Music Evolution Dashboard (Bauhaus Edition)

A dynamic, interactive dashboard visualizing the evolution of music genres and top songs on the Billboard Hot 100 from the 1960s to the 2020s. 

This project was built for **SEG3125 - Assignment 5** and features a strict **Bauhaus Design System** utilizing pure constructivist principles (primary colors, hard shadows, thick borders, and geometric shapes).

## Features

- **Decade Selector**: Filter data by specific decades or view all historical data.
- **Genre Filtering**: Toggle specific genres on and off to isolate trends.
- **Genre Trend Chart (Line/Area/Stacked)**: Visualize how the market share of Pop, Rock, Hip-Hop, R&B, Country, and Electronic music shifted over time.
- **Top Songs Chart**: A dynamic bar chart ranking the top songs based on weeks at #1, total chart weeks, or chronologically.
- **Key Statistics**: High-level insights displaying total songs tracked, decades covered, top genres, and average chart performance.
- **Bilingual Support**: Toggle between English and French content.

## Tech Stack

- **React 19**
- **Vite**
- **Recharts** (Data Visualization)
- **Vanilla CSS** (Bauhaus Design Implementation)

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured to deploy to GitHub Pages. To deploy the latest build, run:
```bash
npm run deploy
```

## Design System Note
The interface is intentionally designed as a geometric composition evoking 1920s Bauhaus posters. The color palette is strictly limited to `#D02020` (Red), `#1040C0` (Blue), `#F0C020` (Yellow), along with stark black, white, and utility greys.
