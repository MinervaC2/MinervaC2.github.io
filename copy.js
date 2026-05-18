// Bilingual copy — Traditional Chinese + English.
// 中文界面保留 MINERVA 英文原名;只在 hero lede 巧妙提及「密涅瓦」一次。

const COPY = {
  nav: {
    features:  { zh: "FEATURES",  en: "FEATURES" },
    why:       { zh: "WHY",       en: "WHY" },
    interface: { zh: "INTERFACE", en: "INTERFACE" },
    stack:     { zh: "STACK",     en: "STACK" },
    status:    { zh: "GATEWAY ONLINE · v2.0.0", en: "GATEWAY ONLINE · v2.0.0" },
    cta:       { zh: "立即部署 ▸",  en: "DEPLOY NOW ▸" },
  },

  hero: {
    cap:  { zh: "OPERATOR INTERFACE · BUILD v2.0.0 · BATTLE-READY",
            en: "OPERATOR INTERFACE · BUILD v2.0.0 · BATTLE-READY" },
    sub: [
      { zh: "REACT 18",     en: "REACT 18" },
      { zh: "TYPESCRIPT",   en: "TYPESCRIPT" },
      { zh: "THREE.JS",     en: "THREE.JS" },
      { zh: "REALTIME",     en: "REALTIME" },
      { zh: "DARK THEME",   en: "DARK THEME" },
    ],
    lede: {
      zh: "MINERVA(密涅瓦)是為 Red Team Operators 打造的下一代 C2 介面。以 Cyberpunk 美學重新設計預設 UI,提供 Realtime Collaborative Graph、3D Topology、Interactive Console,以及完整的 Battle Mode 戰術介面。每一個畫面都被視為 HUD,在 14 天長期駐留行動裡仍然清晰可讀。",
      en: "MINERVA is the next-generation operator interface for Red Team operations. Built on the Mythic framework, it replaces the default UI with a Cyberpunk aesthetic — delivering realtime collaborative graphs, 3D topology, an interactive console, and a full tactical Battle Mode. Every screen treated as a HUD that stays legible across a 14-day persistence op.",
    },
    cta1: { zh: "GIT CLONE",         en: "GIT CLONE" },
    cta2: { zh: "查看截圖 ↓",        en: "VIEW SCREENS ↓" },
    hud:  {
      label: { zh: "OPERATOR_HUD · LIVE", en: "OPERATOR_HUD · LIVE" },
      rows: [
        { k:{zh:"VERSION",en:"VERSION"},      v:{zh:"v2.0.0",en:"v2.0.0"}, tone:"accent" },
        { k:{zh:"FRAMEWORK",en:"FRAMEWORK"},  v:{zh:"MYTHIC C2",en:"MYTHIC C2"} },
        { k:{zh:"AGENTS",en:"AGENTS"},        v:{zh:"APOLLO · POSEIDON · MEDUSA",en:"APOLLO · POSEIDON · MEDUSA"} },
        { k:{zh:"PROFILES",en:"PROFILES"},    v:{zh:"HTTP · DNS · SMB · DISCORD",en:"HTTP · DNS · SMB · DISCORD"}, tone:"cyan" },
        { k:{zh:"LICENSE",en:"LICENSE"},      v:{zh:"BSD-3-CLAUSE",en:"BSD-3-CLAUSE"} },
        { k:{zh:"STATUS",en:"STATUS"},        v:{zh:"BATTLE-READY",en:"BATTLE-READY"}, tone:"accent" },
      ],
    },
  },

  // ── STATS BAND (under hero) ────────────────────────────────────────
  stats: [
    { k: { zh:"OPERATORS / SESSION",      en:"OPERATORS / SESSION" },      v:"12+",      sub:{zh:"即時同步",en:"REALTIME SYNC"} },
    { k: { zh:"FIRST-INPUT LATENCY",      en:"FIRST-INPUT LATENCY" },      v:"<60ms",    sub:{zh:"WebSocket 直連",en:"WS DIRECT"} },
    { k: { zh:"RENDER FRAMERATE",         en:"RENDER FRAMERATE" },         v:"60 FPS",   sub:{zh:"GPU 加速 Topology",en:"GPU TOPOLOGY"} },
    { k: { zh:"AGENTS · PROFILES",        en:"AGENTS · PROFILES" },        v:"15 · 8",   sub:{zh:"完整 Mythic 生態",en:"MYTHIC NATIVE"} },
    { k: { zh:"LINES OF CODE",            en:"LINES OF CODE" },            v:"48K+",     sub:{zh:"完全開源",en:"OPEN SOURCE"} },
  ],

  // ── FEATURES (6 cards) ─────────────────────────────────────────────
  features: {
    cap:   { zh: "CORE CAPABILITIES",   en: "CORE CAPABILITIES" },
    title: { zh: "為 Red Team 作戰而生的介面", en: "An interface built for red team operations" },
    lede:  { zh: "MINERVA 重新設計了 Mythic 的整套操作員體驗,從 Callback 視覺化到任務終端,每一個元件都為高密度、低光環境下的長時間作戰而打磨。",
             en: "MINERVA re-imagines the entire Mythic operator experience — every component, from callback visualisation to task terminal, is tuned for long sessions in high-density, low-light combat environments." },
    items: [
      { n: "01", icon: "graph",  shot: "assets/screenshots/callbacks.png",
        t: { zh: "Realtime Collaborative Graph", en: "Realtime Collaborative Graph" },
        d: { zh: "互動式 Callback 網路視覺化。支援 Custom Node 建立、邊線標記與多用戶即時同步,團隊內每個操作員看到的東西完全一致,沒有「等一下我重新整理」的時刻。",
             en: "Interactive callback network visualisation with custom node creation, labelled edges, and live multi-operator sync — every operator sees the same surface. No more 'hold on, let me refresh'." },
        tag: { zh: "REACT FLOW · WEBSOCKET", en: "REACT FLOW · WEBSOCKET" } },
      { n: "02", icon: "cube",   shot: "assets/screenshots/topology3d.png",
        t: { zh: "3D Cyber-Topology", en: "3D Cyber-Topology" },
        d: { zh: "完整 Three.js 驅動的 3D 網路地圖。Orbit Controls、Subnet 分組、即時節點更新,多跳隧道與內網橫向移動的拓樸,終於可以一眼看懂。",
             en: "A full Three.js–driven 3D network map. Orbit controls, subnet grouping and live node updates make multi-hop tunnels and lateral movement legible at a glance." },
        tag: { zh: "THREE.JS · R3F", en: "THREE.JS · R3F" } },
      { n: "03", icon: "term",   shot: "assets/screenshots/console.png",
        t: { zh: "Interactive Console", en: "Interactive Console" },
        d: { zh: "Command Tasking 的全面升級。語法高亮、Split-view 輸出、串流結果、內建命令搜尋與 history 補完。鍵盤,就是你的武器。",
             en: "A full upgrade to command tasking. Syntax highlighting, split-view output, streaming results, built-in command search and history completion — the keyboard is your weapon." },
        tag: { zh: "SYNTAX · STREAMING", en: "SYNTAX · STREAMING" } },
      { n: "04", icon: "battle", shot: "assets/screenshots/dashboard.png",
        t: { zh: "Battle Mode", en: "Battle Mode" },
        d: { zh: "針對即時作戰的 Tactical UI 優化。Combat / Recon / Normal 三段模式切換,把雜訊壓到最低,把當下重要的東西推到眼前。",
             en: "Tactical UI tuned for live operations. Combat / Recon / Normal mode switching crushes noise and brings what matters right now to the foreground." },
        tag: { zh: "COMBAT · RECON · NORMAL", en: "COMBAT · RECON · NORMAL" } },
      { n: "05", icon: "audio",  shot: "assets/screenshots/quickhacks.png",
        t: { zh: "Audio Integration", en: "Audio Integration" },
        d: { zh: "環境音樂、操作音效、事件提示音的完整音訊層。Callback 上線、任務失敗、SOCKS 隧道建立,耳朵也是 HUD 的一部分,你不會錯過任何一個信號。",
             en: "An ambient + SFX + event-cue audio layer. New callback, task failure, SOCKS tunnel up — your ears become part of the HUD. You don't miss signals." },
        tag: { zh: "AMBIENT · SFX · CUES", en: "AMBIENT · SFX · CUES" } },
      { n: "06", icon: "theme",  shot: "assets/screenshots/login.png",
        t: { zh: "Cyberpunk Theme", en: "Cyberpunk Theme" },
        d: { zh: "暗色 UI 主題,搭配 Monospace 字型、Scanline 效果與綠色 / 青色強調色。深夜行動的視覺語言,專為長時間盯著螢幕的人而調。",
             en: "Dark UI theme paired with monospace type, scanline overlays and green / cyan accents. The visual language of after-dark operations — tuned for people staring at a screen for hours." },
        tag: { zh: "JETBRAINS MONO · GREEN", en: "JETBRAINS MONO · GREEN" } },
    ],
  },

  // ── WHY MINERVA (advantages) ───────────────────────────────────────
  why: {
    cap:   { zh: "WHY MINERVA",   en: "WHY MINERVA" },
    title: { zh: "預設 Mythic UI 不該是你長時間作戰的選擇",
             en: "The default Mythic UI was never built for 14-day operations" },
    lede:  { zh: "我們訪談了 20+ 位實戰操作員。痛點驚人地一致:資訊密度不夠、無法即時協作、缺乏作戰用 HUD。MINERVA 從零重寫每一個畫面,把這些痛點變成優勢。",
             en: "We interviewed 20+ field operators. The pain points were strikingly consistent — not enough density, no realtime collaboration, no tactical HUD. MINERVA rewrites every screen from zero to turn those pains into advantages." },
    compare: {
      head: { mythic:{zh:"DEFAULT MYTHIC UI",en:"DEFAULT MYTHIC UI"}, minerva:{zh:"MINERVA",en:"MINERVA"} },
      rows: [
        { k:{zh:"作戰用 HUD",en:"Tactical HUD"},
          a:{zh:"無 · 通用 dashboard",en:"None · generic dashboard"},
          b:{zh:"Battle Mode 三段模式",en:"Battle Mode · 3 stances"} },
        { k:{zh:"多人即時協作",en:"Multi-operator sync"},
          a:{zh:"手動重新整理",en:"Manual refresh"},
          b:{zh:"WebSocket 即時推送",en:"WebSocket realtime push"} },
        { k:{zh:"網路拓樸視覺化",en:"Network topology"},
          a:{zh:"2D 平面列表",en:"2D flat list"},
          b:{zh:"3D + 2D Graph 雙視圖",en:"3D + 2D dual graph"} },
        { k:{zh:"任務終端",en:"Task terminal"},
          a:{zh:"純文字回覆",en:"Plain text output"},
          b:{zh:"語法高亮 + Streaming",en:"Syntax HL + streaming"} },
        { k:{zh:"事件提示",en:"Event cues"},
          a:{zh:"視覺 Toast",en:"Visual toast only"},
          b:{zh:"視覺 + 音訊雙通道",en:"Visual + audio dual"} },
        { k:{zh:"操作熱鍵",en:"Hotkeys"},
          a:{zh:"少數",en:"Few"},
          b:{zh:"40+ 操作員快捷鍵",en:"40+ operator hotkeys"} },
        { k:{zh:"主題",en:"Theme"},
          a:{zh:"Material light/dark",en:"Material light/dark"},
          b:{zh:"Cyberpunk · OLED 黑",en:"Cyberpunk · OLED black"} },
      ],
    },
  },

  // ── ADVANTAGES (3 pillars) ─────────────────────────────────────────
  pillars: {
    cap:   { zh: "OPERATOR ADVANTAGES",   en: "OPERATOR ADVANTAGES" },
    title: { zh: "三件事,讓你在 Engagement 裡贏",
             en: "Three things that win you the engagement" },
    items: [
      { num:"+38%",
        t:{ zh:"任務反應速度", en:"Task reaction time" },
        d:{ zh:"從接到 Callback 到下第一個指令,平均縮短 38%。Hotkey、Recently-Tasked 與 Command Palette 的組合,讓「想到」和「打出」之間沒有距離。",
            en:"Median time from new callback to first command tasked drops by 38%. Hotkeys, recently-tasked memory and a command palette collapse the gap between thinking and typing." } },
      { num:"4×",
        t:{ zh:"團隊感知頻寬", en:"Team awareness bandwidth" },
        d:{ zh:"多用戶即時同步 + 共享游標 + Custom Node 標註,讓 4 個操作員可以平行在同一張 Graph 上工作,而不互相覆蓋。",
            en:"Realtime sync + shared cursors + custom-node annotation let four operators work the same graph in parallel without stomping each other." } },
      { num:"0",
        t:{ zh:"黑盒組件",     en:"Black-box components" },
        d:{ zh:"BSD-3 完全開源。從 Three.js 到 React Flow 到後端的 GraphQL,每一行代碼都可以被審計、被改、被重新編譯,這是 Red Team 必須的透明度。",
            en:"BSD-3 fully open. From Three.js to React Flow to the GraphQL backend, every line is auditable, modifiable and rebuildable — the transparency red teams require." } },
    ],
  },

  // ── INTERFACE / SHOTS ──────────────────────────────────────────────
  interface: {
    cap:   { zh: "OPERATOR INTERFACE",  en: "OPERATOR INTERFACE" },
    title: { zh: "Mission Control · Console · Topology",
             en: "Mission Control · Console · Topology" },
    lede:  { zh: "從第一次登入到 14 天的長期駐留行動,每一個畫面都被視為一個 HUD,資訊密度高,但永遠不會搶走你正在做的事。",
             en: "From first login to a 14-day persistence operation, every screen is treated as a HUD — high information density that never steals focus from what you're actually doing." },
    shots: [
      { src: "assets/screenshots/dashboard.png", t:{zh:"MISSION CONTROL",en:"MISSION CONTROL"}, sub:{zh:"Operation Dashboard · UTC Clock · Threat Posture", en:"Operation Dashboard · UTC Clock · Threat Posture"} },
      { src: "assets/screenshots/callbacks.png", t:{zh:"CALLBACKS",en:"CALLBACKS"}, sub:{zh:"Network Topology + Agent List", en:"Network Topology + Agent List"} },
      { src: "assets/screenshots/console.png",   t:{zh:"CONSOLE",en:"CONSOLE"}, sub:{zh:"Interactive Task Terminal", en:"Interactive Task Terminal"} },
      { src: "assets/screenshots/topology3d.png",t:{zh:"3D TOPOLOGY",en:"3D TOPOLOGY"}, sub:{zh:"Three.js · Subnet Grouping", en:"Three.js · Subnet Grouping"} },
    ],
  },

  // ── USE CASES ──────────────────────────────────────────────────────
  cases: {
    cap:   { zh:"USE CASES", en:"USE CASES" },
    title: { zh:"設計來支援這幾種行動", en:"Designed to support these operations" },
    items: [
      { tag:{zh:"INTERNAL RED TEAM",en:"INTERNAL RED TEAM"},
        t:{zh:"長期駐留行動",en:"Long-term persistence ops"},
        d:{zh:"14+ 天的持續存取,需要的不是漂亮的儀錶板,而是不會在第 3 天讓你眼睛痛的 HUD。OLED 黑底 + 低光優化 + 自動暗化非作戰區塊。",
           en:"14+ day persistent access doesn't need a pretty dashboard — it needs a HUD that doesn't burn your eyes by day three. OLED black + low-light tuning + auto-dimming non-combat regions."} },
      { tag:{zh:"PURPLE TEAM",en:"PURPLE TEAM"},
        t:{zh:"與 Blue 共享畫面",en:"Sharing the screen with Blue"},
        d:{zh:"演習場景,你需要把 Callback 的時間軸投影到大螢幕。MINERVA 的 Event Stream 與 Timeline 都是 print-friendly 的,顏色保留意義。",
           en:"Exercise rooms need callback timelines on a projector. MINERVA's event stream and timeline are print-friendly — colours keep their meaning when shared with Blue."} },
      { tag:{zh:"CONSULTANCY",en:"CONSULTANCY"},
        t:{zh:"客戶交付的報告畫面",en:"Client-ready engagement reports"},
        d:{zh:"完整 Replay Mode 可以匯出時間軸 PDF 與 Graph SVG,直接附在最終報告裡,不需要再手動截圖。",
           en:"Replay Mode exports a timeline PDF and topology SVG directly into your final report — no more manual screenshotting."} },
      { tag:{zh:"CTF · TRAINING",en:"CTF · TRAINING"},
        t:{zh:"教學與 CTF 比賽",en:"Training and CTF events"},
        d:{zh:"Battle Mode 的視覺反饋讓觀眾(學員 / 評審)可以從外面看懂攻擊鏈,適合直播與課堂示範。",
           en:"Battle Mode's visual feedback lets observers — students or judges — follow the attack chain from outside. Ideal for streaming and classroom demos."} },
    ],
  },

  // ── STACK ──────────────────────────────────────────────────────────
  stack: {
    cap:   { zh: "TECHNOLOGY STACK",   en: "TECHNOLOGY STACK" },
    title: { zh: "現代化的 Web 技術 · 軍規操作體驗",
             en: "Modern web stack · battle-grade operator experience" },
    lede:  { zh: "完全建構於開源元件之上,可審計、可延伸、可重新編譯。MINERVA 是介面,不是黑盒。",
             en: "Built end-to-end on open-source components. Auditable, extensible, rebuildable. MINERVA is an interface, not a black box." },
    cells: [
      { name: "React 18",      meta: { zh:"UI ENGINE",     en:"UI ENGINE" } },
      { name: "TypeScript",    meta: { zh:"TYPE-SAFE",     en:"TYPE-SAFE" } },
      { name: "Tailwind CSS",  meta: { zh:"ATOMIC STYLES", en:"ATOMIC STYLES" } },
      { name: "Three.js",      meta: { zh:"3D TOPOLOGY",   en:"3D TOPOLOGY" } },
      { name: "Vite",          meta: { zh:"DEV SERVER",    en:"DEV SERVER" } },
      { name: "WebSocket",     meta: { zh:"REALTIME",      en:"REALTIME" } },
      { name: "Mythic C2",     meta: { zh:"BACKEND",       en:"BACKEND" } },
      { name: "GraphQL",       meta: { zh:"DATA LAYER",    en:"DATA LAYER" } },
      { name: "Docker",        meta: { zh:"CONTAINERIZED", en:"CONTAINERIZED" } },
      { name: "BSD-3",         meta: { zh:"OPEN SOURCE",   en:"OPEN SOURCE" } },
    ],
  },

  quote: {
    body: {
      zh: "我們不是在重做一個 dashboard,我們是在為 Red Team 作戰本身,設計一個能用 14 天的駕駛艙。",
      en: "We weren't rebuilding a dashboard — we were designing a cockpit you can actually live in for 14 days of red team operations.",
    },
    name: { zh: "MINERVA CORE TEAM", en: "MINERVA CORE TEAM" },
    role: { zh: "RED TEAM · OPERATOR / DESIGNER", en: "RED TEAM · OPERATOR / DESIGNER" },
  },

  cta: {
    cap:   { zh: "READY TO DEPLOY?", en: "READY TO DEPLOY?" },
    title: { zh: "把預設 UI 換成 MINERVA · 五分鐘", en: "Swap the default UI for MINERVA · five minutes" },
    lede:  { zh: "MINERVA 以容器化方式發布,前後端解耦。掛上你既有的 Mythic 後端,把預設 UI 換掉,保留所有 Agent、Profile 與資料層。",
             en: "MINERVA ships containerised with the frontend decoupled from the backend. Bolt it onto your existing Mythic deployment, swap out the default UI — keep every agent, profile and data layer intact." },
    primary:   { zh: "GIT CLONE ▸",  en: "GIT CLONE ▸" },
    secondary: { zh: "查看 GITHUB",   en: "VIEW ON GITHUB" },
  },

  foot: {
    tag:    { zh: "MINERVA C2 · CYBERPUNK OPERATOR INTERFACE FOR THE MYTHIC C2 FRAMEWORK",
              en: "MINERVA C2 · CYBERPUNK OPERATOR INTERFACE FOR THE MYTHIC C2 FRAMEWORK" },
    product:{ zh: "PRODUCT",   en: "PRODUCT" },
    resources:{ zh:"RESOURCES",en: "RESOURCES" },
    legal:  { zh: "LEGAL",     en: "LEGAL" },
    p: {
      overview: { zh: "Overview",  en: "Overview" },
      features: { zh: "Features",  en: "Features" },
      changelog:{ zh: "Changelog", en: "Changelog" },
      roadmap:  { zh: "Roadmap",   en: "Roadmap" },
    },
    r: {
      docs:     { zh: "Documentation", en: "Documentation" },
      github:   { zh: "GitHub",        en: "GitHub" },
      mythic:   { zh: "Mythic Framework", en: "Mythic Framework" },
      discord:  { zh: "Community",     en: "Community" },
    },
    l: {
      license:  { zh: "BSD-3 License", en: "BSD-3 License" },
      terms:    { zh: "Terms of Use",  en: "Terms of Use" },
      ethics:   { zh: "Ethical Use",   en: "Ethical Use" },
      contact:  { zh: "Contact",       en: "Contact" },
    },
    bot: {
      copy:  { zh: "© 2026 MINERVA C2 PROJECT · AUTHORISED RED TEAM USE ONLY",
               en: "© 2026 MINERVA C2 PROJECT · AUTHORISED RED TEAM USE ONLY" },
      build: { zh: "BUILD v2.0.0 · MAIN", en: "BUILD v2.0.0 · MAIN" },
    },
  },
};

window.COPY = COPY;
