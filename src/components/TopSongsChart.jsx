import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import musicData, { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

/* ── Sort strategies ── */
const SORT_OPTIONS = [
  { key: "weeks", labelKey: "sortByWeeks" },
  { key: "chartWeeks", labelKey: "sortByChartWeeks" },
  { key: "year", labelKey: "sortByYear" },
  { key: "name", labelKey: "sortByName" },
];

const TOP_N_OPTIONS = [
  { key: 5, labelKey: "topN5" },
  { key: 10, labelKey: "topN10" },
  { key: Infinity, labelKey: "topNAll" },
];

function sortSongs(songs, sortKey) {
  const copy = [...songs];
  switch (sortKey) {
    case "weeks":
      return copy.sort((a, b) => b.weeksAtNo1 - a.weeksAtNo1);
    case "chartWeeks":
      return copy.sort((a, b) => b.totalChartWeeks - a.totalChartWeeks);
    case "year":
      return copy.sort((a, b) => a.year - b.year);
    case "name":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return copy;
  }
}

/* ── Custom Tooltip ── */
function SongTooltip({ active, payload, t }) {
  if (!active || !payload || payload.length === 0) return null;
  const data = payload[0].payload;
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__title">{data.title}</div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipArtist}</span>
        <span className="custom-tooltip__value">{data.artist}</span>
      </div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipYear}</span>
        <span className="custom-tooltip__value">{data.year}</span>
      </div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipGenre}</span>
        <span className="custom-tooltip__value">
          <span
            className="custom-tooltip__color-dot"
            style={{ backgroundColor: GENRE_COLORS[data.genre] }}
          />
          {t.genreLabels[data.genre]}
        </span>
      </div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipWeeks}</span>
        <span className="custom-tooltip__value">{data.weeksAtNo1}</span>
      </div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipChartWeeks}</span>
        <span className="custom-tooltip__value">{data.totalChartWeeks}</span>
      </div>
    </div>
  );
}

/* ── Custom Y-axis tick — "Artist — Title" ── */
function SongYTick({ x, y, payload, songs }) {
  const song = songs?.find((s) => s.title === payload.value);
  const artistMax = 16;
  const titleMax = 18;
  const artist = song ? (song.artist.length > artistMax ? song.artist.slice(0, artistMax) + "…" : song.artist) : "";
  const title = payload.value.length > titleMax ? payload.value.slice(0, titleMax) + "…" : payload.value;

  return (
    <g>
      <text x={x} y={y} dy={-3} textAnchor="end" fill="#121212" fontSize={11} fontFamily="Outfit, sans-serif" fontWeight={900}>
        {title}
      </text>
      <text x={x} y={y} dy={10} textAnchor="end" fill="#555555" fontSize={10} fontFamily="Outfit, sans-serif" fontWeight={700}>
        {artist}
      </text>
    </g>
  );
}

/* ── Value label with rank badge ── */
function BarValueLabel(props) {
  const { x, y, width, height, value, index, songs, sortKey } = props;
  const isRankedSort = sortKey === "weeks" || sortKey === "chartWeeks";
  const rank = isRankedSort ? index + 1 : null;

  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  const medal = rank && rank <= 3 ? medals[rank] : null;

  return (
    <g>
      {medal && (
        <text
          x={x + width + 6}
          y={y + height / 2}
          dy={4}
          fontSize={13}
          fontFamily="Outfit, sans-serif"
        >
          {medal}
        </text>
      )}
      <text
        x={x + width + (medal ? 24 : 6)}
        y={y + height / 2}
        dy={4}
        fill="#121212"
        fontSize={12}
        fontWeight={900}
        fontFamily="Outfit, sans-serif"
      >
        {value}
      </text>
    </g>
  );
}

/* ── Bar Chart Legend ── */
function BarChartLegend({ t, activeGenres }) {
  return (
    <div className="chart-legend">
      {GENRE_KEYS.filter((g) => activeGenres.has(g)).map((genre) => (
        <span key={genre} className="chart-legend__item">
          <span
            className="chart-legend__dot"
            style={{ backgroundColor: GENRE_COLORS[genre] }}
          />
          {t.genreLabels[genre]}
        </span>
      ))}
    </div>
  );
}

/* ── Main Chart Component ── */
export default function TopSongsChart({ t, activeGenres, selectedDecade }) {
  const [sortKey, setSortKey] = useState("weeks");
  const [topN, setTopN] = useState(Infinity);

  // Collect, filter, sort, and slice songs
  const songs = useMemo(() => {
    let result = musicData.flatMap((d) => {
      if (selectedDecade !== "All" && d.decade !== selectedDecade) return [];
      return d.topSongs;
    });
    result = result.filter((s) => activeGenres.has(s.genre));
    result = sortSongs(result, sortKey);
    if (topN !== Infinity) result = result.slice(0, topN);
    return result;
  }, [activeGenres, selectedDecade, sortKey, topN]);

  // Determine data key based on current sort
  const dataKey = sortKey === "chartWeeks" ? "totalChartWeeks" : "weeksAtNo1";
  const axisLabel = sortKey === "chartWeeks" ? t.tooltipChartWeeks : t.axisWeeksAtNo1;

  // Find the max value for highlighting
  const maxVal = songs.length > 0 ? Math.max(...songs.map((s) => s[dataKey])) : 0;

  // Dynamic height: 40px per bar + padding
  const chartHeight = Math.max(260, songs.length * 40 + 60);

  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <div>
          <h2 className="chart-card__title">{t.chart2Title}</h2>
          <p className="chart-card__desc">{t.chart2Desc}</p>
        </div>
      </div>

      {/* Controls row */}
      <div className="chart-card__controls-row">
        <div className="chart-controls">
          <span className="chart-controls__label">{t.sortLabel}</span>
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={`chart-control-btn ${sortKey === opt.key ? "chart-control-btn--active" : ""}`}
              onClick={() => setSortKey(opt.key)}
              aria-pressed={sortKey === opt.key}
            >
              {t[opt.labelKey]}
            </button>
          ))}
        </div>
        <div className="chart-controls">
          <span className="chart-controls__label">{t.showLabel}</span>
          {TOP_N_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={`chart-control-btn ${topN === opt.key ? "chart-control-btn--active" : ""}`}
              onClick={() => setTopN(opt.key)}
              aria-pressed={topN === opt.key}
            >
              {t[opt.labelKey]}
            </button>
          ))}
        </div>
      </div>

      {songs.length === 0 ? (
        <div className="chart-empty">
          <span className="chart-empty__icon">🎵</span>
          <p className="chart-empty__text">{t.noDataMessage}</p>
        </div>
      ) : (
        <div className="chart-scroll-container">
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart
              data={songs}
              layout="vertical"
              margin={{ top: 5, right: 90, left: 10, bottom: 5 }}
            >
              <defs>
                {GENRE_KEYS.map((genre) => (
                  <linearGradient key={genre} id={`grad-${genre}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={GENRE_COLORS[genre]} stopOpacity={0.6} />
                    <stop offset="100%" stopColor={GENRE_COLORS[genre]} stopOpacity={1} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="4 4" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fontSize: 11 }}
                domain={[0, "dataMax + 3"]}
                label={{
                  value: axisLabel,
                  position: "insideBottom",
                  offset: -2,
                  style: { fill: "#121212", fontSize: 12, fontFamily: "Outfit, sans-serif", fontWeight: 700 },
                }}
              />
              <YAxis
                type="category"
                dataKey="title"
                tick={<SongYTick songs={songs} />}
                width={170}
                interval={0}
              />
              <Tooltip
                content={<SongTooltip t={t} />}
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                allowEscapeViewBox={{ x: true, y: true }}
              />
              <Bar
                dataKey={dataKey}
                radius={[0, 6, 6, 0]}
                animationDuration={600}
                maxBarSize={26}
              >
                {songs.map((song, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={`url(#grad-${song.genre})`}
                    fillOpacity={song[dataKey] === maxVal ? 1 : 0.75}
                    stroke={song[dataKey] === maxVal ? GENRE_COLORS[song.genre] : "none"}
                    strokeWidth={song[dataKey] === maxVal ? 2 : 0}
                  />
                ))}
                <LabelList
                  content={(props) => (
                    <BarValueLabel {...props} songs={songs} sortKey={sortKey} />
                  )}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <BarChartLegend t={t} activeGenres={activeGenres} />
    </div>
  );
}
