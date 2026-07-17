export default function Header({ t, language, onToggleLanguage }) {
  return (
    <header className="header" role="banner">
      <div className="header__brand">
        <h1 className="header__title">{t.dashboardTitle}</h1>
        <p className="header__subtitle">{t.dashboardSubtitle}</p>
        <p className="header__designer">{t.designerCredit}</p>
      </div>
      <button
        className="lang-toggle"
        onClick={onToggleLanguage}
        aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
        aria-live="polite"
      >
        <span className="lang-toggle__flag">{t.langFlag}</span>
        {t.langToggle}
      </button>
    </header>
  );
}
