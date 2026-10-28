// Every visible string on the site. zh-tw.ts must have the same shape (enforced by the type).
// Facts come from the app (tangent/AGENTS.md and its i18n); don't add claims the owner hasn't made.
export const en = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/',
  meta: {
    title: 'Tangent — Point at a part and tell the Agent what to change',
    description:
      'Tangent is a macOS CAD app where you click a face, edge or hole and tell an AI Agent what to change. Every result is an exact, measurable solid and a version you can compare or restore. Export STEP or STL, or open it in Bambu Studio.',
    ogAlt: 'The Tangent mark and the words “Point at it. Tell it what to change.” beside a 3D mandarin model with one face selected.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    how: 'How it works',
    features: 'Features',
    examples: 'Examples',
    sources: 'Model sources',
    pricing: 'Pricing',
    home: 'Tangent home',
  },
  theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
  lang_switch: { label: '中文', aria: '切換為繁體中文', target: 'zh-tw' },
  // No download yet: every call to action points at the waitlist form in the pricing section
  cta: 'Join the waitlist',
  hero: {
    eyebrow: 'macOS app · in development',
    lede: 'Click any face, edge or hole and say what to change. The Agent knows exactly which part you mean, and every result is a measurable CAD version you can compare or roll back.',
    secondary: 'See how it works',
    scroll: 'Scroll to the next section',
  },
  intro: {
    kicker: 'Why Tangent',
    title: 'Getting a first model is easy. Changing the right part is not.',
    body: 'The hard part is the tenth change: describing in words which edge you mean, then hoping it lands there. In Tangent you point at it instead. Every result is kept as a version, and it’s a real solid you can measure and export.',
  },
  mock: {
    label: 'Tangent showing a conversation next to the 3D model it built',
    project: 'Enclosure',
    conversation: 'Conversation',
    user1: 'A 90 × 60 × 28 mm electronics enclosure with M3 holes in the corners',
    agent1: 'Here’s a two-part enclosure: a 2.0 mm shell and a lid fastened with four M3 screws.',
    question: 'How should the lid attach?',
    optionA: 'Four M3 screws',
    optionB: 'Snap fit',
    user2Before: 'Make',
    chip: 'Top face',
    user2After: '3 mm thick',
    phases: ['Thinking', 'Writing the reply and code', 'Building with build123d'],
    linesUnit: 'lines',
    versions: 'History',
    dims: '90 mm',
    caption: 'The “Top face” in the last message was clicked on the model, not described.',
  },
  how: {
    kicker: 'How it works',
    title: 'Start with a sentence, then point',
    steps: [
      {
        title: 'Describe it',
        body: 'Write what you need. Attach images, PDFs, text files or links if they help.',
      },
      {
        title: 'The Agent models it',
        body: 'It writes build123d code, Tangent runs it in a sandbox on your Mac, and the solid appears. Build errors go back to the Agent to fix.',
      },
      {
        title: 'Point and refine',
        body: 'Click the part you want changed and say what to do. Each result is a version you can restore, branch or compare.',
      },
    ],
  },
  point: {
    kicker: 'Selection',
    title: 'Point at it instead of describing it',
    body: 'Click a face, edge or hole on the model and it drops into your message. The Agent gets its exact position, normal and size, so it knows which part you mean without a paragraph explaining it.',
    without: 'Instead of',
    withoutText: '“the M3 hole in the front right corner of the lid, not the other three…”',
    with: 'Just',
    before: 'Make',
    chip: 'Bore wall',
    after: '1.5 mm larger',
    label: 'Clicking one hole on an enclosure adds it to the message, and only that hole gets larger',
    building: 'Building with build123d',
  },
  features: {
    kicker: 'Features',
    title: 'Built for parts, not pictures',
    items: [
      {
        icon: 'select',
        title: 'Point at geometry',
        body: 'Click a face, edge or part and press ⌘L. It lands in your sentence, so the Agent knows exactly which one you mean.',
      },
      {
        icon: 'versions',
        title: 'Every result is a version',
        body: 'Restore any version, branch from it, or compare it with the last one.',
      },
      {
        icon: 'options',
        title: 'Questions with options',
        body: 'When a choice matters, the Agent asks and offers options you pick in one click.',
      },
      {
        icon: 'pin',
        title: 'Annotations that stay',
        body: 'Pin notes to the model. The Agent acts on one when you mention it.',
      },
      {
        icon: 'measure',
        title: 'Measure and inspect',
        body: 'Measure, section, x-ray and focus on any model.',
      },
      {
        icon: 'book',
        title: 'CAD knowledge built in',
        body: 'Every model source gets the same bundled modeling knowledge.',
      },
    ],
  },
  reference: {
    kicker: 'Reference images',
    title: 'Start from a picture',
    body: 'Attach an image for a first model, then refine it the same way: point and say what to change. An SVG also sends its exact paths.',
    label: 'A Tangent project: the app icon attached in the conversation, and the solid mandarin modeled from it',
    project: 'Tangent icon model',
    file: 'app-icon-light.png',
    user: 'Make a model of this shape, about 7 cm on each side',
    agent: 'I modeled the faceted orange with a short stem and two angular leaves.',
    note: 'v2–v6, in conversation: irregular facets, a rounder outline, one printable piece, sturdier stem and leaves',
    viewerLabel: 'The mandarin model in 3D. Drag, or use the arrow keys, to turn it.',
    viewerHint: 'Drag to rotate',
    replay: 'Replay',
    replayLabel: 'Replay the build',
  },
  sources: {
    kicker: 'Model sources',
    title: 'Use the model you already have',
    body: 'Pick a model and its options from the menu next to the message box.',
    groups: [
      { title: 'Local CLIs', items: ['Claude Code', 'Codex'] },
      { title: 'Local servers', items: ['Ollama', 'LM Studio'] },
      { title: 'Cloud APIs', items: ['OpenAI', 'Anthropic', 'Gemini', 'OpenRouter', 'Any OpenAI-compatible service'] },
    ],
    trust: [
      { title: 'Keys stay in your Keychain', body: 'API keys live in the macOS Keychain.' },
      { title: 'Model code runs sandboxed', body: 'The Agent’s code runs in a sandbox on your Mac.' },
    ],
  },
  examples: {
    kicker: 'Examples',
    title: 'Open a real model and keep going',
    body: 'Open one from the home screen and edit it with the Agent.',
    items: [
      { id: 'pi', title: 'Raspberry Pi 5 cooling case', detail: 'Three-piece CNC aluminum, with a reference board' },
      { id: 'fpv', title: 'Carbon quadcopter frame', detail: '5-inch, 220 mm wheelbase, with motors and FC' },
      { id: 'gear', title: 'Planetary gearbox', detail: '4:1, three planets, involute teeth' },
    ],
    figure: 'Line drawing of the',
  },
  export: {
    kicker: 'Export',
    title: 'Take it to the slicer or the shop',
    items: [
      { name: 'STEP', body: 'For CAD tools and machine shops.' },
      { name: 'STL', body: 'For any slicer.' },
      { name: 'build123d code', body: 'The Python behind the model.' },
      { name: 'Project', body: 'The whole project as JSON.' },
      {
        name: 'Open in Bambu Studio',
        body: 'One object per printable part. Oversized parts are flagged.',
      },
    ],
  },
  pricing: {
    kicker: 'Pricing',
    title: 'Try it free, then buy it once',
    plans: [
      { name: 'Free trial', price: 'Free', unit: 'for 72 hours', features: ['One project'] },
      {
        name: 'Tangent',
        price: 'US$19',
        unit: 'one-time purchase',
        features: ['Full features', 'All 1.x updates included', 'The version you own keeps working'],
      },
    ],
    disclaimer: 'Prices and plans may change before launch.',
    waitlist: {
      title: 'Tangent is still in development',
      body: 'Join the waitlist to hear when it’s ready.',
      button: 'Join the waitlist',
      thanks: 'You’re on the list. We’ll email you when Tangent is ready.',
      failed: 'The form opened in a new tab.',
    },
  },
  final: {
    title: 'Point. Then talk.',
    body: 'For macOS, in English and Traditional Chinese.',
  },
  footer: {
    tagline: 'Point at the model, talk it into shape.',
    label: 'Legal and contact',
    contact: 'Contact: ',
    // Nicraft's other apps. url is the app's site in this page's language; icon is the app's own
    // icon (from its project), 128px for a 40px slot.
    more: { label: 'More from Nicraft', items: [{ name: 'Bangs', url: 'https://bangs.nicraft.co/', icon: '/products/bangs.png', blurb: 'Your MacBook notch, put to work.' }] },
    rights: 'All rights reserved.',
    trademark:
      'Tangent and the Tangent logo are trademarks of Nicraft. Apple, Mac and macOS are trademarks of Apple Inc. Other product names are trademarks of their respective owners.',
  },
  legal: {
    updated: 'Last updated: ',
    back: 'Back to Tangent',
    privacy: {
      title: 'Privacy Policy',
      meta: 'Tangent Privacy Policy',
      description: 'What Nicraft handles when you use Tangent, its website, waitlist and licenses, what goes to your model source, and the choices you have.',
    },
    terms: {
      title: 'Terms of Use',
      meta: 'Tangent Terms of Use',
      description: 'The terms for using Tangent for macOS: licenses and purchases, model sources, AI-generated models, your designs, and your rights.',
    },
  },
};

export type Dict = typeof en;
