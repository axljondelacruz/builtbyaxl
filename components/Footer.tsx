export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span className="brand-name">Built by Axl</span>
        </div>
        <div className="small">© {new Date().getFullYear()} Built by Axl · Web design &amp; development · Las Vegas</div>
      </div>
    </footer>
  );
}
