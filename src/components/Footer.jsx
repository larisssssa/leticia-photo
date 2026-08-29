import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>[Studio Name]</h4>
            <p style={{ maxWidth: '34ch', color: '#B8AF9E' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem' }}>[Menu Label]</h4>
            <ul>
              <li><a href="#about">[Nav Link]</a></li>
              <li><a href="#portfolio">[Nav Link]</a></li>
              <li><a href="#experience">[Nav Link]</a></li>
              <li><a href="#inquire">[Nav Link]</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem' }}>[Menu Label]</h4>
            <ul>
              <li><a href="mailto:hello@example.com">[email@example.com]</a></li>
              <li>[Office hours placeholder]</li>
            </ul>
            <div className="social" style={{ marginTop: '1rem' }}>
              <a href="#" aria-label="Social link">[Social]</a>
              <a href="#" aria-label="Social link">[Social]</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© [Year] [Studio Name]. [Legal / copyright placeholder].</span>
          <span>[Footer note placeholder]</span>
        </div>
      </div>
    </footer>
  )
}
