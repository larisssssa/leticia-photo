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
    eyebrow: "Wedding  ·  Lifestyle  ·  Event",
    headingBefore: "Real moments ",
    headingEmphasis: "beautifully kept ",
    headingAfter: "forever",
    subtext:
      "Photographing weddings the way they actually happen: full of laughter, quiet glances, and moments too good to stage.",
    backgroundImage: "/public/images/header-1.jpg",
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
    portraitImage: "/public/images/L-41.jpg",
    portraitAlt: "Leticia Ferreira, wedding photographer, smiling outdoors",
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
      { id: "01", src: "/public/images/gallery-1.jpg" },
      { id: "02", src: "/public/images/gallery-2.jpg" },
      { id: "03", src: "/public/images/gallery-3.jpg" },
      { id: "04", src: "/public/images/gallery-4.jpg" },
      { id: "05", src: "/public/images/gallery-5.jpg" },
      { id: "06", src: "/public/images/gallery-6.jpg" },
      { id: "07", src: "/public/images/gallery-7.jpg" },
      { id: "08", src: "/public/images/gallery-8.jpg" },
      { id: "09", src: "/public/images/gallery-9.jpg" },
      { id: "10", src: "/public/images/gallery-10.jpg" },
      { id: "11", src: "/public/images/gallery-11.jpg" },
      { id: "12", src: "/public/images/gallery-12.jpg" },
      { id: "13", src: "/public/images/gallery-13.jpg" },
      { id: "14", src: "/public/images/gallery-14.jpg" },
      { id: "15", src: "/public/images/gallery-15.jpg" },
      { id: "16", src: "/public/images/gallery-16.jpg" },
    ],
    imageAlt: "[Gallery of moments captured by Leticia]",
  },

  // ---- Testimonials section -------------------------------------------------
  testimonials: {
    quotes: [
      {
        text: "I can’t say enough wonderful things about Leticia, not only for the incredible photos she captures, but as both a professional and a person. She makes the entire experience fun and refreshing. From our engagement shoot to capturing our whole wedding day, everything was perfect. The photos speak for themselves: absolutely flawless. 5 stars.​​​​​​​​",
        who: "Will S.",
      },
      {
        text: "We could not be happier to have found Letty as our wedding photographer! Her work is beautiful and she made us feel so comfortable!! Would give 10 stars if I could!!",
        who: "Hannah L.",
      },
      {
        text: "[...] My fiancé and I aren't super comfortable in front of the camera, but we can both say we felt 100% at ease. We didn't feel stiff or posed and she was able to capture raw moments while guiding and prompting us when needed.Letty is the absolute best, and we couldn't imagine anyone else capturing the most important day of our lives.",
        who: "Hannah F.",
      },
      {
        text: "I have had the absolute pleasure of working with Letty multiple times- she has captured many moments for my family and I cannot say enough wonderful things about her. She has become our go-to photographer, and when planning our wedding there was no question that she would be our choice. [...]",
        who: "Cassandra B.",
      },
    ],
    rotateIntervalMs: 6000,
  },

  // ---- Experience / process steps --------------------------------------------
  experience: {
    heading: "The Experience",
    subtext:
      "From first hello to final gallery, here's what working together looks like.",
    steps: [
      {
        eyebrow: "01",
        title: "Reach Out",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        eyebrow: "02",
        title: "The Day Of",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        eyebrow: "03",
        title: "Your Gallery",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
    ],
  },

  // ---- Inquire / call-to-action section -------------------------------------
  inquire: {
    eyebrow: "Ready When You Are",
    heading: "Let's capture something real",
    buttonText: "Book Now",
    backgroundImage: "/public/images/cta-1.jpg",
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
  // Names describe WHERE each color is used, not what it looks like, so the
  // palette can be swapped later without touching any component file.
  theme: {
    colorBg: "#FDFBF7", // Parchment — light section/page background
    colorText: "#373D20", // Dark Khaki — body text on light backgrounds
    colorBgInverse: "#373D20", // Dark Khaki — dark section backgrounds
    colorTextInverse: "#FDFBF7", // Parchment — text on dark backgrounds
    colorBgAccent: "#64693C", // Dusty Olive (darkened for AA contrast) — Testimonials background
    colorAccent: "#766153", // Ash Brown — eyebrow labels, focus rings, hover accents
    colorBorder: "#BCBD8B", // Dry Sage — hairline dividers, subtle borders
  },
};

export default content;
