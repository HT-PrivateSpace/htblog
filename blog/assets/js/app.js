/* =========================================================
   公共应用 v2 - 含 REQ-001~REQ-010 二次优化
   情绪入口增强、阅读进度条、自动季节切换、微交互等
   ========================================================= */

const App = {
  currentPage: "",

  healingQuotes: [
    "此刻的你，已经做得很好了。",
    "允许自己偶尔停下来，世界不会因此崩塌。",
    "你不必一直坚强，偶尔脆弱也没关系。",
    "今天的阳光是为你晒的，风是为你吹的。",
    "深呼吸，你值得所有美好的事物。",
    "慢慢来，比较快。",
    "你不需要成为任何人，只需要成为你自己。",
    "累了就休息，这不是偷懒，是对自己好。",
    "这个世界的温柔，正在以你看不见的方式靠近你。",
    "每一个今天，都是新的开始。",
    "你已经在很努力地生活了，真的。",
    "没关系的，一切都会好起来的。",
    "你值得被温柔以待，从自己开始。",
    "那些让你难过的事，有一天你会笑着讲出来。",
    "活着本身，就是一件了不起的事。",
    "你不是一个人，我在这里。",
    "给自己一个拥抱吧，你值得。",
    "所有的等待，都是为了更好的相遇。",
    "你比你想象的，更勇敢、更坚强。",
    "今天也要好好吃饭、好好睡觉，这很重要。",
    "愿你走过的每一步，都是通往更好的自己。",
    "焦虑不会消失，但你可以学会与它共处。",
    "没关系，不完美也没关系。",
    "你的存在，本身就有意义。"
  ],

  warmReplies: [
    "谢谢你愿意分享，我已经好好收藏了。",
    "你的心情我已经收到了，希望它能轻一点。",
    "谢谢你的信任，这里永远欢迎你。",
    "你的故事很重要，我在认真看。",
    "希望这份心情，带给你一点点被听见的感觉。",
    "写下这些，本身就是一种勇气。"
  ],

  init() {
    this.currentPage = document.body.dataset.page || "home";
    this.injectReadingProgress(); // REQ-005: 阅读进度条
    this.injectHeader();
    this.injectFooter();
    this.injectPlayer();
    this.injectParticles();
    this.highlightNav();
    this.bindMenuToggle();
    this.injectSettings();
    this.injectTechToggle();
    this.injectEmotionEntry();
    this.injectHealingCard();
    Theme.init();
    Player.init();
    this.applyPersistedSettings();
    this.bindGlobalEvents();
    this.initMicroInteractions();  // REQ-010: 微交互
    this.initScrollReveal();       // REQ-010: 滚动入场

    // ============ 博客转场体验增强 ============
    this.bindNavigationTransition();  // FR-2: 导航拦截 + View Transitions
    this.transition({ immediate: true });  // FR-1 + FR-4: 本次页面淡入 + 引导语
  },

  // ============ 转场统一入口 App.transition({ greeting, theme }) ============
  transition(opts = {}) {
    const theme = opts.theme || Theme.current || localStorage.getItem("blog_theme") || "spring";
    const greeting = opts.greeting || this.getPageGreeting(this.currentPage, theme);

    // FR-4: 注入引导语（逐字浮现）
    if (!opts.skipGreeting) {
      this.injectGreeting(greeting);
    }

    // FR-1: 主体淡入上移
    const main = document.querySelector(".site-main");
    if (main) {
      // 移除之前的 ready，强制重播
      main.classList.remove("ready");
      requestAnimationFrame(() => {
        main.classList.add("ready");
      });
    }

    // FR-3: 转场粒子（瞬时，用完即焚）
    if (!opts.skipParticles) {
      this.playTransitionParticles(theme);
    }

    // FR-5: 卡片错峰入场（已有 scroll-reveal，这次额外给首屏卡片立即触发）
    if (!opts.skipStagger) {
      this.triggerFirstScreenStagger();
    }
  },

  // 根据 data-page + data-theme 获取对应引导语
  getPageGreeting(page, theme) {
    const g = (DB.greetings && DB.greetings[page]) || null;
    if (!g) return "";
    // 优先取季节版本，fallback 到 default
    return g[theme] || g.default || "";
  },

  // FR-4: 在 .site-main 顶部注入引导语（真实文本节点，可被读屏朗读）
  injectGreeting(text) {
    if (!text) return;
    const main = document.querySelector(".site-main");
    if (!main) return;

    // 避免重复注入
    let box = main.querySelector(".page-greeting");
    if (!box) {
      box = document.createElement("div");
      box.className = "page-greeting";
      box.setAttribute("aria-live", "polite");
      // 插入到 container 内部、第一个子元素之前
      const container = main.querySelector(".container");
      if (container) {
        container.insertBefore(box, container.firstChild);
      } else {
        main.insertBefore(box, main.firstChild);
      }
    }
    box.innerHTML = "";
    // 逐字浮现
    this.typewriteGreeting(box, text);
  },

  // 逐字浮现动画（每字 40ms 上浮 6px）
  typewriteGreeting(container, text) {
    const reduced = document.body.getAttribute("data-motion") === "reduced" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      container.textContent = text;
      container.classList.add("ready");
      return;
    }

    // 按字符拆分（保留标点和空格）
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(6px)";
      span.style.transition = "opacity .4s ease, transform .4s ease";
      span.style.transitionDelay = (i * 40) + "ms";
      container.appendChild(span);
    }

    requestAnimationFrame(() => {
      container.querySelectorAll("span").forEach(s => {
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
      });
    });

    // 全部播完后加 ready class
    setTimeout(() => container.classList.add("ready"), text.length * 40 + 500);
  },

  // FR-3: 转场瞬时粒子（用完即焚，1.5s 后销毁）
  playTransitionParticles(theme) {
    const reduced = document.body.getAttribute("data-motion") === "reduced" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const chars = Theme.particles[theme] || Theme.particles.spring;
    const layer = document.createElement("div");
    layer.className = "transition-particles";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    const count = 10 + Math.floor(Math.random() * 6); // 10~15 枚
    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      el.style.left = Math.random() * 100 + "%";
      el.style.fontSize = (14 + Math.random() * 12) + "px";
      el.style.animationDelay = (Math.random() * 0.3) + "s";
      el.style.animationDuration = (1.2 + Math.random() * 0.6) + "s";
      layer.appendChild(el);
    }

    // 1.5s 后销毁层（用完即焚）
    setTimeout(() => layer.remove(), 2000);
  },

  // FR-5: 首屏卡片错峰入场（已经在视口内的 scroll-reveal 立即触发）
  triggerFirstScreenStagger() {
    const reduced = document.body.getAttribute("data-motion") === "reduced";
    if (reduced) return;

    const items = document.querySelectorAll(
      ".site-main .scroll-reveal, .site-main .article-item, .site-main .album-card, " +
      ".site-main .travel-preview-card, .site-main .gallery-photo, .site-main .timeline-photo, " +
      ".site-main .topic-card, .site-main .wish-item, .site-main .message-item, " +
      ".site-main .contact-card, .site-main .related-card, .site-main .related-post-card, " +
      ".site-main .season-card, .site-main .best-time-card, .site-main .travel-detail, " +
      ".site-main .article-detail, .site-main .section-title, .site-main .page-title, " +
      ".site-main .page-subtitle, .site-main .hero-section, .site-main .about-hero, " +
      ".site-main .travel-hero, .site-main .empty-state"
    );
    items.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 40) {
        el.classList.add("scroll-reveal");
        el.style.transitionDelay = (i % 5) * 80 + "ms";
        requestAnimationFrame(() => {
          el.classList.add("visible");
        });
      }
    });
  },

  // ============ FR-2: 导航拦截 + 遮罩过渡幕 ============
  bindNavigationTransition() {
    const reduced = document.body.getAttribute("data-motion") === "reduced" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // 原生 View Transitions 支持检测
    const supportsVT = typeof document.startViewTransition === "function";

    // 拦截所有站内导航链接
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || a.target === "_blank") return;

      // 同页面锚点不拦截
      if (href === location.pathname.split("/").pop() || href === "./" || href === "../") return;

      e.preventDefault();

      // 如果目标是当前页面，不做转场
      const targetFile = href.split("/").pop() || "index.html";
      const currentFile = location.pathname.split("/").pop() || "index.html";
      if (targetFile === currentFile) {
        location.href = href;
        return;
      }

      if (supportsVT) {
        // 原生 View Transitions
        document.startViewTransition(() => {
          location.href = href;
        });
      } else {
        // 回退：自定义遮罩过渡幕
        this.playMaskTransition(() => {
          location.href = href;
        });
      }
    });
  },

  // 遮罩过渡幕回退（像翻过一页日记）
  playMaskTransition(onDone) {
    const theme = Theme.current || "spring";
    const mask = document.createElement("div");
    mask.className = "transition-mask";
    mask.setAttribute("aria-hidden", "true");
    mask.dataset.theme = theme;
    document.body.appendChild(mask);

    requestAnimationFrame(() => {
      mask.classList.add("show");
    });

    // 遮罩升起盖住 → 切页面
    setTimeout(() => {
      onDone && onDone();
    }, 450);
  },

  injectHeader() {
    const settings = DB.getSettings();
    // REQ-002: 主题按钮带情绪标签
    const themeSwitcherHTML = Theme.themes.map(t => `
      <button class="theme-btn ${t === this.currentTheme() ? 'active' : ''}" 
              data-theme="${t}" 
              data-emotion="${Theme.themeLabels[t].emotion}"
              title="${Theme.themeLabels[t].name}季 · ${Theme.themeLabels[t].emotion}"
              aria-label="${Theme.themeLabels[t].name}季 · ${Theme.themeLabels[t].emotion}">
        ${Theme.themeLabels[t].icon}
      </button>
    `).join("");

    const navItems = [
      { page: "home", href: "index.html", label: "首页" },
      { page: "travel", href: "travel.html", label: "四季旅行" },
      { page: "heal", href: "heal.html", label: "治愈角落" },
      { page: "album", href: "album.html", label: "时光相册" },
      { page: "message", href: "message.html", label: "留言板" },
      { page: "about", href: "about.html", label: "关于" },
      { page: "admin", href: "admin.html", label: "后台" }
    ];

    const navHTML = navItems.map(n => `
      <li><a href="${n.href}" data-nav="${n.page}">${n.label}</a></li>
    `).join("");

    const header = `
      <header class="site-header">
        <div class="container">
          <a href="index.html" class="site-logo">
            <span class="logo-icon">${Theme.themeLabels[this.currentTheme()].icon}</span>
            <span>${settings.siteName}</span>
          </a>
          <nav>
            <ul class="site-nav" id="siteNav">${navHTML}</ul>
          </nav>
          <div class="theme-switcher">${themeSwitcherHTML}</div>
          <button class="menu-toggle" id="menuToggle" aria-label="菜单">☰</button>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", header);
  },

  injectFooter() {
    const settings = DB.getSettings();
    const year = new Date().getFullYear();
    const footer = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-text">© ${year} ${settings.siteName} · ${settings.siteDesc}</div>
          <div class="footer-links">
            <a href="${settings.social.github}" target="_blank">GitHub</a>
            <a href="${settings.social.twitter}" target="_blank">Twitter</a>
            <a href="${settings.social.rss}">RSS</a>
          </div>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footer);
  },

  injectPlayer() {
    const playerHTML = `
      <div class="music-player" id="musicPlayer">
        <div class="player-inner">
          <div class="player-track">
            <div class="player-cover" id="playerCover">🎵</div>
            <div class="player-track-info">
              <div class="player-title" id="playerTitle">未播放</div>
              <div class="player-author" id="playerAuthor">点击下方列表选择</div>
            </div>
          </div>
          <div class="player-controls">
            <button class="player-btn" id="prevBtn" title="上一首">⏮</button>
            <button class="player-btn play-btn" id="playBtn" title="播放/暂停">▶</button>
            <button class="player-btn" id="nextBtn" title="下一首">⏭</button>
          </div>
          <div class="player-progress-wrap">
            <span class="player-time" id="currentTime">0:00</span>
            <div class="player-progress" id="progressBar">
              <div class="player-progress-fill" id="progressFill"></div>
            </div>
            <span class="player-time" id="duration">0:00</span>
          </div>
          <div class="player-volume">
            <span style="font-size:14px;color:var(--text-muted)">🔊</span>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="60">
          </div>
          <div class="playlist-toggle">
            <button class="player-btn" id="playlistToggle" title="播放列表">☰</button>
            <div class="playlist-panel" id="playlistPanel">
              <div class="playlist-header">
                <span>播放列表</span>
                <button class="player-btn btn-sm" id="playlistClose" style="width:24px;height:24px;font-size:14px">×</button>
              </div>
              <div id="playlistItems"></div>
            </div>
          </div>
          <button class="player-collapse-btn" id="collapseBtn" title="折叠">▾</button>
        </div>
        <audio id="audioPlayer" preload="metadata"></audio>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", playerHTML);
  },

  injectParticles() {
    const deco = document.createElement("div");
    deco.className = "season-decoration";
    document.body.appendChild(deco);
    const particles = document.createElement("div");
    particles.className = "season-particles";
    document.body.appendChild(particles);
  },

  // ============ REQ-005: 阅读进度条 ============
  injectReadingProgress() {
    const bar = document.createElement("div");
    bar.className = "reading-progress";
    bar.innerHTML = '<div class="reading-progress__fill" id="readingProgressFill"></div>';
    document.body.appendChild(bar);

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const fill = document.getElementById("readingProgressFill");
          if (!fill) return;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          fill.style.width = percent + "%";
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  },

  // ============ REQ-001 v2: 增强情绪入口 ============
  injectEmotionEntry() {
    if (!["home", "about"].includes(this.currentPage)) return;

    const entry = document.createElement("div");
    entry.className = "emotion-entry";
    const greetings = [
      "今天过得怎么样？",
      "停下来，喘口气。",
      "嘿，你来了。",
      "今天也要对自己温柔一点。"
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    entry.innerHTML = `
      <div class="emotion-entry__greeting">${greeting}</div>
      <div class="emotion-entry__breath"></div>
      <div class="emotion-entry__breath-phase" id="breathPhase">吸气…4</div>
      <div class="emotion-entry__breath-hint">跟我一起深呼吸 ✨（点击或滚动跳过）</div>
    `;
    document.body.appendChild(entry);

    // REQ-001: 4-7-8 呼吸法阶段提示更新
    const phaseEl = entry.querySelector("#breathPhase");
    if (phaseEl) {
      // 4s 吸气 → 7s 屏息 → 8s 呼气，总共 19s 一轮
      const phases = [
        { text: "吸气…4", cls: "inhale", duration: 4000 },
        { text: "屏息…7", cls: "hold", duration: 7000 },
        { text: "呼气…8", cls: "exhale", duration: 8000 }
      ];
      let phaseIndex = 0;
      let phaseStart = Date.now();

      const updatePhase = () => {
        // 隐藏动画延迟 1.2s，跳过初始阶段
        const elapsed = Date.now() - phaseStart - 2300;
        if (elapsed < 0) return;

        let cycleTime = elapsed % 19000; // 19s 一轮
        if (cycleTime < 4000) phaseIndex = 0;
        else if (cycleTime < 11000) phaseIndex = 1;
        else phaseIndex = 2;

        const p = phases[phaseIndex];
        phaseEl.textContent = p.text;
        phaseEl.className = "emotion-entry__breath-phase " + p.cls;
      };

      const phaseTimer = setInterval(updatePhase, 100);

      // 清除定时器
      const cleanup = () => { clearInterval(phaseTimer); };
      entry.addEventListener("transitionend", cleanup);
    }

    // REQ-001: 3s 后自动淡出
    const autoHide = setTimeout(() => {
      this.hideEmotionEntry(entry);
    }, 3000);

    // REQ-001: 点击任意位置立即淡出
    entry.addEventListener("click", () => {
      clearTimeout(autoHide);
      this.hideEmotionEntry(entry);
    }, { once: true });

    // REQ-001: 滚动立即淡出
    const scrollHide = () => {
      clearTimeout(autoHide);
      window.removeEventListener("scroll", scrollHide);
      this.hideEmotionEntry(entry);
    };
    window.addEventListener("scroll", scrollHide, { passive: true, once: true });
  },

  hideEmotionEntry(entry) {
    if (entry.classList.contains("hide")) return;
    entry.classList.add("hide");
    setTimeout(() => entry.remove(), 900);
  },

  injectHealingCard() {
    if (!["home", "about"].includes(this.currentPage)) return;

    const quote = this.healingQuotes[Math.floor(Math.random() * this.healingQuotes.length)];
    const card = document.createElement("div");
    card.className = "healing-card scroll-reveal";
    card.innerHTML = `
      <span class="healing-card__icon" role="img" aria-label="治愈">✨</span>
      <p class="healing-card__quote">「${quote}」</p>
    `;

    const hero = document.querySelector(".hero-section, .about-hero");
    if (hero) {
      hero.insertAdjacentElement("afterend", card);
    } else {
      const container = document.querySelector(".site-main .container");
      if (container) container.prepend(card);
    }
  },

  // ============ 设置面板 ============
  injectSettings() {
    const btn = document.createElement("button");
    btn.className = "settings-toggle";
    btn.id = "settingsToggle";
    btn.setAttribute("aria-label", "设置");
    btn.innerHTML = "⚙️";
    document.body.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "settings-panel";
    panel.id = "settingsPanel";
    // REQ-004: 字体改为 14-20px + 步长 2px 的四档调节
    panel.innerHTML = `
      <div class="settings-row">
        <span>🌙 护眼模式</span>
        <button class="settings-btn" id="darkToggle">切换</button>
      </div>
      <div class="settings-row">
        <span>🔤 字体大小</span>
        <div style="display:flex;gap:4px">
          <button class="settings-btn font-btn" data-size="small" title="小 14px">A-</button>
          <button class="settings-btn font-btn" data-size="normal" title="默认 16px">A</button>
          <button class="settings-btn font-btn" data-size="medium" title="中 18px">A²</button>
          <button class="settings-btn font-btn" data-size="large" title="大 20px">A+</button>
        </div>
      </div>
      <div class="settings-row">
        <span>🌸 自动季节</span>
        <button class="settings-btn" id="autoSeasonToggle">开启</button>
      </div>
      <div class="settings-row">
        <span>✨ 动画效果</span>
        <button class="settings-btn" id="motionToggle">开启</button>
      </div>
      <div class="whitenoise-panel" id="whitenoisePanel">
        <div class="whitenoise-title">🎧 白噪音氛围</div>
        <div class="whitenoise-options" id="whitenoiseOptions">
          <button class="whitenoise-btn" data-noise="rain">
            <span class="wn-icon">🌧️</span>
            雨声
          </button>
          <button class="whitenoise-btn" data-noise="fire">
            <span class="wn-icon">🔥</span>
            篝火
          </button>
          <button class="whitenoise-btn" data-noise="ocean">
            <span class="wn-icon">🌊</span>
            海浪
          </button>
          <button class="whitenoise-btn" data-noise="forest">
            <span class="wn-icon">🌲</span>
            鸟鸣
          </button>
        </div>
        <div class="whitenoise-volume">
          <span>🔈</span>
          <input type="range" id="whitenoiseVolume" min="0" max="100" value="40">
        </div>
      </div>
      <div style="margin-top:12px;text-align:center">
        <button class="settings-btn" id="resetSettings">恢复默认</button>
      </div>
    `;
    document.body.appendChild(panel);
  },

  injectTechToggle() {
    const btn = document.createElement("button");
    btn.className = "tech-toggle";
    btn.id = "techToggle";
    btn.setAttribute("aria-label", "切换科技装饰");
    btn.title = "科技装饰";
    btn.innerHTML = "✨";
    document.body.appendChild(btn);
  },

  applyPersistedSettings() {
    // 暗色模式
    const dark = localStorage.getItem("blog_dark");
    if (dark === "true") {
      document.documentElement.setAttribute("data-dark", "true");
      document.body.setAttribute("data-dark", "true");
    }

    // REQ-004 v2: html 根字号
    const rootFont = localStorage.getItem("blog_root_font") || "normal";
    document.documentElement.setAttribute("data-root-font", rootFont);

    // 科技装饰
    const techOff = localStorage.getItem("blog_tech_off");
    if (techOff === "true") {
      document.body.classList.add("tech-off");
    }

    // 动画效果
    const reducedMotion = localStorage.getItem("blog_motion") === "reduced";
    if (reducedMotion) {
      document.body.setAttribute("data-motion", "reduced");
    }
  },

  bindGlobalEvents() {
    // 设置面板开关
    document.addEventListener("click", (e) => {
      if (e.target.closest("#settingsToggle")) {
        document.getElementById("settingsPanel").classList.toggle("open");
      } else if (!e.target.closest("#settingsPanel") && !e.target.closest("#settingsToggle")) {
        document.getElementById("settingsPanel").classList.remove("open");
      }
    });

    // REQ-006: 暗色模式
    document.getElementById("darkToggle").addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-dark") === "true";
      if (isDark) {
        document.documentElement.removeAttribute("data-dark");
        document.body.removeAttribute("data-dark");
        localStorage.setItem("blog_dark", "false");
      } else {
        document.documentElement.setAttribute("data-dark", "true");
        document.body.setAttribute("data-dark", "true");
        localStorage.setItem("blog_dark", "true");
      }
    });

    // REQ-004 v2: html 根字号调节
    document.querySelectorAll(".font-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const size = btn.dataset.size;
        document.documentElement.setAttribute("data-root-font", size);
        localStorage.setItem("blog_root_font", size);
        document.querySelectorAll(".font-btn").forEach(b => b.classList.toggle("active", b.dataset.size === size));
      });
    });
    const currentFontSize = localStorage.getItem("blog_root_font") || "normal";
    document.querySelectorAll(`.font-btn[data-size="${currentFontSize}"]`).forEach(b => b.classList.add("active"));

    // REQ-006: 自动季节开关
    const autoSeasonBtn = document.getElementById("autoSeasonToggle");
    if (autoSeasonBtn) {
      const autoDisabled = localStorage.getItem("blog_auto_season_disabled") === "true";
      autoSeasonBtn.textContent = autoDisabled ? "关闭" : "开启";
      autoSeasonBtn.classList.toggle("active", !autoDisabled);
      autoSeasonBtn.addEventListener("click", () => {
        const isDisabled = localStorage.getItem("blog_auto_season_disabled") === "true";
        if (isDisabled) {
          localStorage.removeItem("blog_auto_season_disabled");
          autoSeasonBtn.textContent = "开启";
          autoSeasonBtn.classList.add("active");
        } else {
          localStorage.setItem("blog_auto_season_disabled", "true");
          autoSeasonBtn.textContent = "关闭";
          autoSeasonBtn.classList.remove("active");
        }
      });
    }

    // REQ-010: 动画效果开关
    const motionBtn = document.getElementById("motionToggle");
    if (motionBtn) {
      const reduced = localStorage.getItem("blog_motion") === "reduced";
      motionBtn.textContent = reduced ? "关闭" : "开启";
      motionBtn.classList.toggle("active", !reduced);
      motionBtn.addEventListener("click", () => {
        const isReduced = document.body.getAttribute("data-motion") === "reduced";
        if (isReduced) {
          document.body.removeAttribute("data-motion");
          localStorage.removeItem("blog_motion");
          motionBtn.textContent = "开启";
          motionBtn.classList.add("active");
        } else {
          document.body.setAttribute("data-motion", "reduced");
          localStorage.setItem("blog_motion", "reduced");
          motionBtn.textContent = "关闭";
          motionBtn.classList.remove("active");
        }
      });
    }

    // REQ-003: 科技装饰开关
    document.addEventListener("click", (e) => {
      const toggle = e.target.closest("#techToggle");
      if (toggle) {
        const isOff = document.body.classList.toggle("tech-off");
        localStorage.setItem("blog_tech_off", isOff ? "true" : "false");
        toggle.innerHTML = isOff ? "🌿" : "✨";
      }
    });
    if (document.body.classList.contains("tech-off")) {
      const toggle = document.getElementById("techToggle");
      if (toggle) toggle.innerHTML = "🌿";
    }

    // REQ-005: 白噪音
    document.querySelectorAll(".whitenoise-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const noise = btn.dataset.noise;
        App.whitenoiseManager.play(noise);
        document.querySelectorAll(".whitenoise-btn").forEach(b => b.classList.toggle("active", b.dataset.noise === noise));
      });
    });

    const wnVol = document.getElementById("whitenoiseVolume");
    if (wnVol) {
      wnVol.addEventListener("input", (e) => {
        App.whitenoiseManager.setVolume(parseInt(e.target.value));
      });
    }

    // 恢复默认
    const resetBtn = document.getElementById("resetSettings");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        ["blog_dark", "blog_root_font", "blog_tech_off", "blog_theme",
         "blog_motion", "blog_auto_season_disabled"].forEach(k => localStorage.removeItem(k));
        document.documentElement.removeAttribute("data-dark");
        document.documentElement.removeAttribute("data-root-font");
        document.body.removeAttribute("data-dark");
        document.body.removeAttribute("data-motion");
        document.body.classList.remove("tech-off");
        Theme.apply("spring");
        location.reload();
      });
    }
  },

  // ============ REQ-010: 微交互增强 ============
  initMicroInteractions() {
    // 涟漪效果：给所有按钮添加
    const rippleTargets = ".btn, .page-btn, .player-btn, .theme-btn, .settings-btn, .whitenoise-btn, .mood-option";
    document.addEventListener("click", (e) => {
      const target = e.target.closest(rippleTargets);
      if (!target) return;
      if (document.body.getAttribute("data-motion") === "reduced") return;

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });

    // 卡片 3D 倾斜
    const tiltTargets = document.querySelectorAll(".card, .article-item, .travel-preview-card");
    tiltTargets.forEach(card => {
      if (document.body.getAttribute("data-motion") === "reduced") return;

      let rect;
      card.addEventListener("mouseenter", () => { rect = card.getBoundingClientRect(); });
      card.addEventListener("mousemove", (e) => {
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -5;
        const rotateY = ((x / rect.width) - 0.5) * 5;
        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        rect = null;
      });
    });
  },

  // ============ REQ-010: 滚动入场动画 ============
  initScrollReveal() {
    // 为主要内容添加 scroll-reveal 类
    const toReveal = document.querySelectorAll(
      ".section-title, .article-item, .album-card, .travel-preview-card, " +
      ".message-item, .contact-card, .healing-card, .card, .empty-state"
    );
    toReveal.forEach((el, i) => {
      el.classList.add("scroll-reveal");
      el.style.transitionDelay = (i % 4) * 0.1 + "s";
    });

    if (!("IntersectionObserver" in window)) {
      // 降级：直接显示
      toReveal.forEach(el => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    toReveal.forEach(el => observer.observe(el));
  },

  highlightNav() {
    document.querySelectorAll(`[data-nav="${this.currentPage}"]`).forEach(a => a.classList.add("active"));
  },

  bindMenuToggle() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#menuToggle")) {
        document.getElementById("siteNav").classList.toggle("open");
      } else if (!e.target.closest("#siteNav") && !e.target.closest("#menuToggle")) {
        document.getElementById("siteNav").classList.remove("open");
      }
    });
  },

  currentTheme() {
    return localStorage.getItem("blog_theme") || "spring";
  },

  // ============ REQ-005: 白噪音管理器 ============
  whitenoiseManager: {
    volume: 0.4,
    ctx: null,
    sourceNode: null,
    gainNode: null,

    play(type) {
      this.stop();
      try {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (this.ctx.state === "suspended") this.ctx.resume();
        const bufferSize = 2 * this.ctx.sampleRate;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          switch (type) {
            case "rain": output[i] = Math.random() * 2 - 1; break;
            case "ocean": output[i] = (Math.random() * 2 - 1) * 0.6 + Math.sin(i / 2000) * 0.3; break;
            case "fire": output[i] = Math.random() * Math.random() * (Math.random() > 0.9 ? 0.8 : 0.3); break;
            case "forest": output[i] = (Math.random() * 2 - 1) * 0.4; break;
            default: output[i] = Math.random() * 2 - 1;
          }
        }
        this.sourceNode = this.ctx.createBufferSource();
        this.sourceNode.buffer = buffer;
        this.sourceNode.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = type === "rain" ? 2000 : type === "ocean" ? 800 : 1500;
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.value = this.volume * 0.15;
        this.sourceNode.connect(filter);
        filter.connect(this.gainNode);
        this.gainNode.connect(this.ctx.destination);
        this.sourceNode.start();
      } catch (e) {
        console.warn("白噪音播放失败:", e);
      }
    },
    stop() {
      if (this.sourceNode) {
        try { this.sourceNode.stop(); } catch(e) {}
        this.sourceNode.disconnect();
        this.sourceNode = null;
      }
      if (this.gainNode) { this.gainNode.disconnect(); this.gainNode = null; }
      document.querySelectorAll(".whitenoise-btn").forEach(b => b.classList.remove("active"));
    },
    setVolume(v) {
      this.volume = v / 100;
      if (this.gainNode) this.gainNode.gain.value = this.volume * 0.15;
    }
  },

  // ====== 工具方法 ======
  formatViews(n) { return n >= 1000 ? (n / 1000).toFixed(1) + "k" : n; },
  formatDate(date) { return date ? date.replace(/-/g, "年").replace(/-/g, "月") + "日" : ""; },
  escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  },
  isEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); },
  getParam(key) { return new URLSearchParams(window.location.search).get(key); },
  paginate(list, page = 1, perPage = 5) {
    const start = (page - 1) * perPage;
    return { items: list.slice(start, start + perPage), total: list.length, pages: Math.ceil(list.length / perPage), page };
  },
  renderPagination(pages, current, onChange) {
    if (pages <= 1) return "";
    let html = '<div class="pagination">';
    html += `<button class="page-btn" ${current === 1 ? "disabled" : ""} data-page="${current - 1}">‹</button>`;
    for (let i = 1; i <= pages; i++) {
      html += `<button class="page-btn ${i === current ? "active" : ""}" data-page="${i}">${i}</button>`;
    }
    html += `<button class="page-btn" ${current === pages ? "disabled" : ""} data-page="${current + 1}">›</button>`;
    html += "</div>";
    return html;
  }
};

// 早期设置应用（避免 FOUC）
(function earlySettings() {
  try {
    const dark = localStorage.getItem("blog_dark");
    if (dark === "true") {
      document.documentElement.setAttribute("data-dark", "true");
      document.body?.setAttribute("data-dark", "true");
    }
    const rootFont = localStorage.getItem("blog_root_font");
    if (rootFont) document.documentElement?.setAttribute("data-root-font", rootFont);
    const techOff = localStorage.getItem("blog_tech_off");
    if (techOff === "true") document.body?.classList.add("tech-off");
    const motion = localStorage.getItem("blog_motion");
    if (motion === "reduced") document.body?.setAttribute("data-motion", "reduced");
  } catch(e) {}
})();

document.addEventListener("DOMContentLoaded", () => App.init());
