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
    name: "Leticia Ferreira Photography",
    tagline: "East Coast Wedding Photographer",
    email: "leticiafphotography@gmail.com",
    officeHours: "Monday - Friday 9 AM - 5 PM",
  },

  // ---- Navigation (shared by header + footer) ---------------------------
  nav: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Inquire", href: "#inquire" },
  ],

  // ---- Hero section -------------------------------------------------------
  hero: {
    eyebrow: "Wedding  ·  Lifestyle  ·  [Location]",
    headingBefore: "Lorem ipsum dolor sit ",
    headingEmphasis: "amet consectetur",
    headingAfter: " adipiscing elit",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundImage: "public/images/cta-1.jpg",
  },

  // ---- About section -------------------------------------------------------
  about: {
    eyebrow: "Hey, I'm Letty!",
    heading:
      "I'm so thankful you're here and I can't wait to capture your most precious moments.",
    paragraphs: [
      "I want my work to be a reflection of being in love and at peace, not just finding the perfect photo opportunity but rather capturing the love as it naturally unfolds in the way my clients show each other their love best.",
      "Most importantly, always remembering, that the best photographs don’t just show what happened, but show exactly how it felt.",
    ],
    signature: "Leticia Ferreira",
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
    heading: "Gallery",
    subtext: "Your memories, my camera.",
    buttonText: "Gallery",
    buttonHref: "https://leticiafphoto.pic-time.com/client",
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
    buttonText: "Book Now",
    backgroundImage: "public/images/header-1.jpg",
    booking: "https://book.usesession.com/i/4kTbegN5j",
  },

  // ---- Footer ----------------------------------------------------------------
  footer: {
    aboutText: "your memories, my camera",
    exploreLabel: "Explore",
    connectLabel: "Connect",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/leticiafphoto/" },
      { label: "TikTok", href: "https://www.tiktok.com/@lettyferreira__" },
      {
        label: "Google Reviews",
        href: "https://share.google/bbSuEQHaKSR8UXGLG",
      },
    ],
    legalLine: "© 2026 Leticia Ferreira Photography.",
    noteLine: "",
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
