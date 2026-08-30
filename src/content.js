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
    name: '[Studio Name]',
    tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'hello@example.com',
    officeHours: '[Office hours placeholder]',
  },

  // ---- Navigation (shared by header + footer) ---------------------------
  nav: [
    { label: '[Nav Link]', href: '#about' },
    { label: '[Nav Link]', href: '#portfolio' },
    { label: '[Nav Link]', href: '#experience' },
    { label: '[Nav Link]', href: '#inquire' },
  ],

  // ---- Hero section -------------------------------------------------------
  hero: {
    eyebrow: '[Location]  ·  [Location]  ·  [Location]',
    headingBefore: 'Lorem ipsum dolor sit ',
    headingEmphasis: 'amet consectetur',
    headingAfter: ' adipiscing elit',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: 'https://picsum.photos/id/1015/1600/2000',
  },

  // ---- About section -------------------------------------------------------
  about: {
    eyebrow: '[Section Label]',
    heading:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    signature: '[Signature / Name]',
    portraitImage: 'https://picsum.photos/id/1027/900/1100',
    portraitAlt: '[Portrait placeholder]',
  },

  // ---- Statement / pull-quote band -----------------------------------------
  statement: {
    eyebrow: '[Section Label]',
    heading: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },

  // ---- Portfolio / gallery section -----------------------------------------
  portfolio: {
    heading: '[Gallery Title]',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    buttonText: '[Button Text]',
    buttonHref: '#',
    frames: [
      { id: '01', src: 'https://picsum.photos/id/1011/900/1100' },
      { id: '02', src: 'https://picsum.photos/id/1005/700/500' },
      { id: '03', src: 'https://picsum.photos/id/1025/700/500' },
      { id: '04', src: 'https://picsum.photos/id/1035/700/900' },
      { id: '05', src: 'https://picsum.photos/id/1041/700/900' },
      { id: '06', src: 'https://picsum.photos/id/1043/700/900' },
      { id: '07', src: 'https://picsum.photos/id/1059/1200/700' },
      { id: '08', src: 'https://picsum.photos/id/1074/700/900' },
    ],
    imageAlt: '[Gallery image placeholder]',
  },

  // ---- Testimonials section -------------------------------------------------
  testimonials: {
    quotes: [
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
    ],
    rotateIntervalMs: 6000,
  },

  // ---- Experience / process steps --------------------------------------------
  experience: {
    heading: '[Section Title]',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    steps: [
      {
        eyebrow: '[Step Label]',
        title: '[Step Title]',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      },
      {
        eyebrow: '[Step Label]',
        title: '[Step Title]',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      },
      {
        eyebrow: '[Step Label]',
        title: '[Step Title]',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
      },
    ],
  },

  // ---- Inquire / call-to-action section -------------------------------------
  inquire: {
    eyebrow: '[Eyebrow Label]',
    heading: '[Call-to-Action Heading]',
    buttonText: '[Button Text]',
    backgroundImage: 'https://picsum.photos/id/1035/1600/900',
  },

  // ---- Footer ----------------------------------------------------------------
  footer: {
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    exploreLabel: '[Menu Label]',
    connectLabel: '[Menu Label]',
    social: [
      { label: '[Social]', href: '#' },
      { label: '[Social]', href: '#' },
    ],
    legalLine: '© [Year] [Studio Name]. [Legal / copyright placeholder].',
    noteLine: '[Footer note placeholder]',
  },

  // ---- Design tokens (kept in sync with src/index.css custom properties) -----
  // Changing these values updates this reference only — to actually change the
  // site's colors, edit the CSS custom properties in src/index.css.
  theme: {
    bone: '#F4EFE6',
    ink: '#2B241E',
    clay: '#A9603A',
    sage: '#6C7350',
    line: '#DCD2BD',
    paper: '#FBF8F2',
  },
}

export default content
