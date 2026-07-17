import musicData, { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

export default function StatsCards({ t, activeGenres, selectedDecade }) {
  // Filter data based on current selections
  const filteredDecades =
    selectedDecade === "All"
      ? musicData
      : musicData.filter((d) => d.decade === selectedDecade);

  // Total songs matching current filters
  const totalSongs = filteredDecades.reduce((sum, d) => {
    return sum + d.topSongs.filter((s) => activeGenres.has(s.genre)).length;
  }, 0);

  // Decades covered
  const decadesCovered = filteredDecades.length;

  // Top genre by average share across selected decades
  const genreTotals = {};
  GENRE_KEYS.filter((g) => activeGenres.has(g)).forEach((genre) => {
    genreTotals[genre] = filteredDecades.reduce(
      (sum, d) => sum + (d.genreShares[genre] || 0),
      0
    );
  });
  const topGenreKey = Object.entries(genreTotals).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];
  const topGenreLabel = topGenreKey ? t.genreLabels[topGenreKey] : "—";
  const topGenreColor = topGenreKey ? GENRE_COLORS[topGenreKey] : "#6b6b82";

  // Average weeks at #1 for filtered songs
  const filteredSongs = filteredDecades.flatMap((d) =>
    d.topSongs.filter((s) => activeGenres.has(s.genre))
  );
  const avgWeeks =
    filteredSongs.length > 0
      ? (
          filteredSongs.reduce((sum, s) => sum + s.weeksAtNo1, 0) /
          filteredSongs.length
        ).toFixed(1)
      : "0";

  const fmt = new Intl.NumberFormat(t.locale, { maximumFractionDigits: 1 });

  const cards = [
    {
      id: "songs",
      value: fmt.format(totalSongs),
      label: t.statSongsTracked,
      icon: "🎵",
      accent: "var(--color-pop)",
    },
    {
      id: "decades",
      value: fmt.format(decadesCovered),
      label: t.statDecadesCovered,
      icon: "📅",
      accent: "var(--color-rock)",
    },
    {
      id: "topgenre",
      value: topGenreLabel,
      label: t.statTopGenre,
      icon: "🏆",
      accent: topGenreColor,
    },
    {
      id: "avgweeks",
      value: fmt.format(Number(avgWeeks)),
      label: t.statAvgWeeks,
      icon: "📊",
      accent: "var(--color-hiphop)",
    },
  ];

  return (
    <div className="stats-grid" role="region" aria-label="Key Statistics">
      {cards.map((card) => (
        <div key={card.id} className="stat-card">
          <span className="stat-card__icon">{card.icon}</span>
          <div className="stat-card__content">
            <span className="stat-card__value" style={{ color: card.accent }}>
              {card.value}
            </span>
            <span className="stat-card__label">{card.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
