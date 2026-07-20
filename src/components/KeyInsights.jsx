import { useMemo } from "react";
import musicData, { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

/* ── Helper to fill template strings ── */
function fillTemplate(template, values) {
  return Object.entries(values).reduce(
    (str, [key, val]) => str.replace(`{${key}}`, val),
    template
  );
}

export default function KeyInsights({ t, activeGenres, selectedDecade }) {
  const insights = useMemo(() => {
    const filteredDecades =
      selectedDecade === "All"
        ? musicData
        : musicData.filter((d) => d.decade === selectedDecade);

    const songs = filteredDecades.flatMap((d) =>
      d.topSongs.filter((s) => activeGenres.has(s.genre))
    );

    const result = [];

    // Insight 1: Longest #1 run
    if (songs.length > 0) {
      const top = songs.reduce((best, s) =>
        s.weeksAtNo1 > best.weeksAtNo1 ? s : best
      );
      result.push({
        id: "longest",
        icon: "🏆",
        text: fillTemplate(t.insightLongestNo1, {
          song: top.title,
          artist: top.artist,
          weeks: top.weeksAtNo1,
        }),
        accent: GENRE_COLORS[top.genre],
      });
    }

    // Insight 2: Genre growth (first vs last filtered decade)
    if (filteredDecades.length >= 2) {
      const first = filteredDecades[0];
      const last = filteredDecades[filteredDecades.length - 1];

      let bestGrowthGenre = null;
      let bestGrowth = -Infinity;

      GENRE_KEYS.filter((g) => activeGenres.has(g)).forEach((genre) => {
        const growth =
          (last.genreShares[genre] || 0) - (first.genreShares[genre] || 0);
        if (growth > bestGrowth) {
          bestGrowth = growth;
          bestGrowthGenre = genre;
        }
      });

      if (bestGrowthGenre && bestGrowth > 0) {
          result.push({
          id: "growth",
          icon: "📈",
          text: fillTemplate(t.insightGenreGrowth, {
            genre: t.genreLabels[bestGrowthGenre],
            from: first.genreShares[bestGrowthGenre] || 0,
            to: last.genreShares[bestGrowthGenre] || 0,
            startDecade: t.decadeLabels?.[first.decade] ?? first.decade,
            endDecade: t.decadeLabels?.[last.decade] ?? last.decade,
          }),
          accent: GENRE_COLORS[bestGrowthGenre],
        });
      }
    }

    // Insight 3: Most persistent genre (appears in every filtered decade)
    const persistentGenres = GENRE_KEYS.filter((g) => activeGenres.has(g)).filter(
      (genre) =>
        filteredDecades.every((d) => d.topSongs.some((s) => s.genre === genre))
    );

    if (persistentGenres.length > 0) {
      const genre = persistentGenres[0];
      result.push({
        id: "persistent",
        icon: "🔄",
        text: fillTemplate(t.insightMostPersistent, {
          genre: t.genreLabels[genre],
        }),
        accent: GENRE_COLORS[genre],
      });
    }

    return result;
  }, [t, activeGenres, selectedDecade]);

  if (insights.length === 0) return null;

  return (
    <div className="insights" role="region" aria-label={t.insightTitle}>
      <h3 className="insights__title">✨ {t.insightTitle}</h3>
      <div className="insights__grid">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="insight-card"
            style={{ borderLeftColor: insight.accent }}
          >
            <span className="insight-card__icon">{insight.icon}</span>
            <p className="insight-card__text">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
