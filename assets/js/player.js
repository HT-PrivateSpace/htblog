/* =========================================================
   固定底部音乐播放器
   - 播放/暂停/上一首/下一首/进度条/音量/播放列表
   - 自动下一首
   - localStorage 保存音量与上次曲目
   ========================================================= */

const Player = {
  audio: null,
  playlist: [],
  currentIndex: 0,
  isPlaying: false,

  init() {
    this.audio = document.getElementById("audioPlayer");
    if (!this.audio) return;
    this.playlist = DB.getMusic();
    this.bindEvents();
    this.bindUI();
    this.loadFromStorage();
    this.renderPlaylist();
    this.applyVolume();

    // 移动端默认折叠
    if (window.innerWidth <= 768) {
      document.getElementById("musicPlayer").classList.add("collapsed");
    }
  },

  loadFromStorage() {
    const savedIndex = parseInt(localStorage.getItem("blog_player_index") || "0");
    this.currentIndex = (savedIndex < this.playlist.length) ? savedIndex : 0;
    this.loadTrack(this.currentIndex, false);
    const savedVolume = parseInt(localStorage.getItem("blog_player_volume") || "60");
    this.audio.volume = savedVolume / 100;
    const slider = document.getElementById("volumeSlider");
    if (slider) slider.value = savedVolume;
  },

  applyVolume() {
    if (!this.audio) return;
    const v = parseInt(localStorage.getItem("blog_player_volume") || "60");
    this.audio.volume = v / 100;
  },

  loadTrack(index, autoplay = true) {
    if (!this.playlist.length) return;
    this.currentIndex = (index + this.playlist.length) % this.playlist.length;
    const track = this.playlist[this.currentIndex];
    this.audio.src = track.src;
    localStorage.setItem("blog_player_index", this.currentIndex);

    document.getElementById("playerTitle").textContent = track.title;
    document.getElementById("playerAuthor").textContent = track.author;
    document.getElementById("playerCover").textContent = track.cover || "🎵";
    document.getElementById("duration").textContent = track.duration || "0:00";
    document.getElementById("currentTime").textContent = "0:00";
    document.getElementById("progressFill").style.width = "0%";

    this.highlightPlaylistItem();
    if (autoplay) this.play();
  },

  play() {
    if (!this.audio.src) {
      this.loadTrack(0, true);
      return;
    }
    const p = this.audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        // 自动播放被浏览器拦截，标记为暂停状态
        this.isPlaying = false;
        this.updatePlayBtn();
      });
    }
    this.isPlaying = true;
    this.updatePlayBtn();
  },

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayBtn();
  },

  toggle() {
    if (this.isPlaying) this.pause();
    else this.play();
  },

  next() {
    this.loadTrack(this.currentIndex + 1, true);
  },

  prev() {
    this.loadTrack(this.currentIndex - 1, true);
  },

  updatePlayBtn() {
    const btn = document.getElementById("playBtn");
    if (btn) btn.textContent = this.isPlaying ? "⏸" : "▶";
  },

  seek(percent) {
    if (!this.audio.duration) return;
    this.audio.currentTime = this.audio.duration * percent;
  },

  setVolume(percent) {
    this.audio.volume = percent / 100;
    localStorage.setItem("blog_player_volume", percent);
  },

  renderPlaylist() {
    const wrap = document.getElementById("playlistItems");
    if (!wrap) return;
    wrap.innerHTML = this.playlist.map((t, i) => `
      <div class="playlist-item ${i === this.currentIndex ? "playing" : ""}" data-index="${i}">
        <div>
          <div class="pl-title">${App.escapeHtml(t.title)}</div>
          <div class="pl-duration">${App.escapeHtml(t.author)}</div>
        </div>
        <span class="pl-duration">${t.duration || ""}</span>
      </div>
    `).join("");
  },

  highlightPlaylistItem() {
    document.querySelectorAll(".playlist-item").forEach(el => {
      el.classList.toggle("playing", parseInt(el.dataset.index) === this.currentIndex);
    });
  },

  bindUI() {
    document.getElementById("playBtn").addEventListener("click", () => this.toggle());
    document.getElementById("nextBtn").addEventListener("click", () => this.next());
    document.getElementById("prevBtn").addEventListener("click", () => this.prev());

    // 进度条点击跳转
    const bar = document.getElementById("progressBar");
    bar.addEventListener("click", (e) => {
      const rect = bar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      this.seek(percent);
    });

    // 音量
    document.getElementById("volumeSlider").addEventListener("input", (e) => {
      this.setVolume(parseInt(e.target.value));
    });

    // 播放列表切换
    document.getElementById("playlistToggle").addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("playlistPanel").classList.toggle("open");
    });
    document.getElementById("playlistClose").addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("playlistPanel").classList.remove("open");
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".playlist-toggle")) {
        const panel = document.getElementById("playlistPanel");
        if (panel) panel.classList.remove("open");
      }
    });

    // 列表项点击
    document.getElementById("playlistItems").addEventListener("click", (e) => {
      const item = e.target.closest(".playlist-item");
      if (item) {
        this.loadTrack(parseInt(item.dataset.index), true);
      }
    });

    // 折叠按钮（移动端）
    document.getElementById("collapseBtn").addEventListener("click", () => {
      document.getElementById("musicPlayer").classList.toggle("collapsed");
    });
  },

  bindEvents() {
    // 时间更新 → 进度条
    this.audio.addEventListener("timeupdate", () => {
      if (!this.audio.duration) return;
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      document.getElementById("progressFill").style.width = percent + "%";
      document.getElementById("currentTime").textContent = this.formatTime(this.audio.currentTime);
    });

    // 元数据加载完成
    this.audio.addEventListener("loadedmetadata", () => {
      const dur = this.audio.duration;
      if (dur && !isNaN(dur)) {
        document.getElementById("duration").textContent = this.formatTime(dur);
      }
    });

    // 自动下一首
    this.audio.addEventListener("ended", () => this.next());
  },

  formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ":" + (s < 10 ? "0" + s : s);
  }
};
