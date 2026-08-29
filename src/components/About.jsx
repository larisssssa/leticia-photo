import './About.css'

export default function About() {
  return (
    <section className="intro" id="about">
      <div className="wrap">
        <div className="intro-img">
          <img src="https://picsum.photos/id/1027/900/1100" alt="[Portrait placeholder]" />
          <div className="frame" />
        </div>
        <div className="intro-text">
          <span className="eyebrow">[Section Label]</span>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <p>
            In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p className="signature">— [Signature / Name]</p>
        </div>
      </div>
    </section>
  )
}
