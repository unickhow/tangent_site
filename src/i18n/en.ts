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
    sources: 'Model sources',
    get: 'Get Tangent',
    home: 'Tangent home',
  },
  theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
  lang_switch: { label: '中文', aria: '切換為繁體中文', target: 'zh-tw' },
  // Every call to action points at the download in the "Get Tangent" section
  cta: 'Download',
  hero: {
    eyebrow: 'macOS app',
    lede: 'Click any face, edge or hole and say what to change. The Agent knows exactly which part you mean, and every result is a measurable CAD version you can compare or roll back.',
    secondary: 'See how it works',
    // Tangent has no model of its own: say what it needs before anything else
    needs: 'Bring your own AI: works with Claude Code, Codex, Ollama or LM Studio on your Mac.',
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
    body: 'Tangent has no models of its own. Bring in the tools already on your Mac, then pick a model and its options from the menu next to the message box.',
    groups: [
      { title: 'Local CLIs', items: ['Claude Code', 'Codex'] },
      { title: 'Local servers', items: ['Ollama', 'LM Studio'] },
    ],
    trust: [
      { title: 'No keys in Tangent', body: 'Each tool keeps its own sign-in. Tangent stores no keys.' },
      { title: 'Model code runs sandboxed', body: 'The Agent’s code runs in a sandbox on your Mac.' },
    ],
    // Measured from the app (tangent/src-python): the system prompt plus the bundled CAD skill, and
    // the three example models, counted with the GPT tokenizers as a stand-in. Re-measure when
    // server.py's prompts or skills/text-to-cad/cad-modeling.md change.
    usage: {
      title: 'Pointing costs a little more per message. It pays for itself when words miss.',
      body: 'Compared with an agent using the same text-to-cad skill, describing each change in words. Example: a model with about 1,900 tokens of code.',
      stats: [
        { big: '+17%', label: 'per message', sub: 'Tangent adds its own rules and the exact position of what you marked.' },
        { big: '1 in 6', label: 'edits that miss', sub: 'If words land on the wrong part that often, the total is the same. More often, pointing costs less.' },
      ],
      strips: {
        caption: '6 changes, tokens used in total',
        words: 'Words',
        tangent: 'Tangent',
        retry: 'a retry after a miss',
        scenarios: [
          { name: 'Words never miss', retries: 0, verdict: 'Tangent costs 17% more' },
          { name: '1 in 6 misses', retries: 1, verdict: 'About the same' },
          { name: '1 in 2 misses', retries: 3, verdict: 'Tangent costs 22% less' },
        ],
      },
      fine: {
        summary: 'What this assumes',
        items: [
          'Pointing is assumed to hit the right part every time. Nobody has measured how often words miss.',
          'It counts an agent that writes the whole code again after each change, as Tangent does. An agent that edits only the changed lines uses fewer tokens per message.',
          'Marking a face adds about 80 tokens, under 1% of a message. The agent’s own instructions are not counted.',
          'Counted with GPT tokenizers as a stand-in for your model’s own, so expect some difference.',
        ],
      },
    },
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
  get: {
    kicker: 'Get Tangent',
    title: 'Tangent is free',
    body: 'The app costs nothing. Any usage fees from the model source you pick are charged by that provider.',
    download: {
      title: 'Download Tangent',
      button: 'Download for macOS',
      version: 'Version',
      requires: 'Needs macOS {macos} or later on an Apple Silicon Mac. Intel Macs aren’t supported.',
      needs: 'You also need one AI tool already on your Mac: Claude Code, Codex, Ollama or LM Studio. Tangent has no model of its own.',
      first: 'The first launch sets up the geometry engine, so it needs an internet connection. Updates arrive in the app.',
    },
  },
  final: {
    title: 'Point. Then talk.',
    body: 'For Apple Silicon Macs, in English and Traditional Chinese.',
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
      description: 'What Nicraft handles when you use Tangent and its website, what goes to your model source, and the choices you have.',
    },
    terms: {
      title: 'Terms of Use',
      meta: 'Tangent Terms of Use',
      description: 'The terms for using Tangent for macOS: your license to use it, model sources, AI-generated models, your designs, and your rights.',
    },
  },
};

export type Dict = typeof en;
