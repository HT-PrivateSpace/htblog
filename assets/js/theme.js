/* =========================================================
   四季主题切换系统 — 温暖树洞版 v2
   含 REQ-002 情绪标签 + 首次自动季节推荐 + 自动切换提示
   春→夏→秋→冬 循环切换，localStorage 保存
   ========================================================= */

const Theme = {
  themes: ["spring", "summer", "autumn", "winter"],
  themeLabels: {
    spring: { name: "春", icon: "🌸", emotion: "新生·希望", next: "summer" },
    summer: { name: "夏", icon: "🌊", emotion: "热烈·自由", next: "autumn" },
    autumn: { name: "秋", icon: "🍂", emotion: "沉淀·温柔", next: "winter" },
    winter: { name: "冬", icon: "❄", emotion: "宁静·内省", next: "spring" }
  },

  // 粒子字符（按主题）
  particles: {
    spring: ["🌸", "🌺", "🌷", "🍃"],
    summer: ["🌊", "☀", "🐚", "💧"],
    autumn: ["🍂", "🍁", "🍃"],
    winter: ["❄", "❅", "❆", "✦"]
  },

  current: "spring",
  particleTimer: null,

  // REQ-006: 判断当前真实季节
  getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return "spring";  // 3-5月
    if (month >= 5 && month <= 7) return "summer";  // 6-8月
    if (month >= 8 && month <= 10) return "autumn";  // 9-11月
    return "winter";  // 12-2月
  },

  // REQ-006: 显示自动季节切换提示
  showSeasonToast(season) {
    // 检查是否禁用了自动季节切换
    const autoSeasonDisabled = localStorage.getItem("blog_auto_season_disabled") === "true";
    if (autoSeasonDisabled) return;

    // 检查是否已经显示过（本次会话只显示一次）
    if (sessionStorage.getItem("blog_season_toast_shown")) return;
    sessionStorage.setItem("blog_season_toast_shown", "true");

    const label = this.themeLabels[season];
    const toast = document.createElement("div");
    toast.className = "season-toast";
    toast.innerHTML = `${label.icon} 已根据你的季节自动切换至「${label.emotion}」主题 ✨`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  },

  init() {
    // REQ-006: 自动季节切换逻辑
    const savedTheme = localStorage.getItem("blog_theme");
    const autoSeasonDisabled = localStorage.getItem("blog_auto_season_disabled") === "true";
    const firstVisit = !savedTheme;
    const realSeason = this.getCurrentSeason();

    if (firstVisit && !autoSeasonDisabled) {
      // 首次访问 → 使用真实季节
      this.apply(realSeason);
      this.showSeasonToast(realSeason);
    } else {
      // 使用用户保存的主题
      this.apply(savedTheme || "spring");
    }

    this.bindSwitcher();
    this.startParticles();
  },

  apply(theme) {
    if (!this.themes.includes(theme)) theme = "spring";
    this.current = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("blog_theme", theme);
    // 用户手动切换后，记住用户偏好（覆盖自动季节）
    // 自动季节功能不关闭，但用户选择优先
    this.updateSwitcherUI();
    this.updateParticles();
    // 更新站点装饰
    document.querySelectorAll(".logo-icon").forEach(el => {
      el.textContent = this.themeLabels[theme].icon;
    });
  },

  // 一键循环切换到下一季
  cycle() {
    const next = this.themeLabels[this.current].next;
    this.apply(next);
  },

  bindSwitcher() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".theme-btn");
      if (btn) {
        const theme = btn.dataset.theme;
        if (theme) this.apply(theme);
        return;
      }
      // 一键切换按钮
      const cycleBtn = e.target.closest(".theme-cycle-btn");
      if (cycleBtn) {
        this.cycle();
      }
    });
  },

  updateSwitcherUI() {
    document.querySelectorAll(".theme-btn").forEach(btn => {
      const t = btn.dataset.theme;
      btn.classList.toggle("active", t === this.current);
      // REQ-002: 为主题按钮添加情绪标签属性
      if (this.themeLabels[t] && !btn.dataset.emotion) {
        btn.dataset.emotion = this.themeLabels[t].emotion;
      }
    });
  },

  // 飘落粒子
  startParticles() {
    const container = document.querySelector(".season-particles");
    if (!container) return;
    if (this.particleTimer) clearInterval(this.particleTimer);
    this.particleTimer = setInterval(() => this.spawnParticle(container), 800);
  },

  spawnParticle(container) {
    const chars = this.particles[this.current];
    if (!chars || !chars.length) return;
    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.animationDuration = (6 + Math.random() * 6) + "s";
    el.style.fontSize = (14 + Math.random() * 10) + "px";
    el.style.opacity = 0.4 + Math.random() * 0.4;
    container.appendChild(el);
    setTimeout(() => el.remove(), 13000);
  },

  updateParticles() {
    const container = document.querySelector(".season-particles");
    if (!container) return;
    // 清空旧粒子
    container.innerHTML = "";
  }
};

// 页面加载完就初始化（最早执行，避免主题闪烁）
// REQ-006: 早期自动季节判断
(function earlyInit() {
  const saved = localStorage.getItem("blog_theme");
  const autoSeasonDisabled = localStorage.getItem("blog_auto_season_disabled") === "true";
  
  if (!saved && !autoSeasonDisabled) {
    // 首次访问 → 使用真实季节
    const month = new Date().getMonth();
    let season = "spring";
    if (month >= 2 && month <= 4) season = "spring";
    else if (month >= 5 && month <= 7) season = "summer";
    else if (month >= 8 && month <= 10) season = "autumn";
    else season = "winter";
    document.documentElement.setAttribute("data-theme", season);
  } else {
    document.documentElement.setAttribute("data-theme", saved || "spring");
  }
})();

document.addEventListener("DOMContentLoaded", () => Theme.init());
