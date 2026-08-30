import content from '../content'
import './Portfolio.css'

export default function Portfolio() {
  const { portfolio } = content
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="section-head">
          <h2>{portfolio.heading}</h2>
          <p>{portfolio.subtext}</p>
        </div>
        <div className="sheet">
          {portfolio.frames.map((frame) => (
            <div className="frame-item" key={frame.id}>
              <span className="fnum">{frame.id}</span>
              <img src={frame.src} alt={portfolio.imageAlt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="portfolio-cta">
          <a href={portfolio.buttonHref} className="btn">{portfolio.buttonText}</a>
        </div>
      </div>
    </section>
  )
}
