import { useState } from "react";
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
  { key: "weeks", icon: "🏆" },
  { key: "year", icon: "📅" },
  { key: "name", icon: "🔤" },
];

function sortSongs(songs, sortKey) {
  const copy = [...songs];
  switch (sortKey) {
    case "weeks":
      return copy.sort((a, b) => b.weeksAtNo1 - a.weeksAtNo1);
    case "year":
      return copy.sort((a, b) => a.year - b.year);
    case "name":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return copy;
  }
}

const SORT_LABELS = {
  weeks: "sortByWeeks",
  year: "sortByYear",
  name: "sortByName",
};

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
    </div>
  );
}

/* ── Custom Y-axis tick — song title (readable, left-aligned) ── */
function SongYTick({ x, y, payload }) {
  const label = payload.value;
  const maxLen = 22;
  const display = label.length > maxLen ? label.slice(0, maxLen) + "…" : label;
  return (
    <text
      x={x}
      y={y}
      dy={4}
      textAnchor="end"
      fill="#a0a0b8"
      fontSize={11}
      fontFamily="Inter"
    >
      {display}
    </text>
  );
}

/* ── Custom value label on bar end ── */
function BarValueLabel(props) {
  const { x, y, width, height, value } = props;
  return (
    <text
      x={x + width + 6}
      y={y + height / 2}
      dy={4}
      fill="#a0a0b8"
      fontSize={11}
      fontWeight={600}
      fontFamily="Inter"
    >
      {value}
    </text>
  );
}

/* ── Bar Chart Legend ── */
function BarChartLegend({ t, activeGenres }) {
  return (
    <div className="bar-chart-legend">
      {GENRE_KEYS.filter((g) => activeGenres.has(g)).map((genre) => (
        <span key={genre} className="bar-chart-legend__item">
          <span
            className="bar-chart-legend__dot"
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

  // Collect all songs, filter by decade and active genres
  let songs = musicData.flatMap((d) => {
    if (selectedDecade !== "All" && d.decade !== selectedDecade) return [];
    return d.topSongs;
  });
  songs = songs.filter((s) => activeGenres.has(s.genre));
  songs = sortSongs(songs, sortKey);

  // Find the max value for highlighting the top bar
  const maxWeeks = songs.length > 0 ? Math.max(...songs.map((s) => s.weeksAtNo1)) : 0;

  // Dynamic height: 36px per bar + padding
  const chartHeight = Math.max(240, songs.length * 36 + 60);

  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <div>
          <h2 className="chart-card__title">{t.chart2Title}</h2>
          <p className="chart-card__desc">{t.chart2Desc}</p>
        </div>
        <div className="chart-controls">
          <span className="chart-controls__label">{t.sortLabel}</span>
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={`chart-control-btn ${sortKey === opt.key ? "chart-control-btn--active" : ""}`}
              onClick={() => setSortKey(opt.key)}
              aria-pressed={sortKey === opt.key}
              title={t[SORT_LABELS[opt.key]]}
            >
              <span className="chart-control-btn__icon">{opt.icon}</span>
              {t[SORT_LABELS[opt.key]]}
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
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            data={songs}
            layout="vertical"
            margin={{ top: 5, right: 45, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 4" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fontSize: 11 }}
              domain={[0, "dataMax + 2"]}
              label={{
                value: t.axisWeeksAtNo1,
                position: "insideBottom",
                offset: -2,
                style: { fill: "#6b6b82", fontSize: 12, fontFamily: "Inter" },
              }}
            />
            <YAxis
              type="category"
              dataKey="title"
              tick={<SongYTick />}
              width={160}
              interval={0}
            />
            <Tooltip
              content={<SongTooltip t={t} />}
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
            />
            <Bar
              dataKey="weeksAtNo1"
              radius={[0, 6, 6, 0]}
              animationDuration={600}
              maxBarSize={28}
            >
              {songs.map((song, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={GENRE_COLORS[song.genre]}
                  fillOpacity={song.weeksAtNo1 === maxWeeks ? 1 : 0.7}
                  stroke={song.weeksAtNo1 === maxWeeks ? GENRE_COLORS[song.genre] : "none"}
                  strokeWidth={song.weeksAtNo1 === maxWeeks ? 2 : 0}
                />
              ))}
              <LabelList content={<BarValueLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}

      <BarChartLegend t={t} activeGenres={activeGenres} />
    </div>
  );
}
