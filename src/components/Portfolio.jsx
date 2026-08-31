import { useEffect, useRef } from "react";
import content from "../content";
import "./Portfolio.css";

// Pixels per second the gallery drifts on its own when not being dragged.
const AUTO_SPEED = 40;

export default function Portfolio() {
  const { portfolio } = content;
  const { frames } = portfolio;

  // Duplicate the set once — enough for a seamless marquee loop, since the
  // track is driven continuously by transform rather than native scrolling.
  const loopFrames = [...frames, ...frames];

  const trackRef = useRef(null);
  const setWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastTimeRef = useRef(null);

  // Measure the width of one full copy of the images (for wrapping).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [frames.length]);

  const applyTransform = () => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!track || !setWidth) return;
    // Wrap into [0, setWidth) — because the content is duplicated, wrapping
    // here never changes what's on screen, so there's no visible jump.
    let o = offsetRef.current % setWidth;
    if (o < 0) o += setWidth;
    offsetRef.current = o;
    track.style.transform = `translateX(${-o}px)`;
  };

  // Continuous drift, paused while the user is actively dragging.
  useEffect(() => {
    let rafId;
    const tick = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!draggingRef.current) {
        offsetRef.current += AUTO_SPEED * dt;
        applyTransform();
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const delta = dragStartXRef.current - e.clientX;
    offsetRef.current = dragStartOffsetRef.current + delta;
    applyTransform();
  };

  const onPointerUp = (e) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* no-op */
    }
  };

  const step = (direction) => {
    const first = trackRef.current?.querySelector(".carousel-slide");
    const slideWidth = first ? first.offsetWidth + 14 : 300;
    offsetRef.current += direction * slideWidth;
    applyTransform();
  };

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
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {loopFrames.map((frame, i) => (
                <div className="carousel-slide" key={`${frame.id}-${i}`}>
                  <span className="fnum">{frame.id}</span>
                  <img
                    src={frame.src}
                    alt={portfolio.imageAlt}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow next"
            onClick={() => step(1)}
            aria-label="Next image"
          >
            &#8250;
          </button>
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
