import './Portfolio.css'

const FRAMES = [
  { id: '01', src: 'https://picsum.photos/id/1011/900/1100' },
  { id: '02', src: 'https://picsum.photos/id/1005/700/500' },
  { id: '03', src: 'https://picsum.photos/id/1025/700/500' },
  { id: '04', src: 'https://picsum.photos/id/1035/700/900' },
  { id: '05', src: 'https://picsum.photos/id/1041/700/900' },
  { id: '06', src: 'https://picsum.photos/id/1043/700/900' },
  { id: '07', src: 'https://picsum.photos/id/1059/1200/700' },
  { id: '08', src: 'https://picsum.photos/id/1074/700/900' },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="section-head">
          <h2>[Gallery Title]</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
        <div className="sheet">
          {FRAMES.map((frame) => (
            <div className="frame-item" key={frame.id}>
              <span className="fnum">{frame.id}</span>
              <img src={frame.src} alt="[Gallery image placeholder]" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="portfolio-cta">
          <a href="#" className="btn">[Button Text]</a>
        </div>
      </div>
    </section>
  )
}
