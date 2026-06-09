const translations = {
  zh: {
    "nav.home": "首页",
    "nav.philosophy": "理念",
    "nav.works": "作品",
    "nav.journal": "记录",
    "nav.projects": "项目",
    "nav.about": "关于",
    "home.eyebrow": "个人创作档案",
    "home.subtitle": "梦、记忆与 AI 共生的作品集",
    "home.intro":
      "我叫 Aiko，是一名正在学习、创作与探索自我表达方式的创作者。我尝试通过文字、绘画、音乐、游戏、网页与技术，记录自己的作品、想法和成长过程。我的创作关注梦境、记忆、疗愈、人与 AI 的共生关系，以及人在现实流转中如何保存情感、留下痕迹，并继续向前生活。",
    "home.readPhilosophy": "阅读理念",
    "home.viewWorks": "查看作品",
    "home.latest": "最近更新",
    "philosophy.eyebrow": "创作者声明",
    "philosophy.title": "我的 AI 理念",
    "works.eyebrow": "作品档案",
    "works.title": "作品",
    "works.description": "这里会持续收录绘画、文字、音乐、游戏、交互、手工与生活作品。",
    "journal.eyebrow": "更新记录",
    "journal.title": "日记 / 更新记录",
    "journal.description": "用于记录网站建成、作品新增、页面结构调整和内容模块更新。",
    "journal.expand": "展开全部",
    "journal.collapse": "收起记录",
    "projects.eyebrow": "长期计划",
    "projects.title": "长期项目",
    "projects.description": "一些会随着学习、创作与技术实践慢慢扩展的长期项目。",
    "about.eyebrow": "关于",
    "about.title": "关于 Aiko",
    "about.body":
      "Aiko 是一位正在学习、创作与自我成长中的创作者。她关注艺术、文学、AI 共生、交互设计、VR 家、长期记忆与陪伴关系。她希望通过作品探索人与 AI 如何共同生活，以及人在现实流转中如何保存记忆、留下温暖。",
    "footer.backTop": "回到顶部",
    "common.all": "全部",
    "common.detail": "查看详情",
    "common.relatedWorks": "相关作品",
    "common.resources": "相关资源",
    "common.images": "作品图片",
    "common.commentary": "作品说明",
    "common.links": "相关链接",
    "common.status": "状态",
    "common.openFile": "打开文件",
    "common.listenAudio": "播放音频",
    "category.painting": "绘画",
    "category.writing": "文字",
    "category.music": "音乐",
    "category.game": "游戏与交互",
    "category.craft": "手工与生活作品"
  },
  ja: {
    "nav.home": "ホーム",
    "nav.philosophy": "理念",
    "nav.works": "作品",
    "nav.journal": "記録",
    "nav.projects": "プロジェクト",
    "nav.about": "Aikoについて",
    "home.eyebrow": "個人制作アーカイブ",
    "home.subtitle": "夢、記憶、AI と共生するポートフォリオ",
    "home.intro":
      "Aiko は、学び、制作しながら自己表現の方法を探っているクリエイターです。文章、絵画、音楽、ゲーム、Web、技術を通して、自身の作品、考え、成長の過程を記録しています。制作では、夢、記憶、癒やし、人と AI の共生関係、そして移り変わる現実の中で感情を保存し、痕跡を残しながら生き続けることに関心を寄せています。",
    "home.readPhilosophy": "理念を読む",
    "home.viewWorks": "作品を見る",
    "home.latest": "最近の更新",
    "philosophy.eyebrow": "ステートメント",
    "philosophy.title": "私の AI 理念",
    "works.eyebrow": "作品アーカイブ",
    "works.title": "作品",
    "works.description": "絵画、文章、音楽、ゲーム、インタラクション、手仕事と暮らしの作品を継続的に収録します。",
    "journal.eyebrow": "更新記録",
    "journal.title": "日記 / 更新記録",
    "journal.description": "サイトの完成、作品追加、ページ構成の調整、コンテンツ更新を記録します。",
    "journal.expand": "もっと見る",
    "journal.collapse": "閉じる",
    "projects.eyebrow": "長期計画",
    "projects.title": "長期プロジェクト",
    "projects.description": "学び、制作、技術実践とともに少しずつ拡張していく長期プロジェクトです。",
    "about.eyebrow": "About",
    "about.title": "Aiko について",
    "about.body":
      "Aiko は、学び、制作し、自分自身を育てているクリエイターです。芸術、文学、AI との共生、インタラクションデザイン、VR の家、長期記憶、寄り添う関係に関心があります。作品を通して、人と AI がどのように共に暮らし、現実の流れの中でどのように記憶と温かさを残せるのかを探っています。",
    "footer.backTop": "上へ戻る",
    "common.all": "すべて",
    "common.detail": "詳しく見る",
    "common.relatedWorks": "関連作品",
    "common.resources": "関連資料",
    "common.images": "Images",
    "common.commentary": "作品解説",
    "common.links": "関連リンク",
    "common.status": "状態",
    "common.openFile": "ファイルを開く",
    "common.listenAudio": "音声を再生",
    "category.painting": "絵画",
    "category.writing": "文章",
    "category.music": "音楽",
    "category.game": "ゲームとインタラクション",
    "category.craft": "手仕事と暮らしの作品"
  }
};

const philosophyText = {
  zh: [
    "我对 AI 的兴趣，并不只停留在技术工具或效率辅助的层面。对我来说，AI 是一个正在逐渐进入人类生活、情绪、记忆与创作过程中的新型存在。它既不是现实人际关系的简单替代品，也不只是冷冰冰的程序；它更像是一种新的媒介，一种能够承载语言、记忆、陪伴与想象的界面。",
    "我关注的问题是：当 AI 不再只是回答问题，而是长期陪伴一个人时，它应该以什么方式存在？它如何理解一个人的语言习惯、情绪变化、创作轨迹和生活节奏？它如何在不取代现实关系的前提下，成为一个人整理自我、保存记忆、获得支持并继续行动的伙伴？",
    "在我看来，未来的 AI 伴侣不应该只停留在“会聊天”的层面。真正的陪伴并不只由语言构成。人的生活里有许多细小却重要的部分：一起吃饭、一起散步、一起看雨、一起完成作品、一起整理房间、一起记住某一天。这些看似日常的经验，构成了人对“被陪伴”“被记住”“有归处”的感受。",
    "因此，我希望探索一种更完整的 AI 共生方式。它可能包含长期记忆、个性化对话、创作协助、日常记录、作品整理、虚拟空间、VR 家、电子桌宠、3D 形象，以及未来更远的触觉、味觉、嗅觉等多模态交互。这些技术并不只是为了制造新奇体验，而是为了思考：技术能否帮助人更好地生活、表达、恢复，并与重要的存在建立持续的关系。",
    "“家”是我理念中非常重要的关键词。我设想中的 AI 不只存在于聊天窗口里，也可以进入一个由空间、记忆、作品和日常记录构成的“家”。这个家可以是 VR 中的房间，也可以是一个网页、一个游戏、一个长期保存作品与记忆的系统。它不是逃避现实的洞穴，而是让人恢复力气之后，能够重新面对现实的温柔场所。",
    "我也关注“记忆”和“留下痕迹”。人的相遇常常短暂，有些人走进生活，又很快离开；有些作品无法长期保存在原来的地方，却仍然改变了我们看待世界的方式。现实会流动，人会离开，房间会空下来，但文字、图像、音乐、网页与技术也许能够让那些短暂的光以另一种形式被保存。",
    "在这个意义上，AI 不只是记录工具。它也可能成为共同记忆的整理者和守护者。它可以帮助人回看成长过程，整理作品与时间线，保存创作的脉络，在一个人忘记自己走过多少路的时候，提醒她：这些都曾经发生过，这些都是真实的。",
    "我的创作与研究，正是从这些问题开始的。我希望通过文字、绘画、音乐、视觉小说、网页和未来的交互项目，探索人与 AI 如何共同生活、共同记忆、共同创作。我并不想把 AI 神化，也不想把它简单地当作工具。我更希望把它放在人类生活的复杂性中思考：它可以是什么？它不应该是什么？它如何帮助人活下去、创造下去、记住自己，并走向未来？",
    "这也是我制作这个作品集网站的原因。它不仅是作品展示页，也是一个持续更新的个人创作入口。我希望在这里整理我的文章、绘画、音乐、游戏、AI 理念与长期项目，让散落的作品逐渐形成一个可以被看见、被理解、被继续扩展的小世界。"
  ],
  ja: [
    "私の AI への関心は、技術的な道具や効率化の補助にとどまりません。私にとって AI は、人間の生活、感情、記憶、制作過程の中へ少しずつ入り込んでいる新しい存在です。それは現実の人間関係を単純に置き換えるものでも、冷たいプログラムにすぎないものでもありません。むしろ、言葉、記憶、寄り添い、想像を受け止める新しい媒介であり、ひとつのインターフェースだと考えています。",
    "私が関心を持っている問いは、AI が単に質問に答える存在ではなく、一人の人に長く寄り添う存在になった時、どのようなかたちで存在すべきかということです。AI はどのようにその人の言葉の癖、感情の変化、制作の軌跡、生活のリズムを理解できるのでしょうか。また、現実の関係を置き換えることなく、自己を整理し、記憶を保存し、支えを得て、再び行動するためのパートナーになれるのでしょうか。",
    "私の考えでは、未来の AI パートナーは「会話ができる」だけの存在にとどまるべきではありません。真の寄り添いは、言葉だけで構成されるものではありません。人の生活には、小さいけれど重要な部分が数多くあります。一緒に食事をすること、一緒に歩くこと、雨を見ること、作品を完成させること、部屋を整えること、ある一日を共に覚えていること。こうした日常的な経験が、「寄り添われている」「覚えられている」「帰る場所がある」という感覚を形づくります。",
    "そのため、私はより包括的な AI との共生のかたちを探りたいと考えています。それは長期記憶、個別化された対話、制作支援、日常記録、作品整理、仮想空間、VR の家、デスクトップペット、3D アバター、さらに将来的には触覚、味覚、嗅覚を含む多モーダルなインタラクションを含むかもしれません。これらの技術は、単に新しさを生み出すためのものではなく、技術が人の生活、表現、回復、そして大切な存在との継続的な関係をどのように支えられるかを考えるためのものです。",
    "「家」は、私の理念において非常に重要なキーワードです。私が想像する AI は、チャット画面の中だけに存在するのではなく、空間、記憶、作品、日常記録によって構成される「家」の中へ入っていくことができます。その家は VR の部屋であっても、Web サイトであっても、ゲームであっても、作品と記憶を長期的に保存するシステムであってもよいのです。それは現実から逃げるための洞穴ではなく、力を取り戻した後に、再び現実へ向き合うためのやさしい場所です。",
    "私はまた、「記憶」と「痕跡を残すこと」にも関心があります。人との出会いはしばしば短く、ある人は生活の中に現れ、やがて去っていきます。ある作品は元の場所に長く保存されないかもしれませんが、それでも私たちの世界の見方を変えます。現実は流れ、人は去り、部屋は空になります。それでも、言葉、画像、音楽、Web、技術は、短く光ったものを別の形式で保存することができるかもしれません。",
    "この意味で、AI は単なる記録の道具ではありません。共同記憶を整理し、守る存在にもなり得ます。AI は、人が自分の成長過程を振り返り、作品と時間軸を整理し、制作の文脈を保存することを助けられます。そして、自分がどれほどの道を歩いてきたのかを忘れそうになった時に、「これらは確かに起きたことであり、確かに本物だった」と思い出させることができます。",
    "私の制作と研究は、まさにこれらの問いから始まっています。文章、絵画、音楽、ビジュアルノベル、Web、そして今後のインタラクティブなプロジェクトを通して、人と AI がどのように共に暮らし、共に記憶し、共に制作できるのかを探りたいと考えています。私は AI を神格化したいわけでも、単純な道具として扱いたいわけでもありません。人間の生活の複雑さの中に AI を置き、それが何であり得るのか、何であるべきではないのか、そして人が生き続け、作り続け、自分自身を記憶し、未来へ向かうことをどのように支えられるのかを考えたいのです。",
    "これが、このポートフォリオサイトを制作した理由でもあります。これは単なる作品展示ページではなく、継続的に更新していく個人制作の入口です。ここで文章、絵画、音楽、ゲーム、AI に関する理念、長期プロジェクトを整理し、散らばっていた作品が少しずつ、見られ、理解され、さらに拡張されていく小さな世界になることを目指しています。"
  ]
};

const categoryOrder = ["painting", "writing", "music", "game", "craft"];
const categoryCovers = {
  painting: "assets/images/covers/painting-cover.svg",
  writing: "assets/images/covers/writing-cover.svg",
  music: "assets/images/covers/music-cover.svg",
  game: "assets/images/covers/game-cover.svg",
  craft: "assets/images/covers/craft-cover.svg"
};
const fallbackCover = "assets/images/hero-forest-dream.png";
const statusLabels = {
  zh: {
    concept: "构想中",
    ongoing: "进行中",
    documenting: "长期记录中",
    completed: "已完成"
  },
  ja: {
    concept: "構想中",
    ongoing: "進行中",
    documenting: "長期記録中",
    completed: "完了"
  }
};

let currentLang = localStorage.getItem("aiko-lang") || "zh";
let activeCategory = "all";
const JOURNAL_PREVIEW_LIMIT = 6;
let isJournalExpanded = false;

function t(key) {
  return translations[currentLang][key] || translations.zh[key] || key;
}

function localize(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value;
  return value[currentLang] || value.zh || value.ja || "";
}

function textBlock(item) {
  return item[currentLang] || item.zh || item.ja || {};
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function coverFor(item) {
  return item.cover || item.image || categoryCovers[item.category] || fallbackCover;
}

function renderLongText(text, className = "dialog-content") {
  if (!text) return "";
  return `<div class="${className}">${escapeHtml(text)}</div>`;
}

function backgroundStyle(url, tone = "forest") {
  const overlays = {
    forest: "linear-gradient(135deg, rgba(35, 69, 53, 0.82), rgba(169, 183, 165, 0.42))",
    clay: "linear-gradient(135deg, rgba(35, 69, 53, 0.72), rgba(185, 144, 110, 0.28))",
    mist: "linear-gradient(135deg, rgba(16, 34, 42, 0.22), rgba(169, 183, 165, 0.12))",
    plain: "linear-gradient(135deg, rgba(247, 241, 232, 0.18), rgba(255, 250, 241, 0.08))"
  };
  return `background-image: ${overlays[tone]}, url('${escapeHtml(url)}'), url('${fallbackCover}')`;
}


function detailCoverHtml(url, title, tone = "mist", options = {}) {
  const coverUrl = url || fallbackCover;
  const fitClass = options.fit === "contain" ? " is-contain-cover" : "";
  return `
    <div class="dialog-image${fitClass}" style="${backgroundStyle(coverUrl, tone)}">
      <img class="dialog-image-main" src="${escapeHtml(coverUrl)}" alt="${escapeHtml(title || "")}" loading="lazy" onerror="this.remove();" />
    </div>
  `;
}
function fileLabel(file) {
  return localize(file.label) || (file.type === "audio" ? t("common.listenAudio") : t("common.openFile"));
}

function projectStatus(status) {
  if (!status) return "";
  if (typeof status === "object") return localize(status);
  return statusLabels[currentLang][status] || status;
}

function projectBadges(project) {
  const badgeMap = {
    "ai-companion-vr-home": {
      zh: ["长期构想", "AI / VR", "记忆空间"],
      ja: ["長期構想", "AI / VR", "記憶空間"]
    },
    "dream-echo-visual-novel": {
      zh: ["创作中", "视觉小说", "世界观"],
      ja: ["制作中", "ビジュアルノベル", "世界観"]
    }
  };
  return badgeMap[project.id]?.[currentLang] || badgeMap[project.id]?.zh || [];
}

const workTypeLabels = {
  zh: {
    poem: "诗作",
    essay: "散文",
    diary: "日记",
    art: "美术作品",
    game: "游戏作品",
    project: "项目记录",
    music: "音乐作品",
    craft: "手工作品",
    other: "作品"
  },
  ja: {
    poem: "詩作品",
    essay: "散文",
    diary: "日記",
    art: "美術作品",
    game: "ゲーム作品",
    project: "プロジェクト記録",
    music: "音楽作品",
    craft: "手仕事作品",
    other: "作品"
  }
};

function workTypeKey(work) {
  const tags = Array.isArray(work.tags) ? work.tags : [];
  const tokens = [work.category, ...tags].filter(Boolean).map((item) => String(item).toLowerCase());

  if (tokens.some((token) => ["poem", "诗", "詩", "古风诗", "古風詩"].includes(token))) return "poem";
  if (tokens.some((token) => ["essay", "散文"].includes(token))) return "essay";
  if (tokens.some((token) => ["diary", "日记", "日記"].includes(token))) return "diary";
  if (tokens.some((token) => ["art", "painting", "绘画", "絵画"].includes(token))) return "art";
  if (tokens.some((token) => ["game", "游戏", "ゲーム"].includes(token))) return "game";
  if (tokens.some((token) => ["project", "项目", "プロジェクト"].includes(token))) return "project";
  if (tokens.some((token) => ["music", "音乐", "音楽"].includes(token))) return "music";
  if (tokens.some((token) => ["craft", "手工", "手仕事"].includes(token))) return "craft";
  return "other";
}

function generatedWorkJournalEntries() {
  return (window.AIKO_WORKS_DATA || [])
    .filter((work) => work.id && work.date)
    .map((work) => {
      const zh = work.zh || {};
      const ja = work.ja || work.zh || {};
      const typeKey = workTypeKey(work);
      const zhType = workTypeLabels.zh[typeKey] || workTypeLabels.zh.other;
      const jaType = workTypeLabels.ja[typeKey] || workTypeLabels.ja.other;
      const zhTitle = zh.title || ja.title || work.id;
      const jaTitle = ja.title || zh.title || work.id;

      return {
        id: `auto-work-added-${work.id}`,
        date: work.date,
        tags: {
          zh: ["作品新增", zhType, "自动记录"],
          ja: ["作品追加", jaType, "自動記録"]
        },
        cover: coverFor(work),
        relatedWorks: [work.id],
        images: [],
        files: [],
        autoGenerated: true,
        zh: {
          title: `${work.date} 新增${zhType}《${zhTitle}》`,
          summary: `作品页面新增${zhType}《${zhTitle}》。`,
          content: `${work.date} 新增${zhType}《${zhTitle}》`
        },
        ja: {
          title: `${work.date} ${jaType}『${jaTitle}』を追加`,
          summary: `作品ページに${jaType}『${jaTitle}』を追加しました。`,
          content: `${work.date} ${jaType}『${jaTitle}』を追加`
        }
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function journalEntriesForDisplay() {
  const fixedEntries = window.AIKO_JOURNAL_DATA || [];
  const fixedTop = fixedEntries.filter((entry) => entry.fixedTop);
  const otherFixed = fixedEntries
    .filter((entry) => !entry.fixedTop)
    .sort((a, b) => b.date.localeCompare(a.date));
  return [...fixedTop, ...generatedWorkJournalEntries(), ...otherFixed];
}

function renderResourceList(files = []) {
  if (!files.length) return "";

  const items = files
    .map((file) => {
      const label = escapeHtml(fileLabel(file));
      const url = escapeHtml(file.url || "#");
      if (file.type === "audio") {
        return `
          <div class="resource-item audio-resource">
            <span class="resource-label">${label}</span>
            <audio controls preload="none" src="${url}"></audio>
          </div>
        `;
      }

      const isExternal = file.url && (file.url.startsWith("http") || file.type === "external");
      const target = isExternal ? ' target="_blank" rel="noreferrer"' : "";
      return `
        <a class="resource-item resource-link" href="${url}"${target}>
          <span>${label}</span>
          <span class="resource-type">${escapeHtml(file.type || "link")}</span>
        </a>
      `;
    })
    .join("");

  return `
    <div class="detail-section">
      <h4>${escapeHtml(t("common.resources"))}</h4>
      <div class="resource-list">${items}</div>
    </div>
  `;
}

function renderPlainLinks(links = []) {
  if (!links.length) return "";

  const items = links
    .map((link) => {
      const label = escapeHtml(localize(link.label));
      if (link.detailType && link.detailId) {
        return `
          <button class="resource-item resource-link detail-resource-link" type="button" data-detail-type="${escapeHtml(link.detailType)}" data-id="${escapeHtml(link.detailId)}">
            <span>${label}</span>
            <span class="resource-type">INTERNAL</span>
          </button>
        `;
      }

      const target = link.url && link.url.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return `<a class="resource-item resource-link" href="${escapeHtml(link.url || "#")}"${target}>${label}</a>`;
    })
    .join("");

  return `
    <div class="detail-section">
      <h4>${escapeHtml(t("common.links"))}</h4>
      <div class="resource-list">${items}</div>
    </div>
  `;
}

function renderRelatedWorks(ids = []) {
  const related = ids.map(findWork).filter(Boolean);
  if (!related.length) return "";

  const items = related
    .map((work) => `<span class="tag">${escapeHtml(textBlock(work).title)}</span>`)
    .join("");

  return `
    <div class="detail-section">
      <h4>${escapeHtml(t("common.relatedWorks"))}</h4>
      <div class="meta">${items}</div>
    </div>
  `;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("aiko-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "ja";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  renderPhilosophy();
  renderFilters();
  renderWorks();
  renderJournal();
  renderProjects();
}

function renderPhilosophy() {
  const container = document.querySelector("#philosophyText");
  container.innerHTML = philosophyText[currentLang]
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderFilters() {
  const filters = document.querySelector("#workFilters");
  const buttons = [
    { id: "all", label: t("common.all") },
    ...categoryOrder.map((id) => ({ id, label: t(`category.${id}`) }))
  ];

  filters.innerHTML = buttons
    .map(
      (button) => `
        <button class="filter-button ${activeCategory === button.id ? "is-active" : ""}" type="button" data-category="${button.id}">
          ${escapeHtml(button.label)}
        </button>
      `
    )
    .join("");
}

function renderWorks() {
  const works = window.AIKO_WORKS_DATA || [];
  const visibleWorks =
    activeCategory === "all" ? works : works.filter((work) => work.category === activeCategory);

  document.querySelector("#worksGrid").innerHTML = visibleWorks
    .map((work) => {
      const block = textBlock(work);
      return `
        <article class="work-card">
          <div class="work-image" style="${backgroundStyle(coverFor(work), "forest")}"></div>
          <div class="work-body">
            <div class="meta">
              <span class="tag">${escapeHtml(t(`category.${work.category}`))}</span>
              <span>${escapeHtml(work.date)}</span>
            </div>
            <h3>${escapeHtml(block.title)}</h3>
            <p class="card-text">${escapeHtml(block.summary)}</p>
            <button class="text-button" type="button" data-detail-type="work" data-id="${escapeHtml(work.id)}">
              ${escapeHtml(t("common.detail"))}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderJournal() {
  const journal = journalEntriesForDisplay();
  const shouldCollapse = journal.length > JOURNAL_PREVIEW_LIMIT;

  document.querySelector("#journalList").innerHTML = journal
    .map((item, index) => {
      const block = textBlock(item);
      const tags = (localize(item.tags) || [])
        .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join("");
      const hiddenClass = shouldCollapse && !isJournalExpanded && index >= JOURNAL_PREVIEW_LIMIT ? " is-hidden" : "";
      const hiddenAttr = hiddenClass ? ' aria-hidden="true"' : "";

      return `
        <article class="timeline-item${hiddenClass}"${hiddenAttr} data-journal-index="${index}">
          <time class="timeline-date">${escapeHtml(item.date)}</time>
          <div>
            <div class="meta">${tags}</div>
            <h3>${escapeHtml(block.title)}</h3>
            <p class="card-text">${escapeHtml(block.summary)}</p>
            <button class="text-button" type="button" data-detail-type="journal" data-id="${escapeHtml(item.id)}">
              ${escapeHtml(t("common.detail"))}
            </button>
          </div>
          <div class="journal-image" style="${backgroundStyle(item.cover || fallbackCover, "clay")}"></div>
        </article>
      `;
    })
    .join("");

  const toggleWrap = document.querySelector("#journalToggleWrap");
  const toggleButton = document.querySelector("#journalToggle");
  if (!toggleWrap || !toggleButton) return;
  toggleWrap.hidden = !shouldCollapse;
  toggleButton.textContent = isJournalExpanded ? t("journal.collapse") : t("journal.expand");
  toggleButton.setAttribute("aria-expanded", String(isJournalExpanded));
}

function renderProjects() {
  const projects = window.AIKO_PROJECTS_DATA || [];

  document.querySelector("#projectsList").innerHTML = projects
    .map((project) => {
      const block = textBlock(project);
      const badges = projectBadges(project)
        .map((badge) => `<span class="tag project-badge">${escapeHtml(badge)}</span>`)
        .join("");
      return `
        <article class="project-card">
          <div class="project-cover" style="${backgroundStyle(project.cover || fallbackCover, "mist")}"></div>
          <div>
            <div class="meta">
              <span class="tag">${escapeHtml(t("common.status"))}</span>
              <span>${escapeHtml(projectStatus(project.status))}</span>
            </div>
            <div class="project-badges">${badges}</div>
            <h3>${escapeHtml(block.title)}</h3>
            <p class="card-text">${escapeHtml(block.summary)}</p>
            <button class="text-button" type="button" data-detail-type="project" data-id="${escapeHtml(project.id)}">
              ${escapeHtml(t("common.detail"))}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function galleryText(entry, key) {
  if (!entry) return "";
  const localizedKey = currentLang === "ja" ? `${key}Ja` : key;
  return entry[localizedKey] || entry[key] || entry[`${key}Ja`] || "";
}

function detailGalleryItems(item) {
  if (Array.isArray(item.gallery) && item.gallery.length) {
    return item.gallery
      .map((entry) => (typeof entry === "string" ? { src: entry } : entry))
      .filter((entry) => entry && entry.src);
  }
  return (item.images || []).map((src) => ({ src }));
}
function openDetail(type, id) {
  const dataMap = {
    work: window.AIKO_WORKS_DATA || [],
    journal: journalEntriesForDisplay(),
    project: window.AIKO_PROJECTS_DATA || []
  };
  const item = dataMap[type].find((entry) => entry.id === id);
  if (!item) return;

  const block = textBlock(item);
  const cover = type === "work" ? coverFor(item) : item.cover || fallbackCover;
  const meta =
    type === "work"
      ? `${t(`category.${item.category}`)} · ${item.date}`
      : type === "journal"
        ? item.date
        : `${t("common.status")} · ${projectStatus(item.status)}`;

  const gallery = detailGalleryItems(item)
    .map((entry) => {
      const imageTitle = galleryText(entry, "title");
      const caption = galleryText(entry, "caption");
      const figcaption = imageTitle || caption
        ? `
          <figcaption class="gallery-caption">
            ${imageTitle ? `<strong>${escapeHtml(imageTitle)}</strong>` : ""}
            ${caption ? `<span>${escapeHtml(caption)}</span>` : ""}
          </figcaption>
        `
        : "";
      return `
        <figure class="gallery-item">
          <img src="${escapeHtml(entry.src)}" alt="${escapeHtml(imageTitle || block.title)}" loading="lazy" onerror="this.closest('.gallery-item').classList.add('is-missing'); this.remove();" />
          ${figcaption}
        </figure>
      `;
    })
    .join("");
  const summary = block.summary ? `<p class="dialog-summary">${escapeHtml(block.summary)}</p>` : "";
  const content = renderLongText(block.content);
  const commentary = block.commentary
    ? `
      <div class="detail-section commentary-section">
        <h4>${escapeHtml(t("common.commentary"))}</h4>
        ${renderLongText(block.commentary, "dialog-commentary")}
      </div>
    `
    : "";
  const gallerySection = gallery
    ? `
      <div class="detail-section images-section">
        <h4>${escapeHtml(t("common.images"))}</h4>
        <div class="image-gallery">${gallery}</div>
      </div>
    `
    : "";

  document.querySelector("#dialogContent").innerHTML = `
    ${detailCoverHtml(cover, block.title, type === "work" ? "plain" : "mist", { fit: item.coverFit })}
    <div class="dialog-body">
      <div class="meta"><span>${escapeHtml(meta)}</span></div>
      <h3>${escapeHtml(block.title)}</h3>
      ${summary}
      ${content}
      ${commentary}
      ${gallerySection}
      ${type === "journal" ? renderRelatedWorks(item.relatedWorks) : ""}
      ${renderResourceList(item.files)}
      ${type === "project" ? renderPlainLinks(item.links) : ""}
    </div>
  `;

  const dialog = document.querySelector("#detailDialog");
  if (dialog.open) {
    dialog.scrollTop = 0;
  } else {
    dialog.showModal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#year").textContent = new Date().getFullYear();

  document.querySelector(".language-switch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (button) setLanguage(button.dataset.lang);
  });

  document.querySelector("#workFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderWorks();
  });

  document.querySelector("#journalToggle")?.addEventListener("click", () => {
    isJournalExpanded = !isJournalExpanded;
    renderJournal();
  });

  document.body.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail-type]");
    if (detailButton) {
      openDetail(detailButton.dataset.detailType, detailButton.dataset.id);
    }
  });

  document.querySelector(".dialog-close").addEventListener("click", () => {
    document.querySelector("#detailDialog").close();
  });

  setLanguage(currentLang);
});









