import { useState } from "react";
import content from "../content";
import "./Portfolio.css";

export default function Portfolio() {
  const { portfolio } = content;
  const { frames } = portfolio;
  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex((i + frames.length) % frames.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="section-head">
          <h2>{portfolio.heading}</h2>
          <p>{portfolio.subtext}</p>
        </div>

        <div className="carousel">
          <button
            className="carousel-arrow prev"
            onClick={prev}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div className="carousel-track">
            {frames.map((frame, i) => (
              <div
                className={`carousel-slide${i === index ? " active" : ""}`}
                key={frame.id}
                aria-hidden={i !== index}
              >
                <span className="fnum">{frame.id}</span>
                <img src={frame.src} alt={portfolio.imageAlt} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow next"
            onClick={next}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {frames.map((frame, i) => (
            <button
              key={frame.id}
              className={i === index ? "active" : ""}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="portfolio-cta">
          <a href={portfolio.buttonHref} className="btn">
            {portfolio.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
