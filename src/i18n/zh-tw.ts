import type { Dict } from './en';

// 用字依 tangent/docs/copy.md 與 app 的 zh-TW 介面文字（歷史、透視、視角方塊、聚焦、推理強度、回覆詳細度…），
// 台灣慣用說法：程式碼、檔案、伺服器、支援、網路、列印、品質。
export const zhTW: Dict = {
  lang: 'zh-tw',
  htmlLang: 'zh-Hant-TW',
  ogLocale: 'zh_TW',
  path: '/zh-tw/',
  meta: {
    title: 'Tangent — 點選模型部位，直接告訴 Agent 要改什麼',
    description:
      'Tangent 是一款 macOS CAD 應用程式：點選模型上的面、邊或孔，告訴 AI Agent 要改什麼。每次修改都是尺寸精確、能量測的實體，也是能比較、能還原的版本。可匯出 STEP、STL，或直接在 Bambu Studio 開啟。',
    ogAlt: 'Tangent 標誌與「指給它看，說要改什麼。」，旁邊是一顆選取了其中一個面的 3D 橘子模型。',
  },
  skip: '跳到主要內容',
  nav: {
    label: '主選單',
    how: '運作方式',
    features: '功能',
    sources: 'Agent 來源',
    get: '取得 Tangent',
    home: 'Tangent 首頁',
  },
  theme: { label: '外觀', system: '跟隨系統', light: '淺色', dark: '深色' },
  lang_switch: { label: 'EN', aria: 'Switch to English', target: 'en' },
  cta: '下載',
  hero: {
    eyebrow: 'macOS 應用程式',
    lede: '點選任何面、邊或孔，說出要改什麼。Agent 清楚知道你指的是哪裡；每次修改都是能量測、能比較、能還原的 CAD 版本。',
    secondary: '了解運作方式',
    needs: '自備 AI：搭配 Mac 上的 Claude Code、Codex、Ollama 或 LM Studio 使用。',
    scroll: '捲動到下一段',
  },
  intro: {
    kicker: '為什麼是 Tangent',
    title: '生成模型不難，難的是改對地方',
    body: '真正麻煩的是第十次修改：要用文字說清楚是哪一條邊，然後祈禱它改對。在 Tangent 裡，你直接指給它看。每次修改都留下版本，得到的是能量測、能匯出的真實實體。',
  },
  mock: {
    label: 'Tangent 的畫面：左邊是對話，右邊是 Agent 建出的 3D 模型',
    project: '外殼',
    conversation: '對話',
    user1: '90 × 60 × 28 mm 的電子外殼，四角 M3 螺絲孔',
    agent1: '這是兩件式外殼：2.0 mm 厚的殼體，加上用四顆 M3 螺絲固定的上蓋。',
    question: '上蓋要怎麼固定？',
    optionA: '四顆 M3 螺絲',
    optionB: '卡扣',
    user2Before: '把',
    chip: '頂面',
    user2After: '改成 3 mm 厚',
    phases: ['思考', '撰寫說明與程式', '執行 build123d 建模'],
    linesUnit: '行',
    versions: '歷史',
    dims: '90 mm',
    caption: '最後一則訊息裡的「頂面」是在模型上點選的，不是打字描述的。',
  },
  how: {
    kicker: '運作方式',
    title: '從一句話開始，接著用指的',
    steps: [
      {
        title: '描述需求',
        body: '寫下你想做的東西，需要時附上圖片、PDF、文字檔或連結。',
      },
      {
        title: 'Agent 建模',
        body: 'Agent 寫出 build123d 程式碼，Tangent 在 Mac 上的沙盒中執行，模型隨即出現。出錯會自動送回 Agent 修正。',
      },
      {
        title: '點選並修改',
        body: '點選要改的部位，說出要怎麼改。每個結果都是一個版本，可以還原、開分支或比較。',
      },
    ],
  },
  point: {
    kicker: '選取部位',
    title: '指給它看，不用描述',
    body: '在模型上點選面、邊或孔，它就會出現在你的訊息裡。Agent 拿到它的精確位置、法向與尺寸，清楚知道你指的是哪裡，不用再寫一段話說明。',
    without: '不用寫',
    withoutText: '「上蓋右前角那個 M3 孔，不是另外三個……」',
    with: '只要',
    before: '把',
    chip: '內孔圓柱壁',
    after: '的孔徑加大 1.5 mm',
    label: '在外殼上點選其中一個孔，它就加入訊息，而且只有那個孔被加大',
    building: '執行 build123d 建模',
  },
  features: {
    kicker: '功能',
    title: '要做的是零件，不只是一張圖',
    items: [
      {
        icon: 'select',
        title: '直接指給 Agent 看',
        body: '點選面、邊或實體，按 ⌘L 加入對話。它會成為句子的一部分，Agent 清楚知道你指的是哪裡。',
      },
      {
        icon: 'versions',
        title: '每個結果都是一個版本',
        body: '任一版本都能還原、開分支，或與上一版比較。',
      },
      {
        icon: 'options',
        title: '用選項回答問題',
        body: '遇到關鍵選擇，Agent 會提供選項，點一下就能回答。',
      },
      {
        icon: 'pin',
        title: '標註會一直留著',
        body: '在模型上加標註，提到哪一個，Agent 就處理哪一個。',
      },
      {
        icon: 'measure',
        title: '量測與檢視',
        body: '任何模型都能量測、剖面、透視與聚焦。',
      },
      {
        icon: 'book',
        title: '內建 CAD 知識',
        body: '每個 Agent 來源都拿到同一份內建建模知識。',
      },
    ],
  },
  reference: {
    kicker: '參考圖片',
    title: '從一張圖開始',
    body: '附上圖片得到第一版，接著一樣用指的修改。SVG 還會連同精確路徑一起送出。',
    label: 'Tangent 專案畫面：對話中附上 app 圖示，右邊是照著它建出的立體橘子',
    project: 'Tangent 圖示模型',
    file: 'app-icon-light.png',
    user: '幫我製作這個圖形的模型，長寬高先抓7cm立方',
    agent: '我做了一顆多面的橘子，加上短短的蒂頭和兩片有稜角的葉子。',
    note: 'v2–v6 在對話中修改：面片不規則、輪廓更圓、一體成形列印、加強蒂頭與葉子',
    viewerLabel: '橘子的 3D 模型。拖曳或使用方向鍵旋轉。',
    viewerHint: '拖曳旋轉',
    replay: '重播',
    replayLabel: '重播建模過程',
  },
  sources: {
    kicker: 'Agent 來源',
    title: '用你手邊已經有的模型',
    body: 'Tangent 沒有自己的模型。把 Mac 上已有的工具帶進來，再從輸入框旁的選單切換模型與選項。',
    groups: [
      { title: '本機 CLI', items: ['Claude Code', 'Codex'] },
      { title: '本機伺服器', items: ['Ollama', 'LM Studio'] },
    ],
    trust: [
      { title: 'Tangent 不存金鑰', body: '各工具保管自己的登入，Tangent 不儲存任何金鑰。' },
      { title: '程式碼在沙盒中執行', body: 'Agent 的程式碼在你 Mac 上的沙盒中執行。' },
    ],
    usage: {
      title: '指定位置每則訊息多花一點，文字描述指錯時就賺回來。',
      body: '對照的是同樣用 text-to-cad 技能、每次用文字描述修改的 Agent。範例：一個約 1,900 tokens 程式碼的模型。',
      stats: [
        { big: '+17%', label: '每則訊息', sub: 'Tangent 多了自己的規則，以及你標記部位的精確位置。' },
        { big: '6 次錯 1 次', label: '文字描述指錯', sub: '文字描述指錯的頻率到這裡，總量一樣；比這更常指錯，指定位置反而省。' },
      ],
      strips: {
        caption: '6 次修改，總共用掉的 tokens',
        words: '文字',
        tangent: 'Tangent',
        retry: '指錯後重做的一輪',
        scenarios: [
          { name: '文字都沒指錯', retries: 0, verdict: 'Tangent 多 17%' },
          { name: '6 次錯 1 次', retries: 1, verdict: '差不多' },
          { name: '2 次錯 1 次', retries: 3, verdict: 'Tangent 少 22%' },
        ],
      },
      fine: {
        summary: '這個比較的前提',
        items: [
          '假設指定位置每次都指對。沒有人量過文字描述多常指錯。',
          '算的是每次修改後都把整份程式碼重寫一遍的 Agent，和 Tangent 一樣。只改有變動那幾行的 Agent，每則訊息用的 token 更少。',
          '標記一個面約多 80 tokens，不到一則訊息的 1%。Agent 自己的系統指示沒有計入。',
          '用 GPT 分詞器代替你的模型自己的分詞器計算，實際會有些出入。',
        ],
      },
    },
  },
  export: {
    kicker: '匯出',
    title: '送去切片，或交給加工廠',
    items: [
      { name: 'STEP', body: '給 CAD 軟體與加工廠。' },
      { name: 'STL', body: '給任何切片軟體。' },
      { name: 'build123d 程式碼', body: '模型背後的 Python 程式碼。' },
      { name: '專案', body: '整個專案存成 JSON。' },
      {
        name: '在 Bambu Studio 開啟',
        body: '每個可列印零件各成一個物件，超出列印範圍會標示。',
      },
    ],
  },
  get: {
    kicker: '取得 Tangent',
    title: 'Tangent 免費使用',
    body: 'App 本身不收費；你所選模型來源的用量費用，由該服務商另行收取。',
    download: {
      title: '下載 Tangent',
      button: '下載 macOS 版',
      version: '版本',
      requires: '需要 macOS {macos} 以上、Apple 晶片的 Mac。不支援 Intel Mac。',
      needs: '還需要 Mac 上已有一個 AI 工具：Claude Code、Codex、Ollama 或 LM Studio。Tangent 本身沒有模型。',
      first: '首次開啟會準備幾何引擎，需要連上網路。之後的更新會在 App 內送達。',
    },
  },
  final: {
    title: '先指，再說',
    body: 'macOS 版（Apple 晶片），支援繁體中文與英文。',
  },
  footer: {
    tagline: '指著模型，邊聊邊改。',
    label: '法律資訊與聯絡方式',
    contact: '聯絡我們：',
    more: { label: 'Nicraft 的其他產品', items: [{ name: 'Bangs', url: 'https://bangs.nicraft.co/zh-tw/', icon: '/products/bangs.png', blurb: '讓瀏海變成順手的控制台。' }] },
    rights: '保留所有權利。',
    trademark:
      'Tangent 名稱及其標誌為 Nicraft 的商標。Apple、Mac 與 macOS 為 Apple Inc. 的商標。其他產品名稱為其各自權利人的商標。',
  },
  legal: {
    updated: '最後更新：',
    back: '回到 Tangent',
    privacy: {
      title: '隱私權政策',
      meta: 'Tangent 隱私權政策',
      description: '使用 Tangent 與本網站時，Nicraft 如何處理您的資料、哪些內容會送往您的模型來源，以及您的選擇。',
    },
    terms: {
      title: '使用條款',
      meta: 'Tangent 使用條款',
      description: 'Tangent macOS App 的使用條款：授權、模型來源、AI 產生的模型、您的設計，以及您的權利。',
    },
  },
};
