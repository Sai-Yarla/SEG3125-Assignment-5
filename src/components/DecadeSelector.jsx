import musicData from "../data/musicData";

export default function DecadeSelector({ t, selectedDecade, onSelectDecade }) {
  return (
    <div className="controls__group">
      <span className="controls__label">{t.filterDecadeLabel}</span>
      <select
        className="decade-select"
        value={selectedDecade}
        onChange={(e) => onSelectDecade(e.target.value)}
        aria-label={t.filterDecadeLabel}
      >
        <option value="All">{t.filterAllDecades}</option>
        {musicData.map((d) => (
          <option key={d.decade} value={d.decade}>
            {d.decade}
          </option>
        ))}
      </select>
    </div>
  );
}
