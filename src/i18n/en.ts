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
      'Tangent is a macOS app where you describe a part in chat and an AI Agent builds a real, measurable solid model with build123d. Edit it by conversation, then export STEP or STL, or open it in Bambu Studio.',
    ogAlt: 'The Tangent mandarin icon next to the words: Describe a part, get a real CAD model.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    how: 'How it works',
    features: 'Features',
    sources: 'Model sources',
    export: 'Export',
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
    body: 'Modeling even a simple bracket usually means learning a CAD package first, and a generated shape without real dimensions isn’t a part you can make. With Tangent you say what you need, the Agent writes build123d code, and you get a real solid you can check, change and send to a printer or a machine shop.',
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
    building: 'Building…',
    versions: 'History',
    dims: '90 mm',
  },
  how: {
    kicker: 'How it works',
    title: 'Three steps, one conversation',
    steps: [
      {
        title: 'Describe it',
        body: 'Write what you need. Add images, PDFs, text files or links. An SVG goes in as a picture and as its source, so the Agent can model from the exact paths.',
      },
      {
        title: 'The Agent models it',
        body: 'It replies with a short explanation and build123d code. Tangent runs the code in a sandbox and shows the solid. If the build fails, the error goes back to the Agent for up to two fixes.',
      },
      {
        title: 'Refine and export',
        body: 'Keep talking to change it. Every result becomes a version you can restore, branch or compare. When it’s right, export it or send it to Bambu Studio.',
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
        body: 'Select faces, edges, vertices or whole parts and add them to the message with ⌘L. Each one becomes a chip inside your sentence, with its position, normal and size sent along.',
      },
      {
        icon: 'versions',
        title: 'Every result is a version',
        body: 'History keeps each version. Restore one, branch from it, or overlay the previous version to compare.',
      },
      {
        icon: 'options',
        title: 'Questions with options',
        body: 'When a choice changes the design, the Agent asks, with two to four options you can pick in one click.',
      },
      {
        icon: 'pin',
        title: 'Annotations that stay',
        body: 'Pin notes (P1, P2…) to the model. They stay until you delete them, and the Agent acts on one when you refer to it.',
      },
      {
        icon: 'measure',
        title: 'Measure and inspect',
        body: 'Measure, section, x-ray, the view cube and focus work on any model, including the examples.',
      },
      {
        icon: 'book',
        title: 'CAD knowledge built in',
        body: 'Every model source gets the same bundled build123d modeling knowledge, whatever you have installed.',
      },
    ],
  },
  sources: {
    kicker: 'Model sources',
    title: 'Use the model you already have',
    body: 'Pick the model, and the options its source supports such as effort, verbosity or thinking, from the menu next to the message box.',
    groups: [
      { title: 'Local CLIs', items: ['Claude Code', 'Codex'] },
      { title: 'Local servers', items: ['Ollama', 'LM Studio'] },
      { title: 'Cloud APIs', items: ['OpenAI', 'Anthropic', 'Gemini', 'OpenRouter', 'Any OpenAI-compatible service'] },
    ],
    trust: [
      { title: 'Keys stay in your Keychain', body: 'API keys are saved in the macOS Keychain and never handed back to the interface.' },
      { title: 'Model code runs sandboxed', body: 'The Agent’s code can import only build123d and math, and runs in a sandbox on your Mac.' },
    ],
  },
  examples: {
    kicker: 'Examples',
    title: 'Open a real model and keep going',
    body: 'Three examples open from the home screen as ordinary models, so you can select, measure and edit them with the Agent.',
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
      { name: 'build123d code', body: 'The Python that builds the model.' },
      { name: 'Project', body: 'The whole project as JSON.' },
      {
        name: 'Open in Bambu Studio',
        body: 'A 3MF with one closed object per printable part. Reference parts stay out and oversized parts are flagged.',
      },
    ],
  },
  final: {
    title: 'Start with a sentence',
    body: 'Tangent runs on macOS, in English and Traditional Chinese, and the Agent replies in the language you choose.',
  },
  footer: {
    language: 'Language',
    note: 'Models are built with build123d.',
  },
};

export type Dict = typeof en;
