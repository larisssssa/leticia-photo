import { useEffect, useState } from 'react'
import content from '../content'
import './Testimonials.css'

export default function Testimonials() {
  const { quotes, rotateIntervalMs } = content.testimonials
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % quotes.length)
    }, rotateIntervalMs)
    return () => clearInterval(timer)
  }, [quotes.length, rotateIntervalMs])

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="quote-mark">&ldquo;</div>
        <div className="t-slide active" key={current}>
          <p>{quotes[current].text}</p>
          <p className="who">{quotes[current].who}</p>
        </div>
        <div className="t-dots">
          {quotes.map((q, i) => (
            <button
              key={i}
              className={i === current ? 'active' : ''}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
