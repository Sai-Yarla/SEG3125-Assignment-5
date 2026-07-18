import { GENRE_KEYS } from "../data/musicData";

export default function FilterSummary({ t, activeGenres, selectedDecade, onReset }) {
  const allSelected = GENRE_KEYS.every((g) => activeGenres.has(g));
  const isDefault = allSelected && selectedDecade === "All";

  const genreNames = GENRE_KEYS.filter((g) => activeGenres.has(g))
    .map((g) => t.genreLabels[g])
    .join(", ");

  const genreText = allSelected ? t.filterSummaryAllGenres : genreNames;
  const decadeText =
    selectedDecade === "All" ? t.filterSummaryAllDecades : selectedDecade;

  return (
    <div className="filter-summary" role="status" aria-live="polite">
      <span className="filter-summary__text">
        <span className="filter-summary__label">{t.filterSummaryShowing}:</span>{" "}
        {genreText} · {decadeText}
      </span>
      {!isDefault && (
        <button className="filter-summary__reset" onClick={onReset}>
          ↺ {t.resetAll}
        </button>
      )}
    </div>
  );
}
