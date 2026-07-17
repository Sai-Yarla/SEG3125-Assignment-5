import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import musicData, { GENRE_KEYS, GENRE_COLORS } from "../data/musicData";

/* ── Custom Tooltip ── */
function GenreTooltip({ active, payload, label, t }) {
  if (!active || !payload || payload.length === 0) return null;
  const fmt = new Intl.NumberFormat(t.locale, { maximumFractionDigits: 1 });
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__title">{label}</div>
      {payload.map((entry) => (
        <div className="custom-tooltip__row" key={entry.dataKey}>
          <span className="custom-tooltip__label">
            <span
              className="custom-tooltip__color-dot"
              style={{ backgroundColor: entry.color }}
            />
            {t.genreLabels[entry.dataKey]}
          </span>
          <span className="custom-tooltip__value">{fmt.format(entry.value)}%</span>
        </div>
      ))}
    </div>
  );
}

/* ── Legend renderer ── */
function renderLegend(props, t) {
  const { payload } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", marginTop: "0.5rem" }}>
      {payload.map((entry) => (
        <span
          key={entry.dataKey}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.75rem",
            color: "#a0a0b8",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: entry.color,
              display: "inline-block",
            }}
          />
          {t.genreLabels[entry.dataKey]}
        </span>
      ))}
    </div>
  );
}

/* ── Main Chart Component ── */
export default function GenreTrendChart({ t, activeGenres }) {
  // Transform data for Recharts: each decade becomes a row
  const chartData = musicData.map((d) => ({
    decade: d.decade,
    ...d.genreShares,
  }));

  return (
    <div className="chart-card">
      <h2 className="chart-card__title">{t.chart1Title}</h2>
      <p className="chart-card__desc">{t.chart1Desc}</p>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis
            dataKey="decade"
            tick={{ fontSize: 12 }}
            label={{
              value: t.axisDecade,
              position: "insideBottom",
              offset: -2,
              style: { fill: "#6b6b82", fontSize: 12, fontFamily: "Inter" },
            }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={[0, 50]}
            label={{
              value: t.axisGenreShare,
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { fill: "#6b6b82", fontSize: 12, fontFamily: "Inter" },
            }}
          />
          <Tooltip content={<GenreTooltip t={t} />} cursor={{ stroke: "rgba(255,255,255,0.08)" }} />
          <Legend content={(props) => renderLegend(props, t)} />

          {GENRE_KEYS.filter((g) => activeGenres.has(g)).map((genre) => (
            <Line
              key={genre}
              type="monotone"
              dataKey={genre}
              stroke={GENRE_COLORS[genre]}
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2, fill: "#161625" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: GENRE_COLORS[genre] }}
              animationDuration={800}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
