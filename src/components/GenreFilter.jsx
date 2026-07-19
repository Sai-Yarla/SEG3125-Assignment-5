import { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

export default function GenreFilter({ t, activeGenres, onToggleGenre, onSelectAll, onClearSelection }) {
  const allSelected = GENRE_KEYS.every((g) => activeGenres.has(g));

  return (
    <div className="controls__group" role="group" aria-label={t.filterGenreLabel}>
      <span className="controls__label">{t.filterGenreLabel}</span>
      {GENRE_KEYS.map((genre) => {
        const color = GENRE_COLORS[genre];
        const isActive = activeGenres.has(genre);
        return (
          <button
            key={genre}
            className={`genre-btn ${isActive ? "genre-btn--active" : "genre-btn--inactive"}`}
            style={{
              borderColor: color,
              backgroundColor: isActive ? color : "transparent",
              color: isActive ? "#fff" : color,
            }}
            onClick={() => onToggleGenre(genre)}
            aria-pressed={isActive}
            aria-label={`${isActive ? "Hide" : "Show"} ${t.genreLabels[genre]}`}
          >
            <span className="genre-btn__dot" style={{ backgroundColor: color }} />
            {t.genreLabels[genre]}
          </button>
        );
      })}
      <div className="controls__quick-actions">
        <button 
          className="quick-action-btn" 
          onClick={onSelectAll} 
          aria-label={t.selectAll}
          disabled={allSelected}
          style={{ opacity: allSelected ? 0.5 : 1, cursor: allSelected ? "not-allowed" : "pointer" }}
        >
          {t.selectAll}
        </button>
        <button 
          className="quick-action-btn quick-action-btn--clear" 
          onClick={onClearSelection} 
          aria-label={t.clearSelection}
          disabled={activeGenres.size <= 1}
          style={{ opacity: activeGenres.size <= 1 ? 0.5 : 1, cursor: activeGenres.size <= 1 ? "not-allowed" : "pointer" }}
        >
          {t.clearSelection}
        </button>
      </div>
    </div>
  );
}
