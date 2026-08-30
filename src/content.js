// ============================================================================
// SITE CONTENT
// ----------------------------------------------------------------------------
// Every editable piece of text, image, and label on the site lives here.
// Edit this file only — you should never need to open a file inside
// src/components/ just to change copy, images, or labels.
// ============================================================================

const content = {
  // ---- Brand -----------------------------------------------------------
  brand: {
    name: "[Studio Name]",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    email: "hello@example.com",
    officeHours: "[Office hours placeholder]",
  },

  // ---- Navigation (shared by header + footer) ---------------------------
  nav: [
    { label: "[Nav Link]", href: "#about" },
    { label: "[Nav Link]", href: "#portfolio" },
    { label: "[Nav Link]", href: "#experience" },
    { label: "[Nav Link]", href: "#inquire" },
  ],

  // ---- Hero section -------------------------------------------------------
  hero: {
    eyebrow: "[Location]  ·  [Location]  ·  [Location]",
    headingBefore: "Lorem ipsum dolor sit ",
    headingEmphasis: "amet consectetur",
    headingAfter: " adipiscing elit",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundImage: "public/images/cta-1.jpg",
  },

  // ---- About section -------------------------------------------------------
  about: {
    eyebrow: "[Section Label]",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      "In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    signature: "[Signature / Name]",
    portraitImage: "public/images/L-41.JPG",
    portraitAlt: "[Portrait placeholder]",
  },

  // ---- Statement / pull-quote band -----------------------------------------
  statement: {
    eyebrow: "[Section Label]",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
  },

  // ---- Portfolio / gallery section -----------------------------------------
  portfolio: {
    heading: "[Gallery Title]",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    buttonText: "[Button Text]",
    buttonHref: "#",
    frames: [
      { id: "01", src: "public/images/gallery-1.jpg" },
      { id: "02", src: "public/images/gallery-2.jpg" },
      { id: "03", src: "public/images/gallery-3.jpg" },
      { id: "04", src: "public/images/gallery-4.jpg" },
      { id: "05", src: "public/images/gallery-5.jpg" },
      { id: "06", src: "public/images/gallery-6.jpg" },
      { id: "07", src: "public/images/gallery-7.jpg" },
      { id: "08", src: "public/images/gallery-8.jpg" },
    ],
    imageAlt: "[Gallery image placeholder]",
  },

  // ---- Testimonials section -------------------------------------------------
  testimonials: {
    quotes: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        who: "[Client Name]",
      },
      {
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        who: "[Client Name]",
      },
      {
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        who: "[Client Name]",
      },
    ],
    rotateIntervalMs: 6000,
  },

  // ---- Experience / process steps --------------------------------------------
  experience: {
    heading: "[Section Title]",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    steps: [
      {
        eyebrow: "[Step Label]",
        title: "[Step Title]",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        eyebrow: "[Step Label]",
        title: "[Step Title]",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        eyebrow: "[Step Label]",
        title: "[Step Title]",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
    ],
  },

  // ---- Inquire / call-to-action section -------------------------------------
  inquire: {
    eyebrow: "[Eyebrow Label]",
    heading: "[Call-to-Action Heading]",
    buttonText: "[Button Text]",
    backgroundImage: "public/images/header-1.jpg",
  },

  // ---- Footer ----------------------------------------------------------------
  footer: {
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    exploreLabel: "[Menu Label]",
    connectLabel: "[Menu Label]",
    social: [
      { label: "[Social]", href: "#" },
      { label: "[Social]", href: "#" },
    ],
    legalLine: "© [Year] [Studio Name]. [Legal / copyright placeholder].",
    noteLine: "[Footer note placeholder]",
  },

  // ---- Design tokens (kept in sync with src/index.css custom properties) -----
  // Changing these values updates this reference only — to actually change the
  // site's colors, edit the CSS custom properties in src/index.css.
  theme: {
    bone: "#EBE9E2", // linen
    ink: "#15150C", // black
    clay: "#9C9784", // darkgray (warm accent)
    sage: "#42422D", // darkslategray
    line: "#C4C3C9", // silver
    paper: "#EBE9E2", // linen
    silver: "#AFB4B2", // darkgray (spare neutral)
  },
};

export default content;
