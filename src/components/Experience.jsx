import './Experience.css'

const STEPS = [
  {
    eyebrow: '[Step Label]',
    title: '[Step Title]',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    eyebrow: '[Step Label]',
    title: '[Step Title]',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    eyebrow: '[Step Label]',
    title: '[Step Title]',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>[Section Title]</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="exp-grid">
          {STEPS.map((step) => (
            <div className="exp-item" key={step.title}>
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
