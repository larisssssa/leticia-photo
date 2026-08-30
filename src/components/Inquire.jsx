import content from '../content'
import './Inquire.css'

export default function Inquire() {
  const { inquire, brand } = content
  return (
    <section className="inquire" id="inquire">
      <div
        className="inquire-media"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(20,16,12,.55), rgba(20,16,12,.72)), url('${inquire.backgroundImage}')` }}
      />
      <div className="wrap">
        <span className="eyebrow" style={{ color: '#EDE6D8' }}>{inquire.eyebrow}</span>
        <h2>{inquire.heading}</h2>
        <a href={inquire.booking} className="btn light">{inquire.buttonText}</a>
      </div>
    </section>
  )
}
