import content from '../content'
import './Footer.css'

export default function Footer() {
  const { footer, brand, nav } = content
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>{brand.name}</h4>
            <p style={{ maxWidth: '34ch', color: '#B8AF9E' }}>{footer.aboutText}</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem' }}>{footer.exploreLabel}</h4>
            <ul>
              {nav.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem' }}>{footer.connectLabel}</h4>
            <ul>
              <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li>{brand.officeHours}</li>
            </ul>
            <div className="social" style={{ marginTop: '1rem' }}>
              {footer.social.map((s, i) => (
                <a key={i} href={s.href} aria-label="Social link">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{footer.legalLine}</span>
          <span>{footer.noteLine}</span>
        </div>
      </div>
    </footer>
  )
}
