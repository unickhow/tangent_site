import type { Dict } from './en';

// 用字依 tangent/docs/copy.md：部位、加入對話、版本、還原、開分支、比較、量測、剖面、標註、匯出、Agent 來源。
export const zhTW: Dict = {
  lang: 'zh-tw',
  htmlLang: 'zh-Hant-TW',
  ogLocale: 'zh_TW',
  path: '/zh-tw/',
  meta: {
    title: 'Tangent — 描述零件，得到真正的 CAD 模型',
    description:
      'Tangent 是一款 macOS 應用程式：在對話中描述零件，AI Agent 就會用 build123d 建出有真實尺寸、能量測的實體模型。用對話修改，再匯出 STEP、STL，或直接在 Bambu Studio 開啟。',
    ogAlt: 'Tangent 的橘子圖示，旁邊寫著：描述零件，得到真正的 CAD 模型。',
  },
  skip: '跳到主要內容',
  nav: {
    label: '主選單',
    how: '運作方式',
    features: '功能',
    sources: 'Agent 來源',
    export: '匯出',
    home: 'Tangent 首頁',
  },
  lang_switch: { label: 'EN', aria: 'Switch to English', target: 'en' },
  download: '下載 macOS 版',
  hero: {
    eyebrow: 'macOS 應用程式',
    lede: '描述一個零件，Tangent 會建出有真實尺寸、能量測、能匯出 STEP 的實體模型。',
    secondary: '看看怎麼運作',
    scroll: '捲到下一段',
  },
  intro: {
    kicker: '為什麼是 Tangent',
    title: '從一句話，到一個能量測的零件',
    body: '就算只是一個支架，通常也得先學會一套 CAD 軟體；而沒有真實尺寸的生成形狀，也做不出實際的零件。在 Tangent 裡，你說出需求，Agent 寫出 build123d 程式碼，你得到一個能檢查、能修改、能送去列印或加工的實體模型。',
  },
  mock: {
    label: 'Tangent 的畫面：左邊是對話，右邊是 Agent 建出的 3D 模型',
    project: '外殼',
    conversation: '對話',
    user1: '90 × 60 × 28 mm 的電子外殼，四個角留 M3 螺絲孔',
    agent1: '這是兩件式外殼：2.0 mm 厚的殼體，加上用四顆 M3 螺絲固定的上蓋。',
    question: '上蓋要怎麼固定？',
    optionA: '四顆 M3 螺絲',
    optionB: '卡扣',
    user2Before: '把',
    chip: '頂面',
    user2After: '改成 3 mm 厚',
    building: '建模中…',
    versions: '版本',
    dims: '90 mm',
  },
  how: {
    kicker: '運作方式',
    title: '三個步驟，一段對話',
    steps: [
      {
        title: '描述需求',
        body: '寫下你要的東西，也可以附上圖片、PDF、文字檔或連結。SVG 會同時以圖片和原始碼送出，Agent 能照著精確的路徑建模。',
      },
      {
        title: 'Agent 建模',
        body: 'Agent 回覆簡短說明和 build123d 程式碼，Tangent 在沙盒中執行，顯示出實體模型。建模失敗時，錯誤會自動送回 Agent，最多修正兩次。',
      },
      {
        title: '修改與匯出',
        body: '繼續對話就能修改。每個結果都是一個版本，可以還原、開分支或比較。滿意了，就匯出或送到 Bambu Studio。',
      },
    ],
  },
  features: {
    kicker: '功能',
    title: '為零件而做，不只是圖片',
    items: [
      {
        icon: 'select',
        title: '直接指著幾何',
        body: '選取面、邊、點或整個實體，按 ⌘L 加入對話。每個部位都會變成句子裡的標籤，連同位置、法向與尺寸一起送給 Agent。',
      },
      {
        icon: 'versions',
        title: '每個結果都是版本',
        body: '版本紀錄保留每一版。可以還原、從任一版開分支，或疊上前一版比較。',
      },
      {
        icon: 'options',
        title: '用選項回答問題',
        body: '遇到會影響設計的選擇，Agent 會提出問題和二到四個選項，點一下就能回答。',
      },
      {
        icon: 'pin',
        title: '標註會一直留著',
        body: '在模型上釘下標註（P1、P2…），刪除前都會留著；你提到哪一個，Agent 就處理哪一個。',
      },
      {
        icon: 'measure',
        title: '量測與檢視',
        body: '量測、剖面、透視、視角方塊和聚焦，任何模型都能用，範例也一樣。',
      },
      {
        icon: 'book',
        title: '內建 CAD 知識',
        body: '不論你裝了什麼，每個 Agent 來源都會拿到同一份內建的 build123d 建模知識。',
      },
    ],
  },
  sources: {
    kicker: 'Agent 來源',
    title: '用你手上已經有的模型',
    body: '在輸入框旁的選單挑選模型，以及該來源支援的選項，例如推理強度、詳細程度或思考模式。',
    groups: [
      { title: '本機 CLI', items: ['Claude Code', 'Codex'] },
      { title: '本機伺服器', items: ['Ollama', 'LM Studio'] },
      { title: '雲端 API', items: ['OpenAI', 'Anthropic', 'Gemini', 'OpenRouter', '任何相容 OpenAI 的服務'] },
    ],
    trust: [
      { title: '金鑰留在鑰匙圈', body: 'API 金鑰存在 macOS 鑰匙圈裡，不會再交回介面。' },
      { title: '模型程式碼在沙盒執行', body: 'Agent 的程式碼只能匯入 build123d 與 math，並在你 Mac 上的沙盒中執行。' },
    ],
  },
  examples: {
    kicker: '範例',
    title: '打開真正的模型，接著改下去',
    body: '首頁有三個範例，打開後就是一般的模型，能選取、量測，也能和 Agent 一起改。',
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
      { name: 'build123d 程式碼', body: '建出模型的 Python 程式碼。' },
      { name: '專案', body: '整個專案存成 JSON。' },
      {
        name: '在 Bambu Studio 開啟',
        body: '輸出 3MF，每個可列印的實體各是一個封閉物件；參考件不列入，超出尺寸的實體會標示出來。',
      },
    ],
  },
  final: {
    title: '從一句話開始',
    body: 'Tangent 在 macOS 上執行，支援繁體中文與英文，Agent 會用你選的語言回覆。',
  },
  footer: {
    language: '語言',
    note: '模型以 build123d 建構。',
  },
};
