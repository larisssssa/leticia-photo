import content from '../content'
import './Statement.css'

export default function Statement() {
  const { statement } = content
  return (
    <section className="statement">
      <div className="wrap">
        <span className="eyebrow">{statement.eyebrow}</span>
        <h2>{statement.heading}</h2>
      </div>
    </section>
  )
}
