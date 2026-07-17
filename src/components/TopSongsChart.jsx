import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import musicData, { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

/* ── Custom Tooltip ── */
function SongTooltip({ active, payload, t }) {
  if (!active || !payload || payload.length === 0) return null;
  const data = payload[0].payload;
  const fmt = new Intl.NumberFormat(t.locale);
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__title">{data.title}</div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipArtist}</span>
        <span className="custom-tooltip__value">{data.artist}</span>
      </div>
      <div className="custom-tooltip__row">
        <span className="custom-tooltip__label">{t.tooltipYear}</span>
        <span className="custom-tooltip__value">{fmt.format(data.year)}</span>
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
        <span className="custom-tooltip__value">{fmt.format(data.weeksAtNo1)}</span>
      </div>
    </div>
  );
}

/* ── Custom X-axis tick with truncation ── */
function CustomXAxisTick({ x, y, payload }) {
  const label = payload.value;
  const maxLen = 14;
  const display = label.length > maxLen ? label.slice(0, maxLen) + "…" : label;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={12}
        textAnchor="end"
        fill="#6b6b82"
        fontSize={11}
        fontFamily="Inter"
        transform="rotate(-35)"
      >
        {display}
      </text>
    </g>
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
  // Collect all songs, filter by decade and active genres
  let songs = musicData.flatMap((d) => {
    if (selectedDecade !== "All" && d.decade !== selectedDecade) return [];
    return d.topSongs;
  });

  songs = songs.filter((s) => activeGenres.has(s.genre));

  // Sort by year
  songs.sort((a, b) => a.year - b.year);

  return (
    <div className="chart-card">
      <h2 className="chart-card__title">{t.chart2Title}</h2>
      <p className="chart-card__desc">{t.chart2Desc}</p>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={songs} margin={{ top: 10, right: 20, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis
            dataKey="title"
            tick={<CustomXAxisTick />}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            label={{
              value: t.axisWeeksAtNo1,
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { fill: "#6b6b82", fontSize: 12, fontFamily: "Inter" },
            }}
          />
          <Tooltip
            content={<SongTooltip t={t} />}
            cursor={{ fill: "rgba(255,255,255,0.03)" }}
          />
          <Bar
            dataKey="weeksAtNo1"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
            maxBarSize={48}
          >
            {songs.map((song, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={GENRE_COLORS[song.genre]}
                fillOpacity={0.85}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <BarChartLegend t={t} activeGenres={activeGenres} />
    </div>
  );
}
