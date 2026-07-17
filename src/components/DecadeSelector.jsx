import musicData from "../data/musicData";

export default function DecadeSelector({ t, selectedDecade, onSelectDecade }) {
  const decades = [{ value: "All", label: t.filterAllDecades }, ...musicData.map((d) => ({ value: d.decade, label: d.decade }))];

  return (
    <div className="controls__group" role="group" aria-label={t.filterDecadeLabel}>
      <span className="controls__label">{t.filterDecadeLabel}</span>
      <div className="decade-pills">
        {decades.map((d) => (
          <button
            key={d.value}
            className={`decade-pill ${selectedDecade === d.value ? "decade-pill--active" : ""}`}
            onClick={() => onSelectDecade(d.value)}
            aria-pressed={selectedDecade === d.value}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}
