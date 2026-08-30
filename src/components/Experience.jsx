import content from '../content'
import './Experience.css'

export default function Experience() {
  const { experience } = content
  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>{experience.heading}</h2>
          <p>{experience.subtext}</p>
        </div>
        <div className="exp-grid">
          {experience.steps.map((step, i) => (
            <div className="exp-item" key={i}>
              <span className="eyebrow">{step.eyebrow}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
