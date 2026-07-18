import { useState, useCallback, useEffect } from "react";
import translations from "./data/translations";
import { GENRE_KEYS } from "./data/musicData";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import KeyInsights from "./components/KeyInsights";
import FilterSummary from "./components/FilterSummary";
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
    setActiveGenres(new Set([GENRE_KEYS[0]]));
  }, []);

  const selectDecade = useCallback((decade) => {
    setSelectedDecade(decade);
  }, []);

  const resetAll = useCallback(() => {
    setActiveGenres(new Set(GENRE_KEYS));
    setSelectedDecade("All");
  }, []);

  // ── Render ──
  return (
    <div className="dashboard" id="main">
      <Header t={t} language={language} onToggleLanguage={toggleLanguage} />

      <p className="intro">{t.introText}</p>

      <StatsCards t={t} activeGenres={activeGenres} selectedDecade={selectedDecade} />

      <KeyInsights t={t} activeGenres={activeGenres} selectedDecade={selectedDecade} />

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

      <FilterSummary
        t={t}
        activeGenres={activeGenres}
        selectedDecade={selectedDecade}
        onReset={resetAll}
      />

      <div className="charts-grid">
        <GenreTrendChart t={t} activeGenres={activeGenres} />
        <TopSongsChart t={t} activeGenres={activeGenres} selectedDecade={selectedDecade} />
      </div>

      <Footer t={t} />
    </div>
  );
}
