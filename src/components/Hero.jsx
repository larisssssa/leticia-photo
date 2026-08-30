import content from '../content'
import './Hero.css'

export default function Hero() {
  const { hero } = content
  return (
    <section className="hero">
      <div
        className="hero-media"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(20,16,12,.25) 0%, rgba(20,16,12,.15) 45%, rgba(20,16,12,.65) 100%), url('${hero.backgroundImage}')` }}
      />
      <div className="hero-inner">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>
          {hero.headingBefore}<em>{hero.headingEmphasis}</em>{hero.headingAfter}
        </h1>
        <p className="hero-sub">{hero.subtext}</p>
      </div>
      <span className="scroll-cue">Scroll</span>
    </section>
  )
}
