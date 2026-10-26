import type { Dict } from './en';

// 用字依 tangent/docs/copy.md 與 app 的 zh-TW 介面文字（歷史、透視、視角方塊、聚焦、推理強度、回覆詳細度…），
// 台灣慣用說法：程式碼、檔案、伺服器、支援、網路、列印、品質。
export const zhTW: Dict = {
  lang: 'zh-tw',
  htmlLang: 'zh-Hant-TW',
  ogLocale: 'zh_TW',
  path: '/zh-tw/',
  meta: {
    title: 'Tangent — 描述零件，得到真正的 CAD 模型',
    description:
      'Tangent 是一款 macOS 應用程式：在對話中描述零件，AI Agent 就會建出尺寸精確、可以量測的實體模型。用對話修改，再匯出 STEP、STL，或直接在 Bambu Studio 開啟。',
    ogAlt: 'Tangent 的橘子圖示，旁邊寫著：描述零件，得到真正的 CAD 模型。',
  },
  skip: '跳到主要內容',
  nav: {
    label: '主選單',
    how: '運作方式',
    features: '功能',
    examples: '範例',
    sources: 'Agent 來源',
    home: 'Tangent 首頁',
  },
  lang_switch: { label: 'EN', aria: 'Switch to English', target: 'en' },
  download: '下載 macOS 版',
  hero: {
    eyebrow: 'macOS 應用程式',
    lede: '描述一個零件，Tangent 會建出有真實尺寸、能量測、能匯出 STEP 的實體模型。',
    secondary: '了解運作方式',
    scroll: '捲動到下一段',
  },
  intro: {
    kicker: '為什麼是 Tangent',
    title: '從一句話，到一個能量測的零件',
    body: '做個支架不該先學一套 CAD 軟體，沒有真實尺寸的外形也做不成零件。說出需求，就得到尺寸精確、能量測、能修改的實體模型。',
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
    versions: '歷史',
    dims: '90 mm',
  },
  how: {
    kicker: '運作方式',
    title: '三個步驟，一段對話',
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
        title: '修改與匯出',
        body: '繼續對話就能修改，每個結果都是一個版本。滿意了就匯出。',
      },
    ],
  },
  features: {
    kicker: '功能',
    title: '要做的是零件，不只是一張圖',
    items: [
      {
        icon: 'select',
        title: '直接指給 Agent 看',
        body: '選取面、邊或實體，按 ⌘L 加入對話，部位會連同位置與尺寸成為句中的標籤。',
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
    body: '附上圖片，說明你要什麼。SVG 還會連同精確路徑一起送出。',
    label: 'Tangent 專案畫面：對話中附上 app 圖示，右邊是照著它建出的立體橘子',
    project: 'Tangent 圖示模型',
    file: 'app-icon-light.png',
    user: '幫我製作這個圖形的模型，長寬高先抓7cm立方',
    agent: '我做了一顆多面的橘子，加上短短的蒂頭和兩片有稜角的葉子。',
    note: 'v2–v6 在對話中修改：面片不規則、輪廓更圓、一體成形列印、加強蒂頭與葉子',
    viewerLabel: '橘子的 3D 模型。拖曳或使用方向鍵旋轉。',
    viewerHint: '拖曳旋轉',
  },
  sources: {
    kicker: 'Agent 來源',
    title: '用你手邊已經有的模型',
    body: '在輸入框旁的選單切換模型與選項。',
    groups: [
      { title: '本機 CLI', items: ['Claude Code', 'Codex'] },
      { title: '本機伺服器', items: ['Ollama', 'LM Studio'] },
      { title: '雲端 API', items: ['OpenAI', 'Anthropic', 'Gemini', 'OpenRouter', '任何 OpenAI 相容服務'] },
    ],
    trust: [
      { title: '金鑰存在鑰匙圈', body: 'API 金鑰存放在 macOS 鑰匙圈。' },
      { title: '程式碼在沙盒中執行', body: 'Agent 的程式碼在你 Mac 上的沙盒中執行。' },
    ],
  },
  examples: {
    kicker: '範例',
    title: '打開真正的模型，接著改下去',
    body: '從首頁打開，就能和 Agent 一起修改。',
    items: [
      { id: 'pi', title: '樹莓派 5 散熱外殼', detail: 'CNC 鋁合金三件式，含主機板參考件' },
      { id: 'fpv', title: '四軸碳纖機架', detail: '5 吋、220 mm 軸距，含馬達與飛控' },
      { id: 'gear', title: '行星齒輪減速機', detail: '4:1、三行星輪、漸開線齒形' },
    ],
    figure: '線稿：',
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
  final: {
    title: '從一句話開始',
    body: 'macOS 版，支援繁體中文與英文。',
  },
  footer: {
    language: '語言',
  },
};
