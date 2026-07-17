export default function Footer({ t }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <p className="footer__source">{t.footerDataSource}</p>
        <p className="footer__disclaimer">{t.footerDisclaimer}</p>
        <p className="footer__designer">{t.footerDesigner}</p>
      </div>
    </footer>
  );
}
