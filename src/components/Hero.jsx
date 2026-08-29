import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" />
      <div className="hero-inner">
        <span className="eyebrow">[Location] &nbsp;&middot;&nbsp; [Location] &nbsp;&middot;&nbsp; [Location]</span>
        <h1>
          Lorem ipsum dolor sit <em>amet consectetur</em> adipiscing elit
        </h1>
        <p className="hero-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <span className="scroll-cue">Scroll</span>
    </section>
  )
}
