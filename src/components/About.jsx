import content from "../content";
import "./About.css";

export default function About() {
  const { about } = content;
  return (
    <section className="intro" id="about">
      <div className="wrap">
        <div className="intro-img">
          <img src={about.portraitImage} alt={about.portraitAlt} />
          <div className="frame" />
        </div>
        <div className="intro-text">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="signature">— {about.signature}</p>
        </div>
      </div>
    </section>
  );
}
