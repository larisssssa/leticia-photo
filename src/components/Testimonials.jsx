import { useEffect, useState } from 'react'
import './Testimonials.css'

const QUOTES = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    who: '[Client Name]',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    who: '[Client Name]',
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    who: '[Client Name]',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % QUOTES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="quote-mark">&ldquo;</div>
        <div className="t-slide active" key={current}>
          <p>{QUOTES[current].text}</p>
          <p className="who">{QUOTES[current].who}</p>
        </div>
        <div className="t-dots">
          {QUOTES.map((q, i) => (
            <button
              key={q.who}
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
