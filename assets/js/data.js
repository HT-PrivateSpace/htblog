/* =========================================================
   数据层 - Mock 数据 + localStorage 持久化
   ========================================================= */

const DB = {
  // 默认文章数据
  articles: [
    {
      id: 1,
      title: "春日来信：在江南的烟雨里看花",
      excerpt: "三月的江南，细雨绵绵，粉墙黛瓦间桃花杏花次第开放。这是一份写给春天的私信，记录那些在雨中漫步、在花下驻足的温柔时光。",
      cover: "assets/images/img_c918ecb9b77258d3.jpg",
      content: `<p>三月，江南的雨下得缠绵。撑一把伞沿着青石板路慢慢走，粉墙黛瓦的缝隙里钻出几枝桃花，浅粉的花瓣被雨水打湿，落在伞沿上，又轻轻滑落。</p><p>清晨的西园最是安静，只有一两位老人在亭子里喝茶。湖面上的雾气还没散开，远处的拱桥若隐若现，像一幅没干透的水墨画。</p><h2>桃花与杏花的对话</h2><p>桃花开得热烈，杏花却开得含蓄。它们在同一片春光里，却说着不同的语言。桃花是少女的笑靥，杏花是诗人的低吟。</p><blockquote>春风又绿江南岸，明月何时照我还。——王安石</blockquote><p>沿着河岸走，柳枝垂到水面，风一吹，像在拨弄一根根琴弦。鸭子在水面游过，划出两道浅浅的波纹，那是春天写在水上的诗。</p><h2>雨中的茶馆</h2><p>找一家临河的茶馆坐下，点一壶碧螺春。窗外雨声淅沥，茶香在小小的茶室里飘散。老板娘端来一碟青团，绿色的外皮透着艾草的清香，咬一口，是豆沙的甜。</p><p>春天，其实从来不在远方，它就在这一杯茶、一碟青团、一场雨里。</p>`,
      author: "HT",
      category: "随笔",
      tags: ["春天", "江南", "散文"],
      date: "2026-03-20",
      views: 1280
    },
    {
      id: 2,
      title: "夏日手记：海边的午后与一本书",
      excerpt: "夏天的海边，阳光把沙滩晒得滚烫。带一本厚厚的小说，躲在遮阳伞下，听海浪一遍遍拍打岸边。这是属于夏天独有的慵懒时光。",
      cover: "assets/images/img_1c603a3a369928a0.jpg",
      content: `<p>盛夏的午后，海边的阳光烈得刺眼。赤脚踩在沙滩上，沙子被晒得滚烫，走几步就要踮起脚尖，像在和大地跳一支笨拙的舞。</p><p>找一顶遮阳伞，铺开一条大毛巾，把厚厚的小说摊在膝头。海风翻动书页，比手还勤快。</p><h2>海浪的节拍</h2><p>海浪一遍又一遍拍打岸边，像一位固执的说书人，把同一个故事讲了一千遍。可每一遍都不同——有的浪花温柔，像在耳语；有的浪花凶猛，像在咆哮。</p><blockquote>面朝大海，春暖花开。——海子</blockquote><p>读完一章，抬头望海。远处有一艘白色小船，在浪里上下起伏，像一片漂浮的叶子。海鸥从头顶掠过，叫声清亮，划破午后的沉闷。</p><h2>冰镇西瓜的甜</h2><p>傍晚时分，从冰桶里抱出一只西瓜，一刀切开，红瓤黑籽，汁水四溢。咬一口，凉意从舌尖蔓延到全身，这是夏天最诚实的礼物。</p>`,
      author: "HT",
      category: "随笔",
      tags: ["夏天", "海边", "阅读"],
      date: "2026-07-15",
      views: 980
    },
    {
      id: 3,
      title: "秋日私语：银杏树下的金色午后",
      excerpt: "深秋的银杏大道，满地金黄。踩着落叶沙沙作响，阳光透过枝叶洒下斑驳的光影。秋天总是带着一种温柔的忧伤。",
      cover: "assets/images/img_36be2ff7b226ec5f.jpg",
      content: `<p>十月底，城东的银杏大道开始变色。先是叶尖泛黄，然后整个叶面变成明亮的金黄，最后纷纷扬扬地落下，铺成一条金色的地毯。</p><p>踩在上面，沙沙作响，像在翻开一本旧书。</p><h2>落叶的旅程</h2><p>每一片落叶都走过一段长长的旅程——从春天的嫩芽，到夏天的浓荫，再到秋天的金黄。最后它落下来，回归泥土，成为来年新叶的养分。</p><blockquote>自古逢秋悲寂寥，我言秋日胜春朝。——刘禹锡</blockquote><p>有人觉得秋天是凋零，可我更愿意把它看作完成。每片叶子在落下前，都把自己最绚烂的颜色献给了天空。</p><h2>银杏果的香</h2><p>巷口的老婆婆在卖烤银杏果。小小的炭炉上，铁网里烤着白果，外壳裂开，飘出一股特殊的香。十块钱一袋，捧在手里暖暖的。</p>`,
      author: "HT",
      category: "随笔",
      tags: ["秋天", "银杏", "散文"],
      date: "2026-10-28",
      views: 1560
    },
    {
      id: 4,
      title: "冬日笔记：雪夜与一盏灯",
      excerpt: "北方的冬夜，窗外飘着雪。屋内一盏暖黄的灯，一本书，一杯热茶。这是冬天独有的安静与温柔，连时间都放慢了脚步。",
      cover: "assets/images/img_415c558f33b2b714.jpg",
      content: `<p>北方的冬夜，雪总是下得安静。从窗里望出去，路灯下的雪花像无数只飞舞的小蛾，围着光团打转。</p><p>屋里烧着暖气，可还是想点一盏台灯。暖黄的光晕开在书页上，文字也跟着柔和起来。</p><h2>雪夜的安静</h2><p>雪能吸音。一场大雪过后，整座城市都安静下来，连汽车的喇叭声都被吞没了。只剩偶尔传来的雪压断树枝的轻响，像夜的呼吸。</p><blockquote>晚来天欲雪，能饮一杯无？——白居易</blockquote><p>泡一杯红茶，看茶叶在热水里慢慢舒展，像一朵花重新开放。茶香混着书页的纸香，是冬天最让人安心的味道。</p><h2>窗上的霜花</h2><p>清晨醒来，窗玻璃上结了一层霜花。指尖轻轻一按，就能印出一个清晰的指纹。这是冬天写在玻璃上的诗，读一遍，就觉得世界又温柔了几分。</p>`,
      author: "HT",
      category: "随笔",
      tags: ["冬天", "雪夜", "散文"],
      date: "2026-01-12",
      views: 1820
    },
    {
      id: 5,
      title: "关于慢生活：在快节奏里找到自己的步调",
      excerpt: "我们总是在赶路，却忘了停下来看看风景。慢生活不是逃避，而是在喧嚣里给自己留一个呼吸的间隙，找回属于自己的节奏。",
      cover: "assets/images/img_a908249a8d63098d.jpg",
      content: `<p>朋友圈里总有人晒加班到深夜的照片，地铁里每个人都低头看手机，步履匆匆。我们都在赶路，赶向一个又一个的目标。</p><p>可你有没有想过，我们到底在赶什么？</p><h2>慢不是懒</h2><p>慢生活，不是让你躺平、什么都不做。而是给自己一个停顿——读完一页书再翻下一页，吃完一口饭再吃下一口。</p><blockquote>慢慢来，比较快。</blockquote><p>焦虑的根源，是把别人的节奏当成了自己的。可每个人的花期不同，有人在春天开，有人在秋天开，不必同一时间绽放。</p><h2>三个小练习</h2><p>1. 每天留 15 分钟，什么也不做，只发呆或者散步。<br>2. 吃饭时不看手机，认真咀嚼每一口。<br>3. 睡前写三件今天让你感激的小事。</p>`,
      author: "HT",
      category: "生活",
      tags: ["慢生活", "随笔", "生活方式"],
      date: "2026-09-08",
      views: 2340
    },
    {
      id: 6,
      title: "光影手记：用手机拍出有故事的照片",
      excerpt: "好的照片不在于设备，而在于你看世界的方式。一部手机，一双会观察的眼睛，就能记录下生活里那些动人的光影瞬间。",
      cover: "assets/images/img_b2cf3cc10927251f.jpg",
      content: `<p>很多人觉得，要拍出好照片，必须得有专业的相机。其实不然。手机已经成了我们最顺手的记录工具，关键在于——你有没有学会用眼睛去看。</p><h2>光是照片的灵魂</h2><p>摄影这两个字，"摄"的是光。同样一面墙，清晨的光、中午的光、傍晚的光，拍出来是三种完全不同的味道。</p><blockquote>摄影是用光作画。</blockquote><p>黄金时刻（日出后一小时、日落前一小时）的光最柔和，是拍照的最好时机。</p><h2>构图的小窍门</h2><p>三分法、引导线、对称、框架……这些都是构图的基础。但更重要的是——你拍这张照片时，想说的是什么？先想清楚要表达什么，再去构图。</p>`,
      author: "HT",
      category: "摄影",
      tags: ["摄影", "手机", "教程"],
      date: "2026-08-22",
      views: 1670
    }
  ],

  // 默认相册数据
  albums: [
    {
      id: 1,
      title: "2026年春 · 江南花事",
      cover: "assets/images/img_0a6f97e5af82dbc5.jpg",
      season: "2026年春",
      photos: [
        { id: 101, title: "雨中的桃花", date: "2026-03-20", desc: "细雨打湿的花瓣，透着晶莹的光。", cover: "assets/images/img_b19ad4e64e495bb6.jpg" },
        { id: 102, title: "青石板路", date: "2026-03-22", desc: "湿漉漉的青石板，倒映着白墙。", cover: "assets/images/img_bc75b8abef64044c.jpg" },
        { id: 103, title: "河岸柳色", date: "2026-03-25", desc: "新绿的柳枝垂到水面，风一吹便荡开涟漪。", cover: "assets/images/img_e32c41bfdc262c02.jpg" },
        { id: 104, title: "茶馆一隅", date: "2026-03-28", desc: "临河茶馆的窗，框出一幅春天的画。", cover: "assets/images/img_9e047fdbc5794151.jpg" }
      ]
    },
    {
      id: 2,
      title: "2025年夏 · 海岛日记",
      cover: "assets/images/img_0e3d506e4b723195.jpg",
      season: "2025年夏",
      photos: [
        { id: 201, title: "正午的海", date: "2025-07-15", desc: "阳光直射的海面，蓝得发亮。", cover: "assets/images/img_a83b7692d03aa9e8.jpg" },
        { id: 202, title: "沙滩脚印", date: "2025-07-16", desc: "留在沙滩上的脚印，很快被浪抚平。", cover: "assets/images/img_bba3cc322a9397c2.jpg" },
        { id: 203, title: "黄昏的渔船", date: "2025-07-18", desc: "归航的渔船，剪影在橘色的天光里。", cover: "assets/images/img_f1810f542040cdc7.jpg" }
      ]
    },
    {
      id: 3,
      title: "2025年秋 · 银杏物语",
      cover: "assets/images/img_a3e977de6e89794d.jpg",
      season: "2025年秋",
      photos: [
        { id: 301, title: "满地金黄", date: "2025-11-08", desc: "银杏叶铺成的金色地毯。", cover: "assets/images/img_fd45aa74328af2da.jpg" },
        { id: 302, title: "枝头最后一叶", date: "2025-11-12", desc: "枝头上摇摇欲坠的最后一片叶。", cover: "assets/images/img_3d394f3229ba38a8.jpg" },
        { id: 303, title: "巷口烤果", date: "2025-11-15", desc: "老婆婆的炭炉上，烤着白果。", cover: "assets/images/img_a077d1d5d7a042fb.jpg" }
      ]
    },
    {
      id: 4,
      title: "2026年冬 · 雪夜独白",
      cover: "assets/images/img_da370d28ad303656.jpg",
      season: "2026年冬",
      photos: [
        { id: 401, title: "窗外的雪", date: "2026-01-12", desc: "路灯下纷飞的雪花，像无数小蛾。", cover: "assets/images/img_296eab17e21299a3.jpg" },
        { id: 402, title: "窗上的霜花", date: "2026-01-13", desc: "清晨玻璃上结出的霜花，自然的诗。", cover: "assets/images/img_4af0abb4a35c00ff.jpg" }
      ]
    }
  ],

  // 默认留言数据
  messages: [
    { id: 1, name: "晚风", email: "wanfeng@example.com", website: "", content: "读到《春日来信》的那一刻，仿佛闻到了江南的雨气，谢谢你写下这样的文字 🌸", date: "2026-04-02 14:23", status: "approved", reply: "谢谢你让文字有了回响，愿你也有一场温柔的春雨。" },
    { id: 2, name: "山月", email: "shanyue@example.com", website: "https://shanyue.blog", content: "银杏那篇看哭了，去年陪外婆看的最后一季银杏，今年她不在了。秋天总是让人想起一些人。", date: "2026-11-05 21:18", status: "approved", reply: "抱抱你。叶子落下，是为了让新叶有机会长出，外婆一定也在某处看着你。" },
    { id: 3, name: "阿木", email: "amu@example.com", website: "", content: "想问问作者用的什么相机？照片太好看了", date: "2026-08-23 09:42", status: "approved", reply: "大部分是手机拍的，关键是看光和构图哦～" },
    { id: 4, name: "路过", email: "visitor@example.com", website: "", content: "求慢生活那篇的延伸阅读书单！", date: "2026-09-09 18:30", status: "pending", reply: "" }
  ],

  // 默认音乐数据
  music: [
    { id: 1, title: "玻璃", author: "Gareth.T", cover: "🔮", src: "assets/audio/boli.mp3", duration: "3:43" }
  ],

  // 站点设置
  settings: {
    siteName: "小满即安",
    siteDesc: "旅行の治愈 · 四季里那些温柔的小事",
    author: "HT",
    email: "linxi@example.com",
    social: {
      github: "https://github.com/linxi",
      twitter: "https://twitter.com/linxi",
      rss: "#"
    },
    messageReviewEnabled: true
  },

  // ============ 主线 B：各栏目温柔引导语 ============
  // 按 data-page 映射，支持四季版本 + 默认兜底
  // page: 对应 <body data-page="...">
  greetings: {
    home: {
      pageTitle: "首页",
      default: "又见面啦，今天想看点什么样的风景？",
      spring: "春天来了，想一起去看看花开吗？",
      summer: "夏天的风，正轻轻吹过来。",
      autumn: "秋光正好，适合读一首诗。",
      winter: "外面或许很冷，但这里一直暖着。"
    },
    travel: {
      pageTitle: "四季旅行",
      default: "把走过的路，折成一只只纸船。",
      spring: "春水初生，春林初盛，春风十里。",
      summer: "阳光正烈，海风正咸，出发吧。",
      autumn: "落英铺满小径，每一步都是归途。",
      winter: "雪落在肩头，路在脚下慢慢延伸。"
    },
    heal: {
      pageTitle: "治愈角落",
      default: "累的时候，就在这里坐一会儿吧。",
      spring: "万物都在慢慢生长，你也可以。",
      summer: "愿你像夏日一样，热烈而自由。",
      autumn: "把心事交给落叶，让它随风而去。",
      winter: "安静下来，听自己的呼吸就好。"
    },
    album: {
      pageTitle: "时光相册",
      default: "时间会走，照片替我们记得。",
      spring: "那些年的春天，被一页页封存。",
      summer: "夏天的光影，最适合被留住。",
      autumn: "每一帧秋天，都是温柔的收藏。",
      winter: "冬日的一隅，也值得被纪念。"
    },
    message: {
      pageTitle: "留言板",
      default: "说点什么吧，这里有人在听。",
      spring: "像写一张春日的明信片寄给自己。",
      summer: "想说的话，趁着阳光正好写下来。",
      autumn: "把心情折进秋天的信里。",
      winter: "天冷了，说句暖心的话吧。"
    },
    article: {
      pageTitle: "文章",
      default: "新的故事，正慢慢写到你面前。",
      spring: "在春天的字里行间，与你相遇。",
      summer: "夏日午后，读一篇就好。",
      autumn: "秋夜微凉，正适合读点什么。",
      winter: "雪夜拥炉，文字是最好的暖。"
    },
    about: {
      pageTitle: "关于",
      default: "这里没有远行，只有一颗想走走看看的心。",
      spring: "我和这个春天，都是新的。",
      summer: "热烈地生活，温柔地写字。",
      autumn: "沉淀下来的，才是自己的。",
      winter: "安静地做自己，不必赶时间。"
    },
    admin: {
      pageTitle: "后台",
      default: "悄悄说一句：辛苦啦。",
      spring: "忙碌之余，记得看看窗外的绿。",
      summer: "工作一会儿，抬头看看天。",
      autumn: "有条不紊地把事情一件件做完。",
      winter: "喝杯热茶，继续加油。"
    },
    "heal-breath": {
      pageTitle: "呼吸练习",
      default: "深呼吸，一切都会慢下来。",
      spring: "像新芽一样，慢慢舒展。",
      summer: "像海边的潮，一进一出。",
      autumn: "像落叶轻飘，不急不躁。",
      winter: "像雪落无声，静静呼吸。"
    },
    "heal-whisper": {
      pageTitle: "温柔耳语",
      default: "闭上眼睛，听一句温柔的话。",
      spring: "春天在耳边轻轻说：发芽吧。",
      summer: "夏天的风在耳边呢喃：放松些。",
      autumn: "秋天的落叶在耳边低语：放下吧。",
      winter: "冬天的雪在耳边轻声：你值得。"
    }
  },

  // 初始化 localStorage
  init() {
    if (!localStorage.getItem("blog_articles")) {
      localStorage.setItem("blog_articles", JSON.stringify(this.articles));
    }
    if (!localStorage.getItem("blog_albums")) {
      localStorage.setItem("blog_albums", JSON.stringify(this.albums));
    }
    if (!localStorage.getItem("blog_messages")) {
      localStorage.setItem("blog_messages", JSON.stringify(this.messages));
    }
    if (!localStorage.getItem("blog_music")) {
      localStorage.setItem("blog_music", JSON.stringify(this.music));
    }
    if (!localStorage.getItem("blog_settings")) {
      localStorage.setItem("blog_settings", JSON.stringify(this.settings));
    }
    // 音乐数据版本控制：版本号变化时强制刷新（避免 localStorage 缓存旧音乐）
    const MUSIC_VERSION = "v5_boli_mp3";
    if (localStorage.getItem("blog_music_version") !== MUSIC_VERSION) {
      localStorage.setItem("blog_music", JSON.stringify(this.music));
      localStorage.setItem("blog_music_version", MUSIC_VERSION);
    }
    // 站点设置版本控制：作者名等默认值变化时强制刷新
    const SETTINGS_VERSION = "v5_site_desc_yudai";
    if (localStorage.getItem("blog_settings_version") !== SETTINGS_VERSION) {
      localStorage.setItem("blog_settings", JSON.stringify(this.settings));
      localStorage.setItem("blog_settings_version", SETTINGS_VERSION);
    }
    // 文章数据版本控制：作者等默认值变化时强制刷新
    const ARTICLES_VERSION = "v4_local_images";
    if (localStorage.getItem("blog_articles_version") !== ARTICLES_VERSION) {
      localStorage.setItem("blog_articles", JSON.stringify(this.articles));
      localStorage.setItem("blog_articles_version", ARTICLES_VERSION);
    }
    // 相册数据版本控制：图片本地化后强制刷新
    const ALBUMS_VERSION = "v4_local_images";
    if (localStorage.getItem("blog_albums_version") !== ALBUMS_VERSION) {
      localStorage.setItem("blog_albums", JSON.stringify(this.albums));
      localStorage.setItem("blog_albums_version", ALBUMS_VERSION);
    }
  },

  // 重置为默认数据
  reset() {
    localStorage.setItem("blog_articles", JSON.stringify(this.articles));
    localStorage.setItem("blog_albums", JSON.stringify(this.albums));
    localStorage.setItem("blog_messages", JSON.stringify(this.messages));
    localStorage.setItem("blog_music", JSON.stringify(this.music));
    localStorage.setItem("blog_settings", JSON.stringify(this.settings));
  },

  // CRUD: 文章
  getArticles() { return JSON.parse(localStorage.getItem("blog_articles") || "[]"); },
  getArticle(id) { return this.getArticles().find(a => a.id === parseInt(id)); },

  // CRUD: 相册
  getAlbums() { return JSON.parse(localStorage.getItem("blog_albums") || "[]"); },
  getAlbum(id) { return this.getAlbums().find(a => a.id === parseInt(id)); },

  // CRUD: 留言
  getMessages(status) {
    const all = JSON.parse(localStorage.getItem("blog_messages") || "[]");
    if (status) return all.filter(m => m.status === status);
    return all;
  },
  addMessage(msg) {
    const all = JSON.parse(localStorage.getItem("blog_messages") || "[]");
    const newMsg = {
      id: Date.now(),
      name: msg.name,
      email: msg.email,
      website: msg.website || "",
      content: msg.content,
      date: new Date().toLocaleString("zh-CN", { hour12: false }),
      status: "pending",
      reply: ""
    };
    all.unshift(newMsg);
    localStorage.setItem("blog_messages", JSON.stringify(all));
    return newMsg;
  },
  updateMessageStatus(id, status) {
    const all = JSON.parse(localStorage.getItem("blog_messages") || "[]");
    const msg = all.find(m => m.id === parseInt(id));
    if (msg) {
      msg.status = status;
      localStorage.setItem("blog_messages", JSON.stringify(all));
    }
  },
  replyMessage(id, reply) {
    const all = JSON.parse(localStorage.getItem("blog_messages") || "[]");
    const msg = all.find(m => m.id === parseInt(id));
    if (msg) {
      msg.reply = reply;
      localStorage.setItem("blog_messages", JSON.stringify(all));
    }
  },
  deleteMessage(id) {
    let all = JSON.parse(localStorage.getItem("blog_messages") || "[]");
    all = all.filter(m => m.id !== parseInt(id));
    localStorage.setItem("blog_messages", JSON.stringify(all));
  },

  // CRUD: 音乐
  getMusic() { return JSON.parse(localStorage.getItem("blog_music") || "[]"); },

  // 设置
  getSettings() { return JSON.parse(localStorage.getItem("blog_settings") || "{}"); },
  updateSettings(partial) {
    const s = this.getSettings();
    const merged = Object.assign({}, s, partial);
    // 合并 social 子对象，避免被覆盖
    if (s.social && partial.social) {
      merged.social = Object.assign({}, s.social, partial.social);
    } else if (s.social) {
      merged.social = s.social;
    }
    localStorage.setItem("blog_settings", JSON.stringify(merged));
    return merged;
  },

  // 音乐 CRUD
  addMusic(item) {
    const all = this.getMusic();
    const newId = all.length ? Math.max(...all.map(m => m.id)) + 1 : 1;
    const rec = Object.assign({ id: newId, cover: "🎵" }, item);
    all.push(rec);
    localStorage.setItem("blog_music", JSON.stringify(all));
    return rec;
  },
  updateMusic(id, patch) {
    const all = this.getMusic();
    const m = all.find(x => x.id === parseInt(id));
    if (m) Object.assign(m, patch);
    localStorage.setItem("blog_music", JSON.stringify(all));
    return m;
  },
  deleteMusic(id) {
    let all = this.getMusic();
    all = all.filter(m => m.id !== parseInt(id));
    localStorage.setItem("blog_music", JSON.stringify(all));
  }
};

// ============ 旅游板块数据 ============
Object.assign(DB, {
  // 游记（旅行详情）
  travelPosts: [
    {
      id: 101,
      title: "春遇江南：苏州园林与西湖烟雨",
      cover: "assets/images/img_f5b0400d1a9a3d4e.jpg",
      excerpt: "三月的江南，园林里的红梅刚刚谢幕，桃花已迫不及待地开满了西湖岸边。一场春雨过后，整座城市像一幅水墨画。",
      content: `<p>三月中旬，我从杭州出发，坐了半小时高铁到达苏州。清晨的拙政园还没什么游客，只有鸟鸣和远处飘来的茶香。</p><p>红梅刚刚谢幕，新芽已经挂上枝头。园林里的假山、池塘、回廊，每一处都经过精心设计，一步一景。</p><h2>西湖的烟雨</h2><p>回到杭州，正赶上一场细雨。租了一条小船，在西湖上慢慢荡。远处的雷峰塔在雾里若隐若现，岸边的桃花被雨水打湿，落英缤纷。</p><blockquote>欲把西湖比西子，淡妆浓抹总相宜。</blockquote><p>傍晚去了河坊街，老字号的糕点铺前排着长队。买了一盒龙井茶酥，甜而不腻，配着西湖的夜色，刚刚好。</p>`,
      season: "spring",
      placeIds: [1, 2],
      bestTime: { months: "3月-5月", weather: "温暖多雨，平均 15-22°C", outfit: "薄外套、雨伞、轻便鞋", tips: "避开清明假期，建议工作日出行", crowd: "中等" },
      checklist: { luggage: ["雨伞", "轻薄外套", "舒适徒步鞋", "保温杯", "充电宝"], transport: ["高铁到苏州/杭州", "市内地铁+公交", "景区可步行或打车"], stay: ["推荐住观前街附近", "杭州建议住西湖边", "提前 2 周预订"], budget: { person: 1800, days: 4, items: ["住宿 500/晚", "高铁往返 300", "门票 200", "餐饮 400"] }, recommend: ["拙政园", "苏州博物馆", "西湖游船", "灵隐寺"], avoid: ["周末高峰的断桥", "长假期间的热门景区"] },
      topicIds: [201],
      views: 2340,
      date: "2026-03-25",
      status: "published"
    },
    {
      id: 102,
      title: "夏日避暑记：莫干山与千岛湖",
      cover: "assets/images/img_2b6fa47761b0e468.jpg",
      excerpt: "七月的杭州热得像蒸笼，逃去莫干山的竹林里躲了三天。千岛湖的湖水清得能看见底，是夏天最美好的样子。",
      content: `<p>七月的杭州，地表温度接近 40°C。收拾好行李，一路向北，两个小时后到达莫干山脚下。</p><p>盘山公路绕了十八弯，越往上走越凉快。到半山腰的时候，已经能听到竹林里的风声了。</p><h2>竹林里的午后</h2><p>民宿藏在竹林深处，推开窗就是满眼的绿。搬一把竹椅坐在廊下，听竹叶沙沙地响，连时间都慢了下来。</p><h2>千岛湖的蓝</h2><p>第二天去了千岛湖。湖水清得难以置信，船开过去，浪花里能看见游动的小鱼。找了一家湖边的农家乐，吃了最新鲜的鱼头汤。</p>`,
      season: "summer",
      placeIds: [3, 4],
      bestTime: { months: "6月-8月", weather: "山区凉爽，平均 22-28°C", outfit: "短袖、凉鞋、防晒衣", tips: "避开正午户外作业，多补水", crowd: "较少" },
      checklist: { luggage: ["防晒衣", "墨镜", "驱蚊液", "短袖短裤"], transport: ["自驾或包车最方便", "千岛湖游船按码头发船"], stay: ["莫干山民宿推荐竹语间", "千岛湖住环湖酒店"], budget: { person: 2500, days: 3, items: ["民宿 800/晚", "油费/包车 400", "游船门票 200", "餐饮 600"] }, recommend: ["莫干山竹海", "千岛湖中心湖区", "下渚湖湿地"], avoid: ["正午 12-14 点户外暴晒", "水库边游泳戏水"] },
      topicIds: [202],
      views: 1860,
      date: "2026-07-22",
      status: "published"
    },
    {
      id: 103,
      title: "秋日摄影：京都红叶与银杏大道",
      cover: "assets/images/img_299d211d2d2251a1.jpg",
      excerpt: "十一月的京都，红枫与银杏同时登场。清晨的岚山竹林薄雾未散，东福寺的通天桥上，红叶像一片燃烧的海。",
      content: `<p>十一月初，京都的秋天进入了最美的时节。枫叶渐红，银杏转黄，整座古都像被打翻了调色盘。</p><h2>岚山的晨雾</h2><p>清晨五点半出门，赶往岚山。到达时竹林里还飘着薄雾，阳光从竹叶缝隙里洒下来，像一束束金色的光柱。</p><h2>东福寺的红叶</h2><p>东福寺的通天桥是京都赏枫的最佳地点之一。站在桥上向下望，红叶铺满了整个山谷，红得像一片燃烧的海。</p><blockquote>停车坐爱枫林晚，霜叶红于二月花。</blockquote><h2>银杏隧道</h2><p>京都御苑外的银杏大道，落叶铺成了金色的地毯。踩上去沙沙作响，是秋天最动听的声音。</p>`,
      season: "autumn",
      placeIds: [5, 6],
      bestTime: { months: "10月下旬-11月中旬", weather: "凉爽干燥，平均 10-18°C", outfit: "薄毛衣、风衣、舒适鞋", tips: "红叶季需提前 1 个月订机票酒店", crowd: "很多" },
      checklist: { luggage: ["相机+广角镜头", "三脚架", "薄外套", "舒适步行鞋"], transport: ["关西机场-京都站 HARUKA 列车", "市内地铁+公交通票"], stay: ["推荐住京都站附近交通方便", "或祗园附近感受古都氛围"], budget: { person: 6000, days: 5, items: ["机票 2000", "住宿 800/晚", "JR Pass 300", "餐饮 1500"] }, recommend: ["岚山竹林", "东福寺通天桥", "伏见稻荷大社", "哲学之道"], avoid: ["周末热门景点人太多", "红叶核心期的清水寺"] },
      topicIds: [203],
      views: 3120,
      date: "2026-11-08",
      status: "published"
    },
    {
      id: 104,
      title: "冬日温泉行：箱根的雪与汤",
      cover: "assets/images/img_cf76ef1da259bfca.jpg",
      excerpt: "一月的箱根，白雪覆盖了整个山区。在露天温泉里看着雪花飘落，身体泡得通红，头上却顶着一片白雪——这就是冬天最极致的享受。",
      content: `<p>一月中旬，箱根迎来了今冬的第一场大雪。从东京坐小田急浪漫特快，一个半小时就到了。</p><h2>雪中的温泉</h2><p>住进一家半山腰的老旅馆。换上浴衣，踩着木屐走过雪地里的石板路，就到了露天温泉。</p><p>温泉水 42°C，身体一泡进去就红透了。头顶飘着雪花，落在脸上凉丝丝的，却化在水里变成一股暖意。</p><h2>箱根的夜</h2><p>夜晚的箱根很安静。旅馆的怀石料理一道道端上来，每一道都是艺术品。饭后在雪地里散散步，看远处的富士山被月光照亮。</p>`,
      season: "winter",
      placeIds: [7],
      bestTime: { months: "12月-2月", weather: "寒冷多雪，平均 0-8°C", outfit: "羽绒服、保暖内衣、防水靴", tips: "雪季道路可能封闭，提前查天气", crowd: "中等" },
      checklist: { luggage: ["羽绒服", "保暖内衣", "防滑靴", "帽子手套"], transport: ["东京-箱根 小田急浪漫特快", "箱根地区周游券"], stay: ["推荐住带露天温泉的日式旅馆", "提前 2 个月预订"], budget: { person: 8000, days: 4, items: ["机票 2500", "温泉旅馆 1500/晚", "箱根周游券 500", "餐饮 2000"] }, recommend: ["箱根汤本温泉街", "大涌谷火山口", "芦之湖", "强罗公园"], avoid: ["下雪天的自驾", "富士山一日游的体力透支"] },
      topicIds: [204],
      views: 2680,
      date: "2026-01-18",
      status: "published"
    },
    {
      id: 105,
      title: "春日赏花路线：云南罗平油菜花",
      cover: "assets/images/img_1c085ae85ed68c76.jpg",
      excerpt: "二月底的云南，罗平的几十万亩油菜花同时开放，像一片金色的海洋。这是春天最早到来的地方。",
      content: `<p>二月底，当北方还在飘雪的时候，云南的罗平已经是一片金黄。几十万亩油菜花同时开放，把整个山谷染成了金色。</p><p>坐上一辆农用三轮车，在花海里穿行。风吹过来，带着油菜花特有的清香，蜜蜂在耳边嗡嗡作响。</p><h2>金鸡峰丛</h2><p>站在山顶往下看，油菜花田和喀斯特地貌的小山丘交织在一起，像一幅立体的油画。</p>`,
      season: "spring",
      placeIds: [8],
      bestTime: { months: "2月-3月", weather: "温暖干燥，平均 15-25°C", outfit: "短袖+薄外套、墨镜、帽子", tips: "花期短，仅 2-3 周，要提前查", crowd: "较多" },
      checklist: { luggage: ["防晒帽", "墨镜", "防晒霜", "舒适徒步鞋"], transport: ["昆明-罗平 高铁 2 小时", "当地包车或自驾"], stay: ["罗平县城酒店", "或花海旁的农家乐"], budget: { person: 2200, days: 3, items: ["机票 800", "住宿 300/晚", "包车 300", "餐饮 400"] }, recommend: ["金鸡峰丛", "牛街螺丝田", "多依河"], avoid: ["正午暴晒", "花海里乱踩"] },
      topicIds: [201],
      views: 1420,
      date: "2026-02-28",
      status: "published"
    },
    {
      id: 106,
      title: "夏日海岛：青岛的海与啤酒",
      cover: "assets/images/img_9f9c1dd81fc4d0c3.jpg",
      excerpt: "八月的青岛，海风里都带着啤酒的香气。八大关的德式建筑在梧桐树下若隐若现，崂山的泉水清凉甘甜。",
      content: `<p>八月初的青岛，白天虽然晒，但海风一吹就凉快了。傍晚去栈桥走走，吹着海风看日落，再去啤酒屋喝一杯刚酿好的原浆。</p><h2>八大关</h2><p>八大关的德式建筑藏在高大的梧桐树下，每一栋都有故事。最值得一看的是花石楼，站在楼上可以看到整个海岸线。</p><h2>崂山</h2><p>周末去了崂山。山里的泉水清凉甘甜，比瓶装水还好喝。爬到明霞洞，俯瞰山下的大海，蓝得发绿。</p>`,
      season: "summer",
      placeIds: [9, 10],
      bestTime: { months: "7月-9月", weather: "温暖湿润，平均 23-30°C", outfit: "短袖、凉鞋、防晒", tips: "啤酒节期间住宿紧张", crowd: "较多" },
      checklist: { luggage: ["防晒霜", "泳衣", "沙滩鞋", "薄外套"], transport: ["飞机到青岛流亭机场", "市内地铁+公交", "崂山景区大巴"], stay: ["推荐住市南区靠近海边", "提前 1 周预订"], budget: { person: 2000, days: 4, items: ["机票 700", "住宿 400/晚", "门票 300", "餐饮 500"] }, recommend: ["八大关", "栈桥", "崂山", "啤酒博物馆"], avoid: ["啤酒节期间的天价酒店", "海边露营过夜"] },
      topicIds: [202],
      views: 1150,
      date: "2026-08-10",
      status: "published"
    },
    // ============ 新增：中国大好河山 ============
    {
      id: 107,
      title: "黄山奇松：云海之中的仙境",
      cover: "assets/images/img_a6a6103e82bbf4af.jpg",
      excerpt: "黄山归来不看岳。奇松、怪石、云海、温泉，春光明媚时的黄山，每一刻都像一幅流动的水墨画。",
      content: `<p>三月底，趁着清明前的空窗期登上黄山。山下已经春暖花开，山上还留着几分冬的寒意。</p><p>坐云谷寺索道上山，穿过一片松林，眼前豁然开朗——西海大峡谷的云海像一片白色的海洋，山峰从云中探出头来，像海中的岛屿。</p><h2>迎客松</h2><p>玉屏楼旁的迎客松已经在这里等了一千多年。它伸出长长的臂膀，像一位好客的主人，迎接每一位远道而来的客人。</p><blockquote>五岳归来不看山，黄山归来不看岳。</blockquote><h2>光明顶的日出</h2><p>住在光明顶的酒店，凌晨四点半就爬起来等日出。风很大，裹着冲锋衣还是冷。当红橙橙的太阳从云海里跳出来的那一刻，一切都值了。</p><h2>山间的杜鹃花</h2><p>下山的时候，路边的杜鹃花开得正好。粉色的、紫色的、白色的，在云雾里格外娇艳。</p>`,
      season: "spring",
      placeIds: [11, 12],
      bestTime: { months: "3月-5月", weather: "山上温度偏低，山下 15-22°C", outfit: "冲锋衣、保暖内衣、防滑登山鞋", tips: "避开周末和节假日，建议工作日入住山顶", crowd: "较多" },
      checklist: { luggage: ["冲锋衣", "保暖层", "防滑登山鞋", "登山杖", "充电宝", "雨衣"], transport: ["合肥/黄山北站高铁", "汤口镇景区大巴", "山上索道往返"], stay: ["推荐住光明顶或白云宾馆", "提前 1 个月预订", "多人间床位实惠"], budget: { person: 2200, days: 2, items: ["高铁往返 300", "门票+索道 400", "住宿 800", "餐饮 400"] }, recommend: ["西海大峡谷", "光明顶日出", "迎客松", "翡翠谷"], avoid: ["雨天登山", "节假日山上住宿"] },
      topicIds: [201, 205],
      views: 4560,
      date: "2026-04-02",
      status: "published"
    },
    {
      id: 108,
      title: "桂林山水：漓江之上的水墨画",
      cover: "assets/images/img_8d4c43d32439dee5.jpg",
      excerpt: "桂林山水甲天下。坐竹筏游漓江，两岸的喀斯特奇峰倒映在碧绿的江面上，像一幅会动的中国山水画。",
      content: `<p>三月的桂林，烟雨蒙蒙。从杨堤码头坐上竹筏，顺漓江而下，九马画山、黄布倒影、兴坪古镇，一路好山好水。</p><p>漓江的水绿得像翡翠，两岸的山峰奇得像是被神仙用刀削出来的。最经典的黄布倒影，就是二十元人民币背面的图案。</p><h2>遇龙河</h2><p>比漓江更安静的是遇龙河。骑着自行车沿着河岸慢慢走，路过一座座小桥和炊烟袅袅的小村庄。</p><h2>龙脊梯田</h2><p>从桂林市区坐两个半小时的车，就到了龙脊梯田。三月的梯田里灌满了水，在阳光下像一面面闪光的镜子。</p>`,
      season: "spring",
      placeIds: [13, 14],
      bestTime: { months: "3月-5月", weather: "温暖湿润，平均 18-25°C", outfit: "短袖+薄外套、凉鞋、防晒", tips: "漓江竹筏需提前预订，龙脊梯田山路崎岖", crowd: "较多" },
      checklist: { luggage: ["防晒霜", "帽子", "墨镜", "舒适徒步鞋", "便携雨披"], transport: ["飞机到桂林两江机场", "市区到杨堤码头包车", "龙脊梯田景区大巴"], stay: ["桂林市区酒店", "阳朔西街附近民宿", "龙脊梯田山顶客栈"], budget: { person: 3000, days: 4, items: ["机票 1200", "住宿 400/晚", "漓江竹筏 200", "餐饮 500"] }, recommend: ["漓江漂流", "遇龙河骑行", "龙脊梯田", "西街夜游"], avoid: ["旺季漓江漂流人多", "龙脊梯田雷雨天"] },
      topicIds: [201, 205],
      views: 3890,
      date: "2026-03-15",
      status: "published"
    },
    {
      id: 109,
      title: "九寨沟：人间的瑶池仙境",
      cover: "assets/images/img_5882651c54f75aad.jpg",
      excerpt: "如果说世界上有仙境，那一定是九寨沟。五彩池、五花海、诺日朗瀑布——每一个画面都让人屏住呼吸。",
      content: `<p>十月中旬的九寨沟，是一年中最美的时刻。湖水呈现出蓝、绿、青、黄、橙等多种颜色，像打翻了上帝的调色盘。</p><h2>五花海</h2><p>五花海是九寨沟的精华。站在观景台上往下看，湖水清澈见底，水下的枯木和藻类清晰可见，五彩斑斓。</p><h2>诺日朗瀑布</h2><p>宽 270 米的诺日朗瀑布，是九寨沟最壮观的瀑布。水流从高处飞泻而下，溅起漫天水雾。</p><h2>长海</h2><p>长海是九寨沟最长最深的湖泊，四周是皑皑雪山和原始森林，湖水蓝得像宝石。</p>`,
      season: "autumn",
      placeIds: [15],
      bestTime: { months: "10月中旬-11月上旬", weather: "凉爽干燥，平均 5-15°C", outfit: "冲锋衣、保暖内衣、舒适徒步鞋", tips: "需提前 1 周网上预约，每天限 4 万人", crowd: "很多" },
      checklist: { luggage: ["冲锋衣", "保暖层", "徒步鞋", "防晒霜(高原)", "身份证"], transport: ["成都-九寨沟 大巴 8 小时 或 九黄机场", "景区内观光车"], stay: ["九寨沟口酒店", "或川主寺镇"], budget: { person: 3500, days: 4, items: ["机票/大巴 1000", "住宿 400/晚", "门票+观光车 160", "餐饮 500"] }, recommend: ["五花海", "诺日朗瀑布", "长海", "五彩池"], avoid: ["不预约直接前往", "景区内乱刻乱画"] },
      topicIds: [203, 206],
      views: 5230,
      date: "2026-10-18",
      status: "published"
    },
    {
      id: 110,
      title: "张家界：三千奇峰拔地而起",
      cover: "assets/images/img_205d1bc9ccec9ae6.jpg",
      excerpt: "三千奇峰，八百秀水。张家界的石英砂岩峰林地貌，是《阿凡达》悬浮山的原型，站在山顶真的会腿软。",
      content: `<p>八月的张家界，山还是绿的，云海不时在山峰间涌动。袁家界的迷魂台、天子山的御笔峰、金鞭溪的潺潺流水，每一处都震撼人心。</p><h2>袁家界</h2><p>最期待的就是哈利路亚山——电影《阿凡达》里悬浮山的原型。当那根三百米高的石柱出现在眼前时，所有人都只会说一句话：哇！</p><h2>天门山</h2><p>天门山的九十九道弯盘山公路，是中国最险的公路之一。坐索道上山，再走玻璃栈道，全程心跳加速。</p><h2>雨后的张家界</h2><p>雨后初晴的张家界，云海在山峰间翻涌，真的像到了仙境。</p>`,
      season: "summer",
      placeIds: [16, 17],
      bestTime: { months: "6月-9月", weather: "山区凉爽，平均 20-28°C", outfit: "短袖+薄外套、防滑鞋、雨衣", tips: "雨后能见度最高，避开正午暴晒", crowd: "较多" },
      checklist: { luggage: ["防滑登山鞋", "薄外套", "雨衣", "防蚊液", "相机"], transport: ["飞机到张家界荷花机场", "市区到景区大巴", "景区索道+观光车"], stay: ["武陵源景区门口酒店", "或森林公园内"], budget: { person: 2800, days: 3, items: ["机票 900", "住宿 400/晚", "门票+索道 800", "餐饮 500"] }, recommend: ["袁家界", "天子山", "金鞭溪", "天门山"], avoid: ["玻璃栈道恐高者慎入", "雨季山间落石"] },
      topicIds: [202, 206],
      views: 4120,
      date: "2026-08-05",
      status: "published"
    },
    {
      id: 111,
      title: "大理洱海：风花雪月的浪漫",
      cover: "assets/images/img_5c1fb069a1ba7775.jpg",
      excerpt: "下关风、上关花、苍山雪、洱海月。在大理，时间是慢的。租一辆自行车，沿着洱海边慢慢晃，风会告诉你这里有多好。",
      content: `<p>七月的大理，阳光灿烂，洱海蓝得发光。从古城租了一辆山地车，沿着环海西路出发。</p><h2>环海西路</h2><p>环海西路是大理最经典的骑行路线。一边是清澈的洱海，一边是白族特色的民居。路过喜洲古镇时，忍不住停下来吃了一块现烤的喜洲粑粑。</p><h2>双廊古镇</h2><p>双廊是洱海边的网红小镇，各种风格的民宿开满了海边。找一家咖啡馆坐坐，望着洱海发呆。</p><h2>苍山</h2><p>坐感通索道上苍山，山顶还有积雪！从苍山上俯瞰洱海，蓝得像一块巨大的蓝宝石。</p>`,
      season: "summer",
      placeIds: [18],
      bestTime: { months: "4月-10月", weather: "四季如春，平均 15-28°C", outfit: "短袖+薄外套、防晒、凉鞋", tips: "紫外线强烈，务必防晒", crowd: "很多" },
      checklist: { luggage: ["高倍防晒霜", "墨镜", "帽子", "薄外套", "自行车"], transport: ["飞机到大理凤仪机场", "古城到各点打车", "环海西路骑行"], stay: ["大理古城民宿", "双廊海景民宿", "喜洲古镇客栈"], budget: { person: 2800, days: 5, items: ["机票 1000", "住宿 300/晚", "门票+索道 200", "餐饮 500"] }, recommend: ["环海西路骑行", "苍山索道", "喜洲古镇", "双廊看日落"], avoid: ["正午紫外线暴晒", "环海东路节假日堵车"] },
      topicIds: [202],
      views: 3580,
      date: "2026-07-12",
      status: "published"
    },
    {
      id: 112,
      title: "稻城亚丁：最后的香格里拉",
      cover: "assets/images/img_a8a12f0e71b1eb8c.jpg",
      excerpt: "从你的全世界路过。稻城亚丁，这个地球上最后一片净土，雪山、湖泊、森林、草甸，一切都是最纯粹的颜色。",
      content: `<p>十月的稻城亚丁，秋意正浓。从香格里拉镇出发，坐景区大巴进入亚丁村，沿途的景色已经美得让人尖叫。</p><h2>三神山</h2><p>仙乃日、央迈勇、夏诺多吉，三座神山呈品字形排列，山顶终年积雪，在阳光下闪着金光。</p><h2>五色海</h2><p>徒步 4 小时到达五色海，海拔 4700 米。高反让我每走一步都喘，但看到五色海的那一刻，眼泪差点掉下来——这是上帝打翻的颜料盘吧。</p><h2>牛奶海</h2><p>牛奶海像一块蓝绿色的宝石，镶嵌在雪山之间。旁边的央迈勇神山倒映在水中，像一幅画。</p>`,
      season: "autumn",
      placeIds: [19],
      bestTime: { months: "9月下旬-10月下旬", weather: "气温低，平均 -5-12°C", outfit: "羽绒服、保暖内衣、登山鞋、氧气瓶", tips: "海拔 4000+，需提前服抗高反药", crowd: "较多" },
      checklist: { luggage: ["羽绒服", "冲锋衣", "登山鞋", "氧气瓶", "抗高反药", "墨镜(雪盲)"], transport: ["成都-稻城亚丁 飞机 2 小时 或 大巴 12 小时", "香格里拉镇-景区大巴"], stay: ["香格里拉镇酒店(海拔低)", "或亚丁村客栈(海拔高)"], budget: { person: 5000, days: 4, items: ["机票 2000", "住宿 400/晚", "门票+观光车 270", "餐饮 600"] }, recommend: ["五色海", "牛奶海", "珍珠海", "冲古寺"], avoid: ["不服用抗高反药直接前往", "剧烈运动后洗澡"] },
      topicIds: [203, 206],
      views: 4890,
      date: "2026-10-25",
      status: "published"
    },
    {
      id: 113,
      title: "哈尔滨冰雪大世界：冬日的童话",
      cover: "assets/images/img_819dbd112d2e2a6b.jpg",
      excerpt: "零下三十度的哈尔滨，却有全世界最温暖的冬天。冰雪大世界里的冰雕在彩灯下闪闪发光，像走进了童话世界。",
      content: `<p>一月的哈尔滨，冷得呼出的气都能变成雾。但当我走进冰雪大世界的那一刻，还是被震撼到了——几百座冰雕在彩灯下熠熠生辉。</p><h2>主冰雕</h2><p>主冰雕用了上万吨的东北大冰块，雕刻成一座座城堡和宫殿。站在下面，真的像童话里的冰雪王国。</p><h2>松花江</h2><p>松花江上已经结了厚厚的冰，有人在上面滑冰、坐冰滑梯、玩冰爬犁。零下三十度的天气里，玩得满头大汗。</p><h2>中央大街</h2><p>中央大街上的欧式建筑挂满了冰雕和彩灯，买一根马迭尔冰棍，在雪地里边走边吃，这才是冬天该有的样子。</p>`,
      season: "winter",
      placeIds: [20],
      bestTime: { months: "12月-2月", weather: "严寒，平均 -25 至 -10°C", outfit: "羽绒服、保暖内衣、防水靴、帽子手套面罩", tips: "保暖第一，电子产品注意防冻", crowd: "很多" },
      checklist: { luggage: ["超厚羽绒服", "保暖内衣", "防水防滑靴", "雷锋帽+面罩", "暖宝宝", "手机暖贴"], transport: ["飞机到哈尔滨太平机场", "市区打车/地铁", "冰雪大世界专线车"], stay: ["中央大街附近酒店", "方便看冰雕和逛大街"], budget: { person: 3200, days: 3, items: ["机票 1500", "住宿 400/晚", "冰雪大世界门票 300", "餐饮 500"] }, recommend: ["冰雪大世界", "中央大街", "索菲亚教堂", "松花江", "雪乡"], avoid: ["长时间户外暴露冻伤", "雪乡天价民宿"] },
      topicIds: [204, 207],
      views: 4210,
      date: "2026-01-25",
      status: "published"
    },
    {
      id: 114,
      title: "长白山天池：冰封的蓝宝石",
      cover: "assets/images/img_5d06378c939ba99e.jpg",
      excerpt: "冬天的长白山天池，完全封冻了。站在火山口边缘往下看，整个湖面变成了一块巨大的蓝冰，像上帝的蓝宝石。",
      content: `<p>一月底，顶着零下三十度的严寒登上长白山。坐越野车上天池的山路像在冰面上漂移，每一个弯道都让人捏一把汗。</p><h2>天池</h2><p>终于爬到天池边，我惊呆了——整个湖面都冻住了！蓝冰在阳光下闪着幽蓝色的光，周围是一圈白皑皑的雪山，壮观得无法形容。</p><h2>温泉</h2><p>天池边有几个天然温泉，零下三十度的天气里冒着热气。把冻红的手伸进去，瞬间舒服了。</p><h2>魔界风景区</h2><p>长白山脚下的魔界风景区，冬天的清晨，河水冒着热气，两岸的树木挂满了雾凇，真的像魔界一样。</p>`,
      season: "winter",
      placeIds: [21],
      bestTime: { months: "12月-2月", weather: "极寒，山顶 -35 至 -20°C", outfit: "最厚羽绒服、防风裤、登山靴、面罩", tips: "上山前查天气，大风天可能封山", crowd: "中等" },
      checklist: { luggage: ["顶级羽绒服", "防风裤", "防水登山靴", "面罩+护目镜", "暖宝宝(多带)", "高热量零食"], transport: ["飞机到长白山机场", "机场-北坡景区包车", "北坡-天池越野车"], stay: ["二道白河镇酒店", "或长白山脚下温泉酒店"], budget: { person: 3500, days: 3, items: ["机票 1500", "住宿 400/晚", "门票+越野车 500", "餐饮 500"] }, recommend: ["天池北坡", "魔界风景区", "聚龙泉温泉", "雪岭"], avoid: ["大风天上山封路", "冰面行走打滑"] },
      topicIds: [204, 207],
      views: 3670,
      date: "2026-02-08",
      status: "published"
    },
    {
      id: 115,
      title: "武夷山：丹山碧水甲东南",
      cover: "assets/images/img_4df74cb9fda1c9a6.jpg",
      excerpt: "武夷山的丹霞地貌独步天下。三十六峰、七十二洞、九九曲溪，坐竹筏在九曲溪上漂一天，看山看水看茶园。",
      content: `<p>四月的武夷山，正是采茶季。漫山遍野的茶树刚冒出新芽，空气里都是淡淡的茶香。</p><h2>九曲溪竹筏</h2><p>九曲溪是武夷山的灵魂。坐竹筏从星村码头顺流而下，九公里长的溪流绕着三十六峰，每一弯都有不同的风景。</p><h2>天游峰</h2><p>天游峰是武夷山的制高点。爬上去俯瞰，九曲溪像一条碧绿的玉带在峰林间蜿蜒。</p><h2>大红袍茶园</h2><p>母树大红袍长在悬崖边上，已经有三百多年历史。采茶季来到武夷，一定要喝一杯正宗的大红袍。</p>`,
      season: "spring",
      placeIds: [22],
      bestTime: { months: "3月-5月 / 9月-11月", weather: "温暖湿润，平均 15-25°C", outfit: "薄外套、徒步鞋、防晒", tips: "避开五一十一黄金周", crowd: "中等" },
      checklist: { luggage: ["徒步鞋", "薄外套", "帽子", "防晒霜", "保温杯"], transport: ["飞机到武夷山机场", "或高铁到武夷山东站", "市区到景区大巴"], stay: ["武夷山景区门口酒店", "市区三姑度假区"], budget: { person: 2200, days: 3, items: ["高铁 500", "住宿 400/晚", "门票+竹筏 400", "餐饮 400"] }, recommend: ["九曲溪竹筏", "天游峰", "大红袍景区", "印象大红袍演出"], avoid: ["节假日九曲溪排队", "雨天登山滑"] },
      topicIds: [201, 205],
      views: 2890,
      date: "2026-04-18",
      status: "published"
    },
    {
      id: 116,
      title: "香格里拉：消失的地平线",
      cover: "assets/images/img_fb5fa475788da697.jpg",
      excerpt: "《消失的地平线》里描述的世外桃源。松赞林寺的金顶在阳光下闪闪发光，普达措的草甸上开满了野花，纳帕海的湖水蓝得像梦。",
      content: `<p>九月的香格里拉，草甸已经开始变黄，但普达措国家公园里的野花还在怒放。</p><h2>松赞林寺</h2><p>松赞林寺是云南最大的藏传佛教寺院，有"小布达拉宫"之称。金顶在阳光下闪着光，转经筒在风中缓缓转动。</p><h2>普达措国家公园</h2><p>普达措海拔 3700 米，是世界自然遗产。属都湖、碧塔海、弥里塘亚高山牧场，每一帧都是大片。</p><h2>独克宗古城</h2><p>独克宗古城保留着茶马古道的原貌，晚上去大转经筒转三圈，感受一下藏地的虔诚。</p>`,
      season: "autumn",
      placeIds: [23],
      bestTime: { months: "9月-11月", weather: "凉爽干燥，平均 5-15°C", outfit: "冲锋衣、保暖层、徒步鞋", tips: "海拔高，不要剧烈运动，多休息多喝水", crowd: "中等" },
      checklist: { luggage: ["冲锋衣", "保暖内衣", "徒步鞋", "抗高反药", "太阳镜", "防晒霜"], transport: ["昆明-香格里拉 大巴 10 小时 或 飞机 1 小时", "县城到各景点包车"], stay: ["独克宗古城客栈", "或松赞林寺附近酒店"], budget: { person: 3800, days: 4, items: ["机票 1200", "住宿 400/晚", "门票 300", "餐饮 500"] }, recommend: ["松赞林寺", "普达措", "纳帕海", "独克宗古城"], avoid: ["海拔高不注意休息", "独克宗古城坡度大"] },
      topicIds: [203, 206],
      views: 3240,
      date: "2026-09-20",
      status: "published"
    },
    // ============ 新增：网红景点 ============
    {
      id: 117,
      title: "故宫六百年：紫禁城的雪与光",
      cover: "assets/images/img_efeeaa9cb2f5ce77.jpg",
      excerpt: "六百年的紫禁城，一场雪就变回了北平。红墙白雪、黄瓦红灯，每一张照片都是刷屏级的大片。",
      content: `<p>一月的北京终于下了一场像样的雪。凌晨五点半起床，六点多赶到午门，已经有摄影师在等了。</p><h2>雪后的故宫</h2><p>雪把红墙衬得更红，把黄瓦盖成了白色。角楼在雪地里格外好看，护城河结了冰，映着对面的白塔。</p><h2>珍宝馆</h2><p>珍宝馆里的展品让人眼花缭乱——金质的编钟、翡翠的白菜、田黄的印章，每一件都是国宝。</p><blockquote>一座紫禁城，半部中国史。</blockquote><h2>夜游故宫</h2><p>故宫博物院偶尔会开夜游专场，灯光打在古建筑上，美轮美奂。可惜一票难求，得靠秒杀。</p>`,
      season: "winter",
      placeIds: [24, 25],
      bestTime: { months: "12月-2月(雪) / 10月-11月(秋)", weather: "冬季寒冷 -10 至 5°C", outfit: "羽绒服、保暖内衣、防滑鞋", tips: "提前 7 天官网预约，周一闭馆", crowd: "很多" },
      checklist: { luggage: ["证件(必带)", "保暖衣物", "充电宝", "舒适徒步鞋"], transport: ["地铁1号线天安门东站C口", "步行10分钟到午门"], stay: ["王府井/前门附近酒店", "方便第二天早起"], budget: { person: 1500, days: 2, items: ["门票 60", "珍宝馆 10", "高铁往返 300", "住宿 400/晚"] }, recommend: ["午门", "三大殿", "珍宝馆", "景山公园看全景"], avoid: ["不预约直接去", "穿高跟鞋走路"] },
      topicIds: [204, 208],
      views: 6780,
      date: "2026-02-12",
      status: "published"
    },
    {
      id: 118,
      title: "万里长城：不到长城非好汉",
      cover: "assets/images/img_3024452a3e0065e2.jpg",
      excerpt: "不到长城非好汉。慕田峪的秋色最美，八达岭最经典，箭扣最险峻——三段长城三种味道。",
      content: `<p>十月底的慕田峪，层林尽染。长城顺着山脊蜿蜒，消失在远方的云雾里，真的像一条金色的巨龙。</p><h2>慕田峪</h2><p>慕田峪长城是最适合普通游客的——缆车直达中间，往上爬有好汉坡，往下走可以坐滑道。</p><h2>箭扣长城</h2><p>箭扣长城是摄影师的最爱。它未经修缮，保持着原汁原味的沧桑感。但爬起来真的很险，有几处要手脚并用。</p><h2>八达岭</h2><p>八达岭最经典，也是人最多的。如果只去过一次长城，那一定是八达岭。</p>`,
      season: "autumn",
      placeIds: [26],
      bestTime: { months: "9月下旬-11月", weather: "秋高气爽 5-18°C", outfit: "冲锋衣、舒适登山鞋", tips: "避开周末和黄金周", crowd: "较多" },
      checklist: { luggage: ["登山鞋", "薄外套", "防晒", "帽子", "水"], transport: ["北京北站S2线到八达岭", "或慕田峪直通车"], stay: ["北京市区酒店", "当天往返即可"], budget: { person: 500, days: 1, items: ["门票 40", "缆车 80", "车费 50", "餐饮 100"] }, recommend: ["慕田峪", "箭扣", "八达岭", "居庸关"], avoid: ["冬天结冰爬箭扣", "穿皮鞋长城"] },
      topicIds: [203, 208],
      views: 5340,
      date: "2026-10-30",
      status: "published"
    },
    {
      id: 119,
      title: "西安兵马俑：世界第八大奇迹",
      cover: "assets/images/img_fdda572c46953364.jpg",
      excerpt: "地下两千两百年。当考古工作者把最后一尊兵马俑从黄土里挖出来时，整个世界都屏住了呼吸。",
      content: `<p>三月的西安，春暖花开。兵马俑景区人山人海，但当我挤到一号坑前的那一刻，所有人都安静了——眼前是上千尊兵马俑，整齐列阵，气势如虹。</p><h2>一号坑</h2><p>一号坑是最大的，有六千多尊兵马俑。他们的脸每一张都不一样，考古学家说他们是照着真实的士兵做的。</p><h2>秦始皇陵</h2><p>兵马俑只是秦始皇陵的冰山一角。整个皇陵占地 56 平方公里，据探测里面还有江河湖海，以水银为水。</p><h2>大唐不夜城</h2><p>晚上去大唐不夜城，穿着汉服的小姐姐随处可见。不倒翁、灯光秀、美食街，一直热闹到半夜。</p>`,
      season: "spring",
      placeIds: [27, 28],
      bestTime: { months: "3月-5月 / 9月-11月", weather: "温暖 15-25°C", outfit: "普通春装、舒适鞋", tips: "提前网上买票 比现场便宜", crowd: "很多" },
      checklist: { luggage: ["舒适鞋", "防晒霜", "帽子", "充电宝"], transport: ["西安北站地铁到华清池", "再转景区大巴"], stay: ["西安市内酒店", "方便逛市区美食"], budget: { person: 2200, days: 3, items: ["门票 120", "高铁 500", "住宿 300/晚", "餐饮 500"] }, recommend: ["兵马俑", "秦始皇陵", "大雁塔", "大唐不夜城", "回民街"], avoid: ["景区门口黑导游", "节假日中午人最多"] },
      topicIds: [201, 208],
      views: 5890,
      date: "2026-03-22",
      status: "published"
    },
    {
      id: 120,
      title: "重庆洪崖洞：千与千寻的现实版",
      cover: "assets/images/hongyadong.jpg",
      excerpt: "宫崎骏《千与千寻》里的汤屋，在重庆有了现实版。晚上开灯的洪崖洞，就是二次元走进了三次元。",
      content: `<p>晚上八点，洪崖洞的灯突然全亮了。那一刻我真的以为自己走进了《千与千寻》的世界——吊脚楼层层叠叠，红灯笼挂满每一层，远处的长江和千厮门大桥流光溢彩。</p><h2>李子坝轻轨</h2><p>来重庆必看的景观——轻轨穿楼而过！李子坝站的二楼是站台，八楼是住户，轻轨每天从中间穿过 140 次。</p><h2>解放碑 & 鹅岭</h2><p>解放碑是重庆的中心，鹅岭是俯瞰重庆夜景的最佳地点。</p><h2>重庆火锅</h2><p>来了重庆不吃火锅，等于白来。推荐去社区里的老火锅，味道最正宗。</p>`,
      season: "autumn",
      placeIds: [29],
      bestTime: { months: "9月-11月", weather: "凉爽湿润 18-26°C", outfit: "薄外套、轻便鞋", tips: "洪崖洞晚上 8 点开灯最漂亮", crowd: "很多" },
      checklist: { luggage: ["轻便鞋(爬坡多)", "薄外套", "充电宝", "伞"], transport: ["江北机场地铁3号线", "市内地铁方便", "打车也可"], stay: ["解放碑附近酒店", "方便逛市区"], budget: { person: 2500, days: 3, items: ["机票 800", "住宿 400/晚", "餐饮 800(火锅为主)", "门票 100"] }, recommend: ["洪崖洞", "李子坝", "鹅岭二厂", "解放碑", "磁器口"], avoid: ["洪崖洞节假日人挤爆", "夏天四十度热死人"] },
      topicIds: [203],
      views: 7230,
      date: "2026-09-18",
      status: "published"
    },
    {
      id: 121,
      title: "成都大熊猫基地：萌宠暴击",
      cover: "assets/images/img_6eaab5eb93cf71e4.jpg",
      excerpt: "大熊猫是中国的顶流明星。在成都熊猫基地，你可以近距离看到它们吃竹子、打滚、打架、卖萌，心都要化了。",
      content: `<p>早上七点半就赶到熊猫基地，一进门就看到几只大熊猫在竹林里啃竹子。圆滚滚的身体，黑溜溜的眼圈，怎么看都看不够。</p><h2>幼年大熊猫别墅</h2><p>最萌的是幼年大熊猫！它们在别墅里爬梯子、打滑梯、互相扑倒，像一群幼儿园的小朋友。</p><h2>四川美食</h2><p>看完熊猫去市区吃火锅、串串香、担担面、钟水饺……成都真的是美食天堂。</p><h2>宽窄巷子 & 锦里</h2><p>这两个地方人很多很商业化，但体验一下老成都的氛围还是值得的。</p>`,
      season: "spring",
      placeIds: [30, 31],
      bestTime: { months: "3月-5月(熊猫最活跃)", weather: "温暖湿润 15-25°C", outfit: "薄外套、舒适鞋、防蚊液", tips: "早上 7:30 前入园熊猫最活跃", crowd: "很多" },
      checklist: { luggage: ["舒适鞋", "防蚊液", "帽子", "防晒霜", "充电宝"], transport: ["机场地铁7号线到熊猫基地", "或打车"], stay: ["春熙路/太古里附近酒店", "方便吃美食"], budget: { person: 2800, days: 3, items: ["机票 800", "住宿 400/晚", "餐饮 800", "门票 55"] }, recommend: ["大熊猫基地", "宽窄巷子", "锦里", "杜甫草堂", "乐山/都江堰"], avoid: ["中午熊猫在睡觉不出来", "景区周边高价熊猫玩具"] },
      topicIds: [201],
      views: 6120,
      date: "2026-04-12",
      status: "published"
    },
    {
      id: 122,
      title: "厦门鼓浪屿：海上花园",
      cover: "assets/images/img_28d0cb204ee54b06.jpg",
      excerpt: "厦门鼓浪屿，一座没有汽车的小岛。一百多年的老别墅、到处都是的钢琴声、海边的落日，美得像一幅油画。",
      content: `<p>四月的厦门，气温刚刚好。从东渡邮轮码头坐二十分钟船，就到了鼓浪屿。</p><h2>日光岩</h2><p>爬上日光岩，整个厦门湾尽收眼底。红瓦绿树、碧海蓝天，拍照绝佳。</p><h2>菽庄花园</h2><p>菽庄花园是鼓浪屿最漂亮的私人花园，依海而建，亭台楼阁与大海相映成趣。里面还有一个钢琴博物馆。</p><h2>环岛路骑行</h2><p>回到厦门岛，租一辆自行车在环岛路上慢慢骑。海风拂面，椰影婆娑。</p>`,
      season: "spring",
      placeIds: [32, 33],
      bestTime: { months: "3月-5月 / 10月-11月", weather: "温暖舒适 20-28°C", outfit: "短袖+薄外套、凉鞋、防晒", tips: "船票提前 1 天微信预约", crowd: "很多" },
      checklist: { luggage: ["防晒霜", "帽子", "墨镜", "轻便鞋", "充电宝"], transport: ["飞机到厦门高崎机场", "码头坐船到鼓浪屿", "环岛路骑行"], stay: ["鼓浪屿民宿", "或厦门岛海边酒店"], budget: { person: 3500, days: 4, items: ["机票 1000", "住宿 400/晚", "船票 35", "餐饮 600"] }, recommend: ["日光岩", "菽庄花园", "环岛路", "沙坡尾", "曾厝垵"], avoid: ["鼓浪屿节假日船票秒没", "网红店价格虚高"] },
      topicIds: [201],
      views: 4560,
      date: "2026-04-08",
      status: "published"
    },
    {
      id: 123,
      title: "三亚蜈支洲岛：中国的马尔代夫",
      cover: "assets/images/img_6443bab9d5a4d104.jpg",
      excerpt: "蜈支洲岛的海水蓝得发绿，能见度极高。浮潜能看到五彩的珊瑚和热带鱼，潜水能看见海龟和沉船。",
      content: `<p>一月的三亚，还是 28 度。从后海码头坐二十分钟快艇，就到了蜈支洲岛。</p><h2>潜水</h2><p>蜈支洲岛是中国最好的潜水地之一。水肺潜下水 10 米，能看到五彩的珊瑚礁、成群的热带鱼，还有一只慢悠悠的海龟。</p><h2>环岛游</h2><p>坐电瓶车环岛一周，情人桥、观日岩、妈祖庙，每一个点都值得停一停。</p><h2>亚龙湾</h2><p>回到三亚岛，亚龙湾的沙滩又白又细，海水清澈见底。比基尼小姐姐们在海滩上晒太阳。</p>`,
      season: "winter",
      placeIds: [34, 35],
      bestTime: { months: "10月-次年4月", weather: "温暖 22-28°C", outfit: "泳衣、防晒衣、拖鞋、墨镜", tips: "避开春节和国庆黄金周", crowd: "很多" },
      checklist: { luggage: ["泳衣", "高倍防晒", "墨镜", "防水手机袋", "浮潜装备"], transport: ["飞机到三亚凤凰机场", "市区到蜈支洲岛码头包车", "快艇上岛"], stay: ["蜈支洲岛酒店或三亚亚龙湾", "提前 1 个月预订"], budget: { person: 5000, days: 5, items: ["机票 2000", "住宿 800/晚", "潜水 380", "餐饮 800"] }, recommend: ["蜈支洲岛", "亚龙湾", "天涯海角", "南山寺", "后海冲浪"], avoid: ["冬天蜈支洲岛风浪大停航", "春节三亚一房难求"] },
      topicIds: [204],
      views: 5010,
      date: "2026-01-08",
      status: "published"
    },
    {
      id: 124,
      title: "湖南凤凰古城：中国最美小城",
      cover: "assets/images/img_15cd325e422dff2d.jpg",
      excerpt: "沈从文笔下的边城。沱江边的吊脚楼、夜晚的红灯笼、穿着苗族服饰的阿妹——凤凰是最温柔的中国小城。",
      content: `<p>十一月的凤凰，气温舒适。傍晚时分，沱江边的灯笼一盏盏亮起来，倒映在水中，像一条流动的星河。</p><h2>沱江</h2><p>坐一叶小舟在沱江上漂，船夫一边划桨一边唱山歌。两岸的吊脚楼已经有几百年历史了。</p><h2>老街</h2><p>老街不大，石板路磨得发亮。有卖苗族银饰的、有卖姜糖的、有背着篓子卖橘子的苗族阿婆。</p><h2>周边</h2><p>可以加上张家界一起玩——从凤凰坐汽车四个半小时就到。</p>`,
      season: "autumn",
      placeIds: [36],
      bestTime: { months: "3月-5月 / 9月-11月", weather: "舒适 15-25°C", outfit: "薄外套、轻便鞋", tips: "避开十一黄金周", crowd: "较多" },
      checklist: { luggage: ["轻便鞋", "薄外套", "充电宝", "小包包"], transport: ["飞机到铜仁机场 转汽车2小时", "或怀化高铁 转汽车2小时"], stay: ["古城内民宿", "临江的最好看"], budget: { person: 2500, days: 3, items: ["交通 800", "住宿 400/晚", "餐饮 500", "门票 148"] }, recommend: ["沱江泛舟", "沈从文故居", "南华山", "苗族银饰博物馆"], avoid: ["古城外高价酒店", "黄金周暴涨"] },
      topicIds: [203, 208],
      views: 3890,
      date: "2026-11-15",
      status: "published"
    },
    {
      id: 125,
      title: "贵州黄果树瀑布：亚洲第一瀑",
      cover: "assets/images/img_17872e79b6e89620.jpg",
      excerpt: "黄果树瀑布高 77.8 米，宽 101 米，是亚洲最大的瀑布。丰水期的水流量巨大，站在瀑布背后，水声震耳欲聋。",
      content: `<p>七月是黄果树的丰水期。远远就能听到水声，走近一看，一条巨大的白练从山顶砸下来，激起漫天水雾。</p><h2>水帘洞</h2><p>最经典的是水帘洞！它就在瀑布的背后，你可以穿过瀑布到洞那边去看彩虹。但丰水期瀑布太大，洞里全是水，雨衣也挡不住。</p><h2>荔波小七孔</h2><p>离黄果树三个小时车程的荔波小七孔，是地球腰带上的绿宝石。水绿得像翡翠，树密得像原始森林。</p>`,
      season: "summer",
      placeIds: [37, 38],
      bestTime: { months: "6月-8月(丰水期)", weather: "温暖多雨 20-28°C", outfit: "短袖、凉鞋、雨衣、防蚊", tips: "丰水期水帘洞可能封闭，旱季能走", crowd: "较多" },
      checklist: { luggage: ["雨衣", "换洗衣物", "凉鞋", "防蚊液", "防晒"], transport: ["贵阳到黄果树高铁 1 小时", "景区观光车"], stay: ["黄果树镇酒店", "或荔波县城"], budget: { person: 2800, days: 4, items: ["机票 800", "住宿 300/晚", "门票 160", "餐饮 500"] }, recommend: ["黄果树", "荔波小七孔", "镇远古镇", "西江千户苗寨"], avoid: ["枯水期瀑布很小", "下雨天山路滑"] },
      topicIds: [202],
      views: 3450,
      date: "2026-07-28",
      status: "published"
    },
    {
      id: 126,
      title: "新疆赛里木湖：大西洋最后一滴眼泪",
      cover: "assets/images/img_febdcb7db3e9f3a5.jpg",
      excerpt: "赛里木湖的蓝，是地球上最纯净的蓝。它是大西洋暖湿气流最后眷顾的地方，所以被称为大西洋最后一滴眼泪。",
      content: `<p>六月的赛里木湖，美得让人窒息。天空是蓝的，湖水是蓝的，远处的雪山是白的，湖边的草原上开满了黄色的野花。</p><h2>环湖</h2><p>租一辆车环湖一周，90 公里的公路，一边是湖一边是山。每一个弯都是新的风景，每一个停车点都能拍出大片。</p><h2>果子沟大桥</h2><p>从赛里木湖到伊犁，必须经过果子沟大桥。它建在深谷之上，全长 700 多米，是中国最险峻的大桥之一。</p><h2>那拉提</h2><p>顺路去了那拉提空中草原。雪山上流下来的溪水灌溉着草原，牛羊成群，哈萨克族的毡房冒着炊烟。</p>`,
      season: "summer",
      placeIds: [39],
      bestTime: { months: "5月-7月(野花盛开)", weather: "凉爽 10-20°C", outfit: "冲锋衣、保暖层、防晒、太阳镜", tips: "新疆日照强温差大，保暖+防晒都要", crowd: "较少" },
      checklist: { luggage: ["冲锋衣", "薄羽绒", "防晒", "太阳镜", "润唇膏", "防晒衣"], transport: ["乌鲁木齐-伊宁 飞机 1 小时", "伊宁-赛里木湖 包车 2 小时", "自驾环湖"], stay: ["赛里木湖湖边酒店(贵)", "或伊宁市区"], budget: { person: 6000, days: 5, items: ["机票 2500", "住宿 600/晚", "包车 500/天", "餐饮 800"] }, recommend: ["赛里木湖环湖", "果子沟大桥", "那拉提草原", "喀拉峻", "独库公路"], avoid: ["独库公路只 6-10 月通车", "湖边酒店贵且紧张"] },
      topicIds: [202, 206],
      views: 4780,
      date: "2026-06-15",
      status: "published"
    }
  ],

  // 旅行地点（用于地图标记）
  travelPlaces: [
    { id: 1, name: "苏州·拙政园", lat: 31.3273, lng: 120.6296, season: "spring", desc: "中国四大名园之一，春季花开满园", postIds: [101] },
    { id: 2, name: "杭州·西湖", lat: 30.2590, lng: 120.1388, season: "spring", desc: "欲把西湖比西子，淡妆浓抹总相宜", postIds: [101] },
    { id: 3, name: "湖州·莫干山", lat: 30.6197, lng: 119.8878, season: "summer", desc: "江南避暑胜地，竹海深处有清凉", postIds: [102] },
    { id: 4, name: "杭州·千岛湖", lat: 29.6088, lng: 119.0485, season: "summer", desc: "天下第一秀水，湖水清澈见底", postIds: [102] },
    { id: 5, name: "京都·东福寺", lat: 34.9721, lng: 135.7783, season: "autumn", desc: "红叶季必去，通天桥上看漫山红遍", postIds: [103] },
    { id: 6, name: "京都·岚山", lat: 35.0174, lng: 135.6799, season: "autumn", desc: "竹林与红叶的交响，秋日最浪漫之地", postIds: [103] },
    { id: 7, name: "箱根·温泉", lat: 35.2334, lng: 139.0406, season: "winter", desc: "雪中泡温泉，遥望富士山", postIds: [104] },
    { id: 8, name: "云南·罗平", lat: 24.8843, lng: 104.3052, season: "spring", desc: "二月油菜花，金色海洋", postIds: [105] },
    { id: 9, name: "青岛·八大关", lat: 36.0562, lng: 120.3447, season: "summer", desc: "万国建筑博物馆，海边梧桐成荫", postIds: [106] },
    { id: 10, name: "青岛·崂山", lat: 36.2086, lng: 120.6211, season: "summer", desc: "海上名山第一，山海相连", postIds: [106] },
    { id: 11, name: "黄山", lat: 30.1328, lng: 118.1689, season: "spring", desc: "天下第一奇山，奇松怪石云海温泉", postIds: [107] },
    { id: 12, name: "徽州·宏村", lat: 30.0409, lng: 117.9823, season: "spring", desc: "画里乡村，粉墙黛瓦配油菜花", postIds: [107] },
    { id: 13, name: "桂林·漓江", lat: 25.2742, lng: 110.2992, season: "spring", desc: "桂林山水甲天下，二十元人民币背面", postIds: [108] },
    { id: 14, name: "桂林·龙脊梯田", lat: 25.7887, lng: 110.1213, season: "spring", desc: "天下第一梯田，灌水期如镜子", postIds: [108] },
    { id: 15, name: "九寨沟", lat: 33.2600, lng: 103.9200, season: "autumn", desc: "人间瑶池，五彩池五花海", postIds: [109] },
    { id: 16, name: "张家界", lat: 29.3249, lng: 110.4343, season: "summer", desc: "阿凡达悬浮山原型，三千奇峰", postIds: [110] },
    { id: 17, name: "天门山", lat: 29.0600, lng: 110.4900, season: "summer", desc: "九十九道弯，世界最长高山索道", postIds: [110] },
    { id: 18, name: "大理·洱海", lat: 25.8172, lng: 100.1865, season: "summer", desc: "风花雪月之城，苍山洱海", postIds: [111] },
    { id: 19, name: "稻城亚丁", lat: 28.5400, lng: 100.2900, season: "autumn", desc: "最后的香格里拉，三神山", postIds: [112] },
    { id: 20, name: "哈尔滨·冰雪大世界", lat: 45.8038, lng: 126.5350, season: "winter", desc: "冬日童话，冰雕彩灯闪耀", postIds: [113] },
    { id: 21, name: "长白山天池", lat: 42.0263, lng: 128.0588, season: "winter", desc: "冰封蓝宝石，火山口湖", postIds: [114] },
    { id: 22, name: "武夷山", lat: 27.7558, lng: 118.0279, season: "spring", desc: "丹山碧水，九曲溪竹筏", postIds: [115] },
    { id: 23, name: "香格里拉·松赞林寺", lat: 27.8688, lng: 99.7062, season: "autumn", desc: "小布达拉宫，藏地金顶", postIds: [116] },
    // 网红景点地点
    { id: 24, name: "北京·故宫", lat: 39.9163, lng: 116.3972, season: "winter", desc: "紫禁城六百年，红墙白雪黄瓦", postIds: [117] },
    { id: 25, name: "北京·角楼", lat: 39.9150, lng: 116.3990, season: "winter", desc: "故宫摄影圣地，下雪最美", postIds: [117] },
    { id: 26, name: "北京·慕田峪长城", lat: 40.4321, lng: 116.5489, season: "autumn", desc: "万里长城，秋色最美", postIds: [118] },
    { id: 27, name: "西安·兵马俑", lat: 34.3842, lng: 109.2785, season: "spring", desc: "世界第八大奇迹", postIds: [119] },
    { id: 28, name: "西安·大唐不夜城", lat: 34.2297, lng: 108.9498, season: "spring", desc: "穿越大唐，汉服小姐姐聚集地", postIds: [119] },
    { id: 29, name: "重庆·洪崖洞", lat: 29.5628, lng: 106.5731, season: "autumn", desc: "千与千寻现实版，吊脚楼夜景", postIds: [120] },
    { id: 30, name: "成都·大熊猫基地", lat: 30.7340, lng: 104.1427, season: "spring", desc: "圆滚滚的萌宠天堂", postIds: [121] },
    { id: 31, name: "成都·宽窄巷子", lat: 30.6747, lng: 104.0564, season: "spring", desc: "老成都的慢生活", postIds: [121] },
    { id: 32, name: "厦门·鼓浪屿", lat: 24.4483, lng: 118.0630, season: "spring", desc: "海上花园，无汽车的小岛", postIds: [122] },
    { id: 33, name: "厦门·环岛路", lat: 24.4647, lng: 118.1402, season: "spring", desc: "椰风海韵，骑行天堂", postIds: [122] },
    { id: 34, name: "三亚·蜈支洲岛", lat: 18.3116, lng: 109.4583, season: "winter", desc: "中国马尔代夫，潜水胜地", postIds: [123] },
    { id: 35, name: "三亚·亚龙湾", lat: 18.1911, lng: 109.6120, season: "winter", desc: "天下第一湾", postIds: [123] },
    { id: 36, name: "湖南·凤凰古城", lat: 27.9480, lng: 109.5990, season: "autumn", desc: "沈从文边城，中国最美小城", postIds: [124] },
    { id: 37, name: "贵州·黄果树瀑布", lat: 25.9711, lng: 105.6830, season: "summer", desc: "亚洲第一瀑，水帘洞", postIds: [125] },
    { id: 38, name: "贵州·荔波小七孔", lat: 25.4085, lng: 107.9462, season: "summer", desc: "地球腰带上的绿宝石", postIds: [125] },
    { id: 39, name: "新疆·赛里木湖", lat: 44.5984, lng: 81.2110, season: "summer", desc: "大西洋最后一滴眼泪，最纯净的蓝", postIds: [126] }
  ],

  // 季节主题路线专题
  travelTopics: [
    { id: 201, title: "🌸 春日赏花/名山路线", desc: "从黄山云海到桂林山水，从武夷丹霞到婺源花海，春天的中国处处是仙境", cover: "assets/images/img_db958f96e53b1500.jpg", season: "spring", postIds: [101, 105, 107, 108, 115], order: 1 },
    { id: 202, title: "🌊 夏日避暑/山水路线", desc: "张家界奇峰、大理洱海、莫干山竹海——选一处清凉地，躲进山水里", cover: "assets/images/img_7a8070e71b7fc9a7.jpg", season: "summer", postIds: [102, 106, 110, 111], order: 2 },
    { id: 203, title: "🍁 秋日摄影/仙境路线", desc: "九寨沟五彩湖、稻城亚丁、香格里拉——秋天是中国最美的季节", cover: "assets/images/img_d893153c11c21cb4.jpg", season: "autumn", postIds: [103, 109, 112, 116], order: 3 },
    { id: 204, title: "❄️ 冬日冰雪/温泉路线", desc: "哈尔滨冰雪大世界、长白山天池、箱根温泉——冬天也有极致浪漫", cover: "assets/images/img_660650d0aa2aca97.jpg", season: "winter", postIds: [104, 113, 114], order: 4 },
    { id: 205, title: "🏔️ 中国十大名山专题", desc: "黄山、武夷山、张家界……中国名山何止十座，每一座都值得敬畏", cover: "assets/images/img_4176784fe732323d.jpg", season: "spring", postIds: [107, 110, 115, 114], order: 5 },
    { id: 206, title: "🌏 大西北/高原专题", desc: "九寨沟、稻城亚丁、香格里拉——祖国西部的风景，是地球上最纯粹的颜色", cover: "assets/images/img_8b218a45686cf7c9.jpg", season: "autumn", postIds: [109, 112, 116], order: 6 },
    { id: 207, title: "❄️ 东北冰雪专题", desc: "哈尔滨冰雪大世界、长白山魔界——东北的冬天，是银色的童话世界", cover: "assets/images/img_baa638451ffa8391.jpg", season: "winter", postIds: [113, 114], order: 7 },
    { id: 208, title: "🏛️ 网红打卡圣地专题", desc: "故宫、兵马俑、洪崖洞、大熊猫基地——全网刷屏的网红景点一次集齐", cover: "assets/images/img_ca3371f839401bdb.jpg", season: "spring", postIds: [117, 118, 119, 120, 121, 122, 124], order: 8 }
  ],

  // 季节相册墙（旅游相关）
  travelGallery: [
    { id: 501, title: "雨中的拙政园", season: "spring", postId: 101, cover: "assets/images/img_014d0697e5e05ff0.jpg" },
    { id: 502, title: "西湖的晨雾", season: "spring", postId: 101, cover: "assets/images/img_fd3fcdfc5b18165a.jpg" },
    { id: 503, title: "竹林小径", season: "summer", postId: 102, cover: "assets/images/img_900ab14a279253d2.jpg" },
    { id: 504, title: "千岛湖日落", season: "summer", postId: 102, cover: "assets/images/img_be1891d289ff07c6.jpg" },
    { id: 505, title: "东福寺红叶", season: "autumn", postId: 103, cover: "assets/images/img_60d2c8ab8f238a2d.jpg" },
    { id: 506, title: "嵐山竹林", season: "autumn", postId: 103, cover: "assets/images/img_e837962affda95fe.jpg" },
    { id: 507, title: "雪中温泉", season: "winter", postId: 104, cover: "assets/images/img_fb94faf2d2a45dd9.jpg" },
    { id: 508, title: "罗平油菜花", season: "spring", postId: 105, cover: "assets/images/img_df5ed4f01d5fcf41.jpg" },
    { id: 509, title: "八大关梧桐", season: "summer", postId: 106, cover: "assets/images/img_51e38075c292c4ef.jpg" },
    { id: 510, title: "栈桥日落", season: "summer", postId: 106, cover: "assets/images/img_db7f3afe9dda04b8.jpg" },
    // ============ 新增：中国大好河山相册 ============
    { id: 511, title: "黄山云海", season: "spring", postId: 107, cover: "assets/images/img_a03ab09a43696d6e.jpg" },
    { id: 512, title: "黄山迎客松", season: "spring", postId: 107, cover: "assets/images/img_8e11124f14eeb6fb.jpg" },
    { id: 513, title: "桂林漓江", season: "spring", postId: 108, cover: "assets/images/img_1de6544db1a706e7.jpg" },
    { id: 514, title: "龙脊梯田", season: "spring", postId: 108, cover: "assets/images/img_468716f8edd4f5a3.jpg" },
    { id: 515, title: "九寨沟五花海", season: "autumn", postId: 109, cover: "assets/images/img_848c7fa94b74a15b.jpg" },
    { id: 516, title: "九寨沟五彩池", season: "autumn", postId: 109, cover: "assets/images/img_0a1790e85894c79e.jpg" },
    { id: 517, title: "张家界袁家界", season: "summer", postId: 110, cover: "assets/images/img_1e2697c10b37f51e.jpg" },
    { id: 518, title: "天门山玻璃栈道", season: "summer", postId: 110, cover: "assets/images/img_f2b2713f075404c2.jpg" },
    { id: 519, title: "大理洱海环海西路", season: "summer", postId: 111, cover: "assets/images/img_cf55457b7c462de2.jpg" },
    { id: 520, title: "大理苍山", season: "summer", postId: 111, cover: "assets/images/img_223f99fc7ef81dc0.jpg" },
    { id: 521, title: "稻城亚丁五色海", season: "autumn", postId: 112, cover: "assets/images/img_e8a97be57abc82f2.jpg" },
    { id: 522, title: "稻城亚丁牛奶海", season: "autumn", postId: 112, cover: "assets/images/img_da5b6b1cad853c57.jpg" },
    { id: 523, title: "哈尔滨冰雪大世界", season: "winter", postId: 113, cover: "assets/images/img_06e37ea61f74bb2d.jpg" },
    { id: 524, title: "哈尔滨中央大街", season: "winter", postId: 113, cover: "assets/images/img_069001b2bdd949d4.jpg" },
    { id: 525, title: "长白山天池", season: "winter", postId: 114, cover: "assets/images/img_c95e7d42e6346e7f.jpg" },
    { id: 526, title: "武夷山九曲溪", season: "spring", postId: 115, cover: "assets/images/img_7abecb56fa17a4e2.jpg" },
    { id: 527, title: "武夷山天游峰", season: "spring", postId: 115, cover: "assets/images/img_8d31ea71d7dfc225.jpg" },
    { id: 528, title: "香格里拉松赞林寺", season: "autumn", postId: 116, cover: "assets/images/img_95b4083b6662ab43.jpg" },
    { id: 529, title: "香格里拉普达措", season: "autumn", postId: 116, cover: "assets/images/img_d1c529e8f07d35c5.jpg" },
    // 网红景点相册
    { id: 530, title: "故宫红墙白雪", season: "winter", postId: 117, cover: "assets/images/img_7830ad62d93fecfb.jpg" },
    { id: 531, title: "故宫角楼", season: "winter", postId: 117, cover: "assets/images/img_2b3c685aa0f0d07a.jpg" },
    { id: 532, title: "慕田峪长城秋色", season: "autumn", postId: 118, cover: "assets/images/img_7672476c16749208.jpg" },
    { id: 533, title: "兵马俑一号坑", season: "spring", postId: 119, cover: "assets/images/img_4e09150e07ede3f8.jpg" },
    { id: 534, title: "西安大唐不夜城", season: "spring", postId: 119, cover: "assets/images/img_def76248c58366cd.jpg" },
    { id: 535, title: "重庆洪崖洞夜景", season: "autumn", postId: 120, cover: "assets/images/img_99d22af27fae561c.jpg" },
    { id: 536, title: "李子坝轻轨穿楼", season: "autumn", postId: 120, cover: "assets/images/img_92852556c2b7ee76.jpg" },
    { id: 537, title: "成都大熊猫卖萌", season: "spring", postId: 121, cover: "assets/images/img_a121385bbecd4f34.jpg" },
    { id: 538, title: "厦门鼓浪屿日光岩", season: "spring", postId: 122, cover: "assets/images/img_2e93d301279f0a25.jpg" },
    { id: 539, title: "三亚蜈支洲岛潜水", season: "winter", postId: 123, cover: "assets/images/img_26d6d20882d47554.jpg" },
    { id: 540, title: "凤凰古城沱江夜景", season: "autumn", postId: 124, cover: "assets/images/img_daec37f4ea1c0350.jpg" },
    { id: 541, title: "黄果树瀑布水帘洞", season: "summer", postId: 125, cover: "assets/images/img_bac9158fc49f18a0.jpg" },
    { id: 542, title: "荔波小七孔", season: "summer", postId: 125, cover: "assets/images/img_ef5e611f9bf902fd.jpg" },
    { id: 543, title: "赛里木湖环湖", season: "summer", postId: 126, cover: "assets/images/img_9a7afbaf17ba36ef.jpg" },
    { id: 544, title: "赛里木湖野花", season: "summer", postId: 126, cover: "assets/images/img_3c16b04ece63ef4c.jpg" }
  ],

  // 季节许愿墙留言
  travelWishes: [
    { id: 301, name: "云雀", season: "spring", content: "下个春天想去看婺源的油菜花，有没有同好组队 🌸", date: "2026-10-20 09:15", status: "approved" },
    { id: 302, name: "阿海", season: "winter", content: "冬天一定要去一次北海道泡温泉，看雪花飘在汤面上 ❄️♨️", date: "2026-10-18 22:40", status: "approved" },
    { id: 303, name: "小鹿", season: "autumn", content: "推荐大家秋天去新疆喀纳斯，那种层林尽染的美，相机拍不出来 🍁", date: "2026-10-15 14:22", status: "approved" },
    { id: 304, name: "路过", season: "summer", content: "夏天推荐青海湖，晚上能看到银河！🌌", date: "2026-10-12 16:05", status: "approved" }
  ],

  // 旅游板块初始化
  initTravel() {
    if (!localStorage.getItem("blog_travel_posts")) {
      localStorage.setItem("blog_travel_posts", JSON.stringify(this.travelPosts));
    }
    if (!localStorage.getItem("blog_travel_places")) {
      localStorage.setItem("blog_travel_places", JSON.stringify(this.travelPlaces));
    }
    if (!localStorage.getItem("blog_travel_topics")) {
      localStorage.setItem("blog_travel_topics", JSON.stringify(this.travelTopics));
    }
    if (!localStorage.getItem("blog_travel_gallery")) {
      localStorage.setItem("blog_travel_gallery", JSON.stringify(this.travelGallery));
    }
    if (!localStorage.getItem("blog_travel_wishes")) {
      localStorage.setItem("blog_travel_wishes", JSON.stringify(this.travelWishes));
    }
    const TRAVEL_VERSION = "v4_local_images";
    if (localStorage.getItem("blog_travel_version") !== TRAVEL_VERSION) {
      localStorage.setItem("blog_travel_posts", JSON.stringify(this.travelPosts));
      localStorage.setItem("blog_travel_places", JSON.stringify(this.travelPlaces));
      localStorage.setItem("blog_travel_topics", JSON.stringify(this.travelTopics));
      localStorage.setItem("blog_travel_gallery", JSON.stringify(this.travelGallery));
      localStorage.setItem("blog_travel_wishes", JSON.stringify(this.travelWishes));
      localStorage.setItem("blog_travel_version", TRAVEL_VERSION);
    }
  },

  // 重置旅游数据
  resetTravel() {
    localStorage.setItem("blog_travel_posts", JSON.stringify(this.travelPosts));
    localStorage.setItem("blog_travel_places", JSON.stringify(this.travelPlaces));
    localStorage.setItem("blog_travel_topics", JSON.stringify(this.travelTopics));
    localStorage.setItem("blog_travel_gallery", JSON.stringify(this.travelGallery));
    localStorage.setItem("blog_travel_wishes", JSON.stringify(this.travelWishes));
  },

  // ====== 游记 CRUD ======
  getTravelPosts(season) {
    const all = JSON.parse(localStorage.getItem("blog_travel_posts") || "[]");
    if (season) return all.filter(p => p.season === season);
    return all;
  },
  getTravelPost(id) { return this.getTravelPosts().find(p => p.id === parseInt(id)); },

  // ====== 地点 CRUD ======
  getTravelPlaces(season) {
    const all = JSON.parse(localStorage.getItem("blog_travel_places") || "[]");
    if (season) return all.filter(p => p.season === season);
    return all;
  },
  getTravelPlace(id) { return this.getTravelPlaces().find(p => p.id === parseInt(id)); },

  // ====== 专题 CRUD ======
  getTravelTopics(season) {
    const all = JSON.parse(localStorage.getItem("blog_travel_topics") || "[]");
    if (season) return all.filter(t => t.season === season);
    return all;
  },
  getTravelTopic(id) { return this.getTravelTopics().find(t => t.id === parseInt(id)); },

  // ====== 旅游相册 CRUD ======
  getTravelGallery(season) {
    const all = JSON.parse(localStorage.getItem("blog_travel_gallery") || "[]");
    if (season) return all.filter(g => g.season === season);
    return all;
  },

  // ====== 许愿墙 CRUD ======
  getTravelWishes(season) {
    const all = JSON.parse(localStorage.getItem("blog_travel_wishes") || "[]");
    if (season) return all.filter(w => w.season === season);
    return all;
  },
  addTravelWish(wish) {
    const all = JSON.parse(localStorage.getItem("blog_travel_wishes") || "[]");
    const newWish = {
      id: Date.now(),
      name: wish.name,
      season: wish.season,
      content: wish.content,
      date: new Date().toLocaleString("zh-CN", { hour12: false }),
      status: "approved"
    };
    all.unshift(newWish);
    localStorage.setItem("blog_travel_wishes", JSON.stringify(all));
    return newWish;
  },

  // ============ 治愈正能量板块 ============
  initHeal() {
    const HEAL_VERSION = "v1_heal_2026";
    const ver = localStorage.getItem("blog_heal_version");
    if (ver === HEAL_VERSION) return;
    localStorage.setItem("blog_heal_version", HEAL_VERSION);
    localStorage.setItem("blog_heal_growth_tree", JSON.stringify({ leaves: 0, blooms: 0, visits: 0, lastVisit: null }));
  },

  // 治愈语录（按季节）
  getHealQuotes(season) {
    const all = {
      spring: [
        "万物都在慢慢醒来，你也可以。",
        "春天会来的，就像你一直相信的那样。",
        "泥土开始变软，花苞在等一个晴天。",
        "允许自己今天只做一件事，然后认真做好它。",
        "樱花每年只开七天，但每年都有人在等它。",
        "你不需要很厉害，只需要继续往前走。",
      ],
      summer: [
        "傍晚的风，最适合散步和发呆。",
        "西瓜最中间的那一勺，永远留给自己。",
        "夏天的雨下完会有彩虹，你的糟糕日子也是。",
        "允许自己今天什么都不做，也是一种很重要的事。",
        "海浪不会记得每一片贝壳，但它们都被拥抱过。",
        "空调房里盖被子是成年人的小确幸之一。",
      ],
      autumn: [
        "落叶不是结束，是在准备新的开始。",
        "今天的你，已经比昨天做得更好了。",
        "枫叶落了一地，是写给冬天的信。",
        "允许自己慢慢走，秋天的风景值得停下来看。",
        "烤红薯的香气，可以治愈很多说不出的疲惫。",
        "你已经做得很好了，休息不是退步。",
      ],
      winter: [
        "雪会覆盖一切不开心，等春天来就好。",
        "今天辛苦了，允许自己慢一点。",
        "最冷的时候，也是最靠近春天的时候。",
        "一杯热茶，一窗雪，和一个不被打扰的下午。",
        "你不用对所有人都热热闹闹，安静一会儿也没关系。",
        "星星很冷，但它们一直在那里亮着。",
      ],
    };
    return season && all[season] ? all[season] : all[this.getSeason()] || all.spring;
  },

  // 今日小确幸（随机返回一条）
  getDailyHappiness() {
    const items = [
      { icon: "🌸", text: "允许自己今天什么都不做。" },
      { icon: "🍃", text: "傍晚的风很适合散步。" },
      { icon: "🌙", text: "抬头看看月亮，它也在看你。" },
      { icon: "☕", text: "给自己泡一杯热茶。" },
      { icon: "🎵", text: "放一首你喜欢的老歌。" },
      { icon: "📞", text: "给很久没联系的人发条消息。" },
      { icon: "🌿", text: "摸摸身边的绿植，它也有在长大。" },
      { icon: "✨", text: "今天也要允许自己有一点小骄傲。" },
      { icon: "🍊", text: "吃一个水果，认真尝它的味道。" },
      { icon: "📝", text: "写三句话，感谢一下今天。" },
      { icon: "🌈", text: "糟糕的日子也是日子，会过去的。" },
      { icon: "🐱", text: "动物们不会焦虑，因为它们知道当下最美。" },
    ];
    const seed = new Date().getDate();
    return items[seed % items.length];
  },

  // 情绪天气站
  getWeatherMoods() {
    return [
      { key: "sunny", label: "晴", icon: "☀️", tip: "今天心情明亮，去看看旅行照片吧", bg: "#ffd54a" },
      { key: "cloudy", label: "多云", icon: "☁️", tip: "适合读一篇慢游记", bg: "#b4c4d0" },
      { key: "rainy", label: "小雨", icon: "🌧️", tip: "听雨的时候，试着写三句话", bg: "#6a8dbf" },
      { key: "overcast", label: "阴天", icon: "🌥️", tip: "今天的小确幸是什么？", bg: "#8899aa" },
      { key: "storm", label: "雷阵雨", icon: "⛈️", tip: "写下你的心事，雨会带走它", bg: "#4a4a6a" },
    ];
  },

  // 解忧信箱温暖自动回复
  getAutoReplies() {
    return [
      "今天辛苦了，允许自己慢一点。",
      "你已经做得很好了，休息不是退步。",
      "没关系的，慢慢来，会好的。",
      "被看见、被接住，本来就是很重要的事。",
      "允许自己脆弱一会儿，也是一种勇气。",
      "你值得被温柔对待，包括你自己。",
      "很多事情不是你的错，只是暂时没找到方向。",
      "你不是一个人在面对。",
    ];
  },

  // 温柔回信墙的柔软回应（不是点赞）
  getSoftReactions() {
    return ["🌸", "🌿", "⭐", "🌙", "🍃", "☁️", "🌈", "🍀", "🦋", "🌼"];
  },

  // 情绪回收站动画类型
  getReleaseAnimations() {
    return [
      { key: "paper-plane", label: "纸飞机飞走", icon: "✈️" },
      { key: "leaf", label: "叶子被风吹走", icon: "🍃" },
      { key: "star", label: "星星升起来", icon: "⭐" },
      { key: "ocean", label: "雨滴落进海里", icon: "🌊" },
    ];
  },

  // 治愈旅行路线（适合散心的地方）
  getHealTravel() {
    return [
      { icon: "🌊", name: "一个人看海", spots: ["三亚蜈支洲岛", "厦门环岛路", "青岛栈桥"], quote: "海浪会替你把烦恼说一遍，然后带走。" },
      { icon: "🏔️", name: "山林里发呆", spots: ["莫干山", "武夷山", "香格里拉普达措"], quote: "山里没有信号，但有呼吸。" },
      { icon: "🌙", name: "安静地看日落", spots: ["大理苍山", "赛里木湖", "长白山天池"], quote: "最美的日落，是你愿意停下来看的那个。" },
      { icon: "🏘️", name: "古镇里慢走", spots: ["凤凰古城", "兴坪古镇", "磁器口"], quote: "石板路会记得你的脚步声。" },
    ];
  },

  // 旅行人格测试（轻量版 4 型）
  getTravelPersonalities() {
    return [
      { type: "sea", name: "独行看海型", emoji: "🌊", desc: "喜欢一个人，看海的时候最自在。目的地不重要，重要的是有没有水。" },
      { type: "mountain", name: "山林发呆型", emoji: "🏔️", desc: "山里的空气比咖啡还提神，登高一览的时候最治愈。" },
      { type: "city", name: "市集漫游型", emoji: "🏮", desc: "在陌生的城市里迷路，转角遇见好吃的，就是最好的旅行。" },
      { type: "slow", name: "随便走走型", emoji: "🌿", desc: "不做计划，走到哪算哪。迷路也没关系，反正会有惊喜。" },
    ];
  },

  // 旅行盲盒（随机目的地）
  getTravelBlindBox(season) {
    const posts = this.getTravelPosts(season).filter(p => p.views > 1000);
    if (posts.length === 0) {
      const all = this.getTravelPosts();
      return all[Math.floor(Math.random() * all.length)] || null;
    }
    return posts[Math.floor(Math.random() * posts.length)];
  },

  // 成长小树
  getGrowthTree() {
    const t = localStorage.getItem("blog_heal_growth_tree");
    if (!t) return { leaves: 0, blooms: 0, visits: 0, lastVisit: null };
    return JSON.parse(t);
  },

  waterGrowthTree(action) {
    const tree = this.getGrowthTree();
    const today = new Date().toDateString();
    if (tree.lastVisit !== today) {
      tree.visits += 1;
      tree.lastVisit = today;
    }
    if (action === "visit" || action === "comment" || action === "wish" || action === "letter") {
      tree.leaves += 1;
      if (tree.leaves >= 7) {
        tree.blooms += 1;
        tree.leaves = 0;
      }
    }
    localStorage.setItem("blog_heal_growth_tree", JSON.stringify(tree));
    return tree;
  },

  // 解忧信箱 CRUD
  getLetters() {
    return JSON.parse(localStorage.getItem("blog_heal_letters") || "[]");
  },

  addLetter(text, mood, isPublic) {
    const all = this.getLetters();
    const replies = this.getAutoReplies();
    const autoReply = replies[Math.floor(Math.random() * replies.length)];
    const letter = {
      id: Date.now(),
      text,
      mood,
      isPublic: !!isPublic,
      reply: autoReply,
      time: new Date().toISOString(),
      reactions: [],
    };
    all.unshift(letter);
    localStorage.setItem("blog_heal_letters", JSON.stringify(all));
    this.waterGrowthTree("letter");
    return letter;
  },

  // 情绪回收站
  releaseEmotion(emotion, animType) {
    const history = JSON.parse(localStorage.getItem("blog_heal_released") || "[]");
    history.unshift({ id: Date.now(), emotion, animType, time: new Date().toISOString() });
    localStorage.setItem("blog_heal_released", JSON.stringify(history.slice(0, 50)));
    return true;
  },

  getReleasedEmotions() {
    return JSON.parse(localStorage.getItem("blog_heal_released") || "[]");
  },

  // 获取当前季节
  getSeason() {
    const m = new Date().getMonth() + 1;
    if (m >= 3 && m <= 5) return "spring";
    if (m >= 6 && m <= 8) return "summer";
    if (m >= 9 && m <= 11) return "autumn";
    return "winter";
  },

  // ============ MBTI 人格测试 ============
  getMbtiQuestions() {
    return [
      // E/I 维度
      {
        dim: "EI",
        q: "聚会中，你通常是？",
        opts: [
          { key: "E", label: "主动和很多人聊天，越热闹越开心" },
          { key: "I", label: "和一两个熟人聊就好，人多了会累" }
        ]
      },
      {
        dim: "EI",
        q: "独处和社交，你更倾向于？",
        opts: [
          { key: "E", label: "社交是充电，一个人久了会闷" },
          { key: "I", label: "独处是充电，社交完需要恢复" }
        ]
      },
      {
        dim: "EI",
        q: "遇到难题时，你会？",
        opts: [
          { key: "E", label: "找人聊一聊，说着想通了" },
          { key: "I", label: "自己先想清楚，再决定说不说" }
        ]
      },
      // S/N 维度
      {
        dim: "SN",
        q: "读一本小说，你更关注？",
        opts: [
          { key: "S", label: "情节和故事本身，像电影画面" },
          { key: "N", label: "背后的隐喻和人物的心理动机" }
        ]
      },
      {
        dim: "SN",
        q: "做计划时，你喜欢？",
        opts: [
          { key: "S", label: "按部就班，一步一步来" },
          { key: "N", label: "先想大方向，细节边走边调" }
        ]
      },
      {
        dim: "SN",
        q: "你更容易被什么吸引？",
        opts: [
          { key: "S", label: "美食、风景这些实实在在的体验" },
          { key: "N", label: "有趣的想法、新鲜的概念" }
        ]
      },
      // T/F 维度
      {
        dim: "TF",
        q: "朋友找你倾诉烦心事，你会？",
        opts: [
          { key: "T", label: "帮他分析原因，找解决方案" },
          { key: "F", label: "先共情，让他感到被理解" }
        ]
      },
      {
        dim: "TF",
        q: "做决定时，你更看重？",
        opts: [
          { key: "T", label: "逻辑和事实，对就是对" },
          { key: "F", label: "感觉和关系，大家都舒服最重要" }
        ]
      },
      {
        dim: "TF",
        q: "看完一部催泪电影，你更可能？",
        opts: [
          { key: "T", label: "吐槽剧情逻辑，分析哪里不合理" },
          { key: "F", label: "被感动到哭，久久不能平静" }
        ]
      },
      // J/P 维度
      {
        dim: "JP",
        q: "周末出去玩，你会？",
        opts: [
          { key: "J", label: "提前做好攻略，按计划执行" },
          { key: "P", label: "大概有个方向，到了再说" }
        ]
      },
      {
        dim: "JP",
        q: "书桌或房间，你通常？",
        opts: [
          { key: "J", label: "比较整洁，东西放得有规律" },
          { key: "P", label: "乱中有序，虽然乱但我知道在哪" }
        ]
      },
      {
        dim: "JP",
        q: "面对截止日期，你是？",
        opts: [
          { key: "J", label: "提前完成，越拖越焦虑" },
          { key: "P", label: "最后关头效率最高，压力出奇迹" }
        ]
      }
    ];
  },

  getMbtiTypes() {
    return {
      ISTJ: { name: "安静守护者", emoji: "🛡️", color: "#6b7280", desc: "踏实、可靠、有责任感。你像一座山，别人可以放心地靠在你身上。", heal: "整理收纳、规律作息、去博物馆或古镇走走", travel: "西安、故宫、长城——有历史感的目的地", celebrity: "居里夫人、梅丽尔·斯特里普" },
      ISFJ: { name: "温柔照料者", emoji: "🌷", color: "#be185d", desc: "温暖、细心、默默付出。你总是在照顾别人，别忘了也照顾自己。", heal: "泡一杯花茶、写感恩日记、做手工", travel: "凤凰古城、大理洱海、鼓浪屿——慢悠悠的地方", celebrity: "特蕾莎修女、凯特王妃" },
      INFJ: { name: "神秘理想主义者", emoji: "🌙", color: "#7c3aed", desc: "有洞察力、深刻、追求意义。你看到的世界比别人多一层。", heal: "独处散步、听古典音乐、写诗歌", travel: "稻城亚丁、香格里拉、箱根温泉——安静有灵性的地方", celebrity: "荣格、马丁·路德·金" },
      INTJ: { name: "独立战略家", emoji: "♟️", color: "#1d4ed8", desc: "聪明、有远见、独立自主。你有自己的节奏，不随波逐流。", heal: "下棋或解谜、研究感兴趣的课题、一个人去咖啡馆", travel: "黄山、张家界、长白山——壮丽而不拥挤的自然", celebrity: "牛顿、比尔·盖茨" },
      ISTP: { name: "冷静手艺人", emoji: "🔧", color: "#059669", desc: "灵活、实用、手脚麻利。你动手能力强，问题到你手里总能解决。", heal: "修东西或做手工、骑摩托车、运动", travel: "张家界、武夷山、桂林——可以徒步探索的地方", celebrity: "克林特·伊斯特伍德、迈克尔·乔丹" },
      ISFP: { name: "自由艺术家", emoji: "🎨", color: "#ec4899", desc: "温柔、敏感、热爱美。你用感官感受世界，日子过得像一幅画。", heal: "画画或拍照、听音乐会、逛美术馆", travel: "京都、厦门、苏州——处处是美景的地方", celebrity: "鲍勃·迪伦、奥黛丽·赫本" },
      INFP: { name: "浪漫梦想家", emoji: "🦋", color: "#a855f7", desc: "理想主义、有同理心、忠于内心。你活在自己的世界里，但世界因你而温柔。", heal: "写日记、读小说、去海边发呆", travel: "厦门鼓浪屿、大理、凤凰古城——充满故事感的地方", celebrity: "梵高、JK罗琳" },
      INTP: { name: "好奇逻辑学家", emoji: "🧠", color: "#3b82f6", desc: "爱思考、有创意、热爱真理。你脑子里装着一整个宇宙的想法。", heal: "读书、玩桌游、和人辩论有趣的话题", travel: "成都、重庆、西安——好吃又有文化的地方", celebrity: "爱因斯坦、达尔文" },
      ESTP: { name: "勇敢实践者", emoji: "🏎️", color: "#dc2626", desc: "大胆、活力充沛、行动派。想到就去做，人生要的就是体验。", heal: "极限运动、户外冒险、和朋友聚会", travel: "三亚、重庆、哈尔滨——刺激好玩的地方", celebrity: "成龙、泰勒·斯威夫特" },
      ESFP: { name: "快乐表演者", emoji: "🎉", color: "#f59e0b", desc: "热情、外向、爱热闹。有你在的地方，气氛永远不会冷。", heal: "和朋友聚餐、KTV、看脱口秀", travel: "重庆、成都、哈尔滨冰雪大世界——热闹有烟火气的地方", celebrity: "玛丽莲·梦露、贾斯汀·比伯" },
      ENFP: { name: "充满灵感的探索者", emoji: "✨", color: "#f472b6", desc: "热情洋溢、创意无限、爱冒险。你能从一切事情里找到乐趣。", heal: "头脑风暴、和朋友聊天想点子、旅行", travel: "新疆、云南、西藏——辽阔而充满可能的地方", celebrity: "罗宾·威廉姆斯、安妮·弗兰克" },
      ENTP: { name: "机智辩论家", emoji: "💡", color: "#8b5cf6", desc: "聪明、善辩、点子多。你喜欢新想法，讨厌循规蹈矩。", heal: "和人辩论、玩策略游戏、研究新概念", travel: "重庆、北京、西安——历史与现代交融的地方", celebrity: "马克·吐温、罗伯特·唐尼" },
      ESTJ: { name: "高效组织者", emoji: "📋", color: "#ea580c", desc: "有条理、负责任、注重秩序。你是团队里让人放心的那个。", heal: "制定计划、整理家务、运动健身", travel: "北京故宫、长城、西安——有秩序感的历史名城", celebrity: "亨利·福特、杨紫琼" },
      ESFJ: { name: "热心助人者", emoji: "🤗", color: "#db2777", desc: "温暖、好客、重视人情。你是朋友们的大家长，谁有事都找你。", heal: "和家人团聚、组织聚会、做饭给别人吃", travel: "成都、厦门、杭州——人情味浓的温暖城市", celebrity: "泰勒·斯威夫特、比尔·克林顿" },
      ENFJ: { name: "激励型领袖", emoji: "🌟", color: "#d97706", desc: "有魅力、有同理心、能鼓舞别人。你相信每个人都可以变得更好。", heal: "冥想、辅导朋友、做公益", travel: "大理、香格里拉、丽江——能遇到很多人的温柔之地", celebrity: "奥普拉、巴拉克·奥巴马" },
      ENTJ: { name: "天生指挥官", emoji: "👑", color: "#b91c1c", desc: "果断、有领导力、目标明确。你知道自己要什么，并会带领大家一起到达。", heal: "制定五年计划、学习新技能、和高手交流", travel: "北京、上海、深圳——充满机会和挑战的都市", celebrity: "史蒂夫·乔布斯、拿破仑" }
    };
  },

  calculateMbti(answers) {
    // answers 是 [{dim, key}, ...] 的数组
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach(a => { if (scores[a.key] !== undefined) scores[a.key]++; });
    const ei = scores.E >= scores.I ? "E" : "I";
    const sn = scores.S >= scores.N ? "S" : "N";
    const tf = scores.T >= scores.F ? "T" : "F";
    const jp = scores.J >= scores.P ? "J" : "P";
    return ei + sn + tf + jp;
  },

  // 保存/获取 MBTI 测试结果（localStorage）
  saveMbtiResult(type) {
    localStorage.setItem("blog_mbti_result", JSON.stringify({ type, time: new Date().toISOString() }));
  },
  getMbtiResult() {
    const t = localStorage.getItem("blog_mbti_result");
    return t ? JSON.parse(t) : null;
  }
});

// 初始化旅游数据
DB.initTravel();
DB.initHeal();

// 初始化数据
DB.init();
