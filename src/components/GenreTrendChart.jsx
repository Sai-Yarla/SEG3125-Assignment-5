import { useState } from "react";
import {
  LineChart,
  AreaChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Label,
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
    <div className="chart-legend">
      {payload.map((entry) => (
        <span key={entry.dataKey} className="chart-legend__item">
          <span
            className="chart-legend__dot"
            style={{ backgroundColor: entry.color }}
          />
          {t.genreLabels[entry.dataKey]}
        </span>
      ))}
    </div>
  );
}

/* ── Custom dot label for "Show Values" ── */
function ValueDot(props) {
  const { cx, cy, value } = props;
  if (value === undefined || value === null) return null;
  return (
    <text
      x={cx}
      y={cy - 10}
      textAnchor="middle"
      fill="#121212"
      fontSize={9}
      fontFamily="Outfit, sans-serif"
      fontWeight={900}
    >
      {value}%
    </text>
  );
}

/* ── Annotation data ── */
const ANNOTATIONS = [
  { decade: "1990s", labelKey: "annotationHipHop" },
  { decade: "2010s", labelKey: "annotationStreaming" },
];

/* ── Main Chart Component ── */
export default function GenreTrendChart({ t, activeGenres }) {
  const [viewMode, setViewMode] = useState("line");
  const [showValues, setShowValues] = useState(false);

  const chartData = musicData.map((d) => ({
    decade: d.decade,
    ...d.genreShares,
  }));

  const activeKeys = GENRE_KEYS.filter((g) => activeGenres.has(g));
  const isStacked = viewMode === "stacked";
  const isArea = viewMode === "area" || isStacked;
  const ChartComponent = isArea ? AreaChart : LineChart;

  const yDomain = isStacked ? [0, 100] : [0, "dataMax + 5"];

  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <div>
          <h2 className="chart-card__title">{t.chart1Title}</h2>
          <p className="chart-card__desc">{t.chart1Desc}</p>
        </div>
        <div className="chart-controls">
          {["line", "area", "stacked"].map((mode) => (
            <button
              key={mode}
              className={`chart-control-btn ${viewMode === mode ? "chart-control-btn--active" : ""}`}
              onClick={() => setViewMode(mode)}
              aria-pressed={viewMode === mode}
            >
              {t[mode === "line" ? "viewLine" : mode === "area" ? "viewArea" : "viewStacked"]}
            </button>
          ))}
          <span className="chart-controls__divider" />
          <button
            className={`chart-control-btn ${showValues ? "chart-control-btn--active" : ""}`}
            onClick={() => setShowValues((v) => !v)}
            aria-pressed={showValues}
          >
            {t.showValues}
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <ChartComponent data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis
            dataKey="decade"
            tick={{ fontSize: 12 }}
            label={{
              value: t.axisDecade,
              position: "insideBottom",
              offset: -2,
              style: { fill: "#121212", fontSize: 12, fontFamily: "Outfit, sans-serif", fontWeight: 700 },
            }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={yDomain}
            label={{
              value: t.axisGenreShare,
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { fill: "#121212", fontSize: 12, fontFamily: "Outfit, sans-serif", fontWeight: 700 },
            }}
          />
          <Tooltip content={<GenreTooltip t={t} />} cursor={{ stroke: "rgba(0,0,0,0.05)" }} allowEscapeViewBox={{ x: true, y: true }} />
          <Legend content={(props) => renderLegend(props, t)} />

          {/* Reference line annotations */}
          {ANNOTATIONS.map((ann) => (
            <ReferenceLine
              key={ann.decade}
              x={ann.decade}
              stroke="rgba(18,18,18,0.3)"
              strokeDasharray="6 3"
            >
              <Label
                value={t[ann.labelKey]}
                position="top"
                fill="#121212"
                fontSize={10}
                fontFamily="Outfit, sans-serif"
                fontWeight={900}
                offset={8}
              />
            </ReferenceLine>
          ))}

          {activeKeys.map((genre) =>
            isArea ? (
              <Area
                key={genre}
                type="monotone"
                dataKey={genre}
                stroke={GENRE_COLORS[genre]}
                fill={GENRE_COLORS[genre]}
                fillOpacity={isStacked ? 0.7 : 0.15}
                strokeWidth={isStacked ? 1 : 2}
                stackId={isStacked ? "genres" : undefined}
                dot={showValues ? <ValueDot /> : { r: 3, strokeWidth: 2, fill: "#FFFFFF" }}
                activeDot={{ r: 5, strokeWidth: 0, fill: GENRE_COLORS[genre] }}
                animationDuration={600}
              />
            ) : (
              <Line
                key={genre}
                type="monotone"
                dataKey={genre}
                stroke={GENRE_COLORS[genre]}
                strokeWidth={2.5}
                dot={showValues ? <ValueDot /> : { r: 4, strokeWidth: 2, fill: "#FFFFFF" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: GENRE_COLORS[genre] }}
                animationDuration={600}
              />
            )
          )}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
