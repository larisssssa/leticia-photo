import './Inquire.css'

export default function Inquire() {
  return (
    <section className="inquire" id="inquire">
      <div className="inquire-media" />
      <div className="wrap">
        <span className="eyebrow" style={{ color: '#EDE6D8' }}>[Eyebrow Label]</span>
        <h2>[Call-to-Action Heading]</h2>
        <a href="mailto:hello@example.com" className="btn light">[Button Text]</a>
      </div>
    </section>
  )
}
