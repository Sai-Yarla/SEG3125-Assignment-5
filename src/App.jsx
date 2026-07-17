import { useState, useCallback, useEffect } from "react";
import translations from "./data/translations";
import { GENRE_KEYS } from "./data/musicData";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import GenreFilter from "./components/GenreFilter";
import DecadeSelector from "./components/DecadeSelector";
import GenreTrendChart from "./components/GenreTrendChart";
import TopSongsChart from "./components/TopSongsChart";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  // ── Global State ──
  const [language, setLanguage] = useState("en");
  const [activeGenres, setActiveGenres] = useState(new Set(GENRE_KEYS));
  const [selectedDecade, setSelectedDecade] = useState("All");

  // Current translation set
  const t = translations[language];

  // ── Update html lang attribute on language change ──
  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "fr";
  }, [language]);

  // ── Handlers ──
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const toggleGenre = useCallback((genre) => {
    setActiveGenres((prev) => {
      const next = new Set(prev);
      if (next.has(genre)) {
        // Don't allow deselecting all genres
        if (next.size > 1) next.delete(genre);
      } else {
        next.add(genre);
      }
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    setActiveGenres(new Set(GENRE_KEYS));
  }, []);

  const clearSelection = useCallback(() => {
    // Keep just the first genre to avoid empty state
    setActiveGenres(new Set([GENRE_KEYS[0]]));
  }, []);

  const selectDecade = useCallback((decade) => {
    setSelectedDecade(decade);
  }, []);

  // ── Render ──
  return (
    <div className="dashboard">
      <Header t={t} language={language} onToggleLanguage={toggleLanguage} />

      <p className="intro">{t.introText}</p>

      <StatsCards t={t} activeGenres={activeGenres} selectedDecade={selectedDecade} />

      <div className="controls">
        <GenreFilter
          t={t}
          activeGenres={activeGenres}
          onToggleGenre={toggleGenre}
          onSelectAll={selectAll}
          onClearSelection={clearSelection}
        />
        <DecadeSelector t={t} selectedDecade={selectedDecade} onSelectDecade={selectDecade} />
      </div>

      <div className="charts-grid">
        <GenreTrendChart t={t} activeGenres={activeGenres} />
        <TopSongsChart t={t} activeGenres={activeGenres} selectedDecade={selectedDecade} />
      </div>

      <Footer t={t} />
    </div>
  );
}
