// Every visible string on the site. zh-tw.ts must have the same shape (enforced by the type).
// Facts come from the app (tangent/AGENTS.md and its i18n); don't add claims the owner hasn't made.
export const en = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/',
  meta: {
    title: 'Tangent — Describe a part, get a real CAD model',
    description:
      'Tangent is a macOS app where you describe a part in chat and an AI Agent builds an exact, measurable solid model. Change it by talking, then export STEP or STL, or open it in Bambu Studio.',
    ogAlt: 'The Tangent mandarin icon next to the words: Describe a part, get a real CAD model.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    how: 'How it works',
    features: 'Features',
    examples: 'Examples',
    sources: 'Model sources',
    home: 'Tangent home',
  },
  lang_switch: { label: '中文', aria: '切換為繁體中文', target: 'zh-tw' },
  download: 'Download for macOS',
  hero: {
    eyebrow: 'macOS app',
    lede: 'Describe a part. Tangent builds a solid model with real dimensions you can measure and export to STEP.',
    secondary: 'See how it works',
    scroll: 'Scroll to the next section',
  },
  intro: {
    kicker: 'Why Tangent',
    title: 'From a sentence to a part you can measure',
    body: 'A simple bracket shouldn’t need a CAD course, and a shape without real dimensions isn’t a part. Say what you need; you get an exact solid you can measure, change and send to a printer or a shop.',
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
    versions: 'History',
    dims: '90 mm',
  },
  how: {
    kicker: 'How it works',
    title: 'Three steps, one conversation',
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
        title: 'Refine and export',
        body: 'Keep talking to change it. Each result is a version. Export when it’s right.',
      },
    ],
  },
  features: {
    kicker: 'Features',
    title: 'Built for parts, not pictures',
    items: [
      {
        icon: 'select',
        title: 'Point at geometry',
        body: 'Select faces, edges or parts and press ⌘L. They land in your sentence as chips, with position and size attached.',
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
    body: 'Attach an image and say what you want. An SVG also sends its exact paths.',
    label: 'A Tangent project: the app icon attached in the conversation, and the solid mandarin modeled from it',
    project: 'Tangent icon model',
    file: 'app-icon-light.png',
    user: 'Make a model of this shape, about 7 cm on each side',
    agent: 'I modeled the faceted orange with a short stem and two angular leaves.',
    note: 'v2–v6, in conversation: irregular facets, a rounder outline, one printable piece, sturdier stem and leaves',
    viewerLabel: 'The mandarin model in 3D. Drag, or use the arrow keys, to turn it.',
    viewerHint: 'Drag to rotate',
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
  final: {
    title: 'Start with a sentence',
    body: 'For macOS, in English and Traditional Chinese.',
  },
  footer: {
    language: 'Language',
  },
};

export type Dict = typeof en;
