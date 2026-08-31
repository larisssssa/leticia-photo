import { useEffect, useLayoutEffect, useRef, useState } from "react";
import content from "../content";
import "./Testimonials.css";

const MIN_WIDTH = 260; // narrowest the quote will start at (px)
const MAX_WIDTH = 760; // widest the quote is allowed to grow to (px)
const WIDTH_STEP = 16; // how much wider to try on each pass (px)

export default function Testimonials() {
  const { quotes, rotateIntervalMs } = content.testimonials;
  const [current, setCurrent] = useState(0);

  const stageRef = useRef(null);
  const quoteRef = useRef(null);
  const whoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % quotes.length);
    }, rotateIntervalMs);
    return () => clearInterval(timer);
  }, [quotes.length, rotateIntervalMs]);

  // Fixed-height stage: if the quote would need more vertical room than the
  // stage allows, widen it step by step (rather than adding lines) until it
  // fits, capped at MAX_WIDTH.
  useLayoutEffect(() => {
    const fit = () => {
      const stage = stageRef.current;
      const quote = quoteRef.current;
      const who = whoRef.current;
      if (!stage || !quote || !who) return;

      const stageHeight = stage.clientHeight;
      const whoHeight = who.offsetHeight;
      const gap = parseFloat(getComputedStyle(quote).marginBottom) || 0;
      const maxQuoteHeight = stageHeight - whoHeight - gap;
      const maxWidth = Math.min(MAX_WIDTH, stage.clientWidth);

      let width = MIN_WIDTH;
      quote.style.width = `${width}px`;

      let guard = 0;
      while (
        quote.scrollHeight > maxQuoteHeight &&
        width < maxWidth &&
        guard < 40
      ) {
        width = Math.min(width + WIDTH_STEP, maxWidth);
        quote.style.width = `${width}px`;
        guard++;
      }
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [current, quotes]);

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="quote-mark">&ldquo;</div>
        <div className="t-stage" ref={stageRef}>
          <div className="t-slide active" key={current}>
            <p ref={quoteRef}>{quotes[current].text}</p>
            <p className="who" ref={whoRef}>
              {quotes[current].who}
            </p>
          </div>
        </div>
        <div className="t-dots">
          {quotes.map((q, i) => (
            <button
              key={i}
              className={i === current ? "active" : ""}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
