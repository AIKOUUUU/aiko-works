// Journal data
// Keep only fixed public site update records here.
// Work-added records are generated automatically from data/works.js in script.js.
const journalEntries = [
  {
    id: "site-built-aiko-works-2026-06-08",
    date: "2026-06-08",
    tags: {
      zh: ["网站", "作品集", "更新记录"],
      ja: ["サイト", "ポートフォリオ", "更新記録"]
    },
    cover: "",
    relatedWorks: [],
    images: [],
    files: [],
    fixedTop: true,
    zh: {
      title: "Aiko Works 成为可持续更新的创作入口",
      summary: "网站已经搭建完成，并整理为可以长期添加作品、文章、记录和项目的数据模块。",
      content: "Aiko Works 已经完成基础搭建。现在 Works、Journal 和 Projects 都使用独立的数据文件管理，之后可以继续添加绘画、文字、音乐、游戏、文章、更新记录和长期项目。这个页面将主要记录网站本身的更新，例如新增作品、页面结构调整和内容模块变化。"
    },
    ja: {
      title: "Aiko Works を継続更新できる制作入口へ",
      summary: "サイトの基本構成が完成し、作品、文章、記録、プロジェクトを長期的に追加できるデータ構造になりました。",
      content: "Aiko Works の基本的なサイト構成が完成しました。Works、Journal、Projects はそれぞれ独立したデータファイルで管理されており、今後も絵画、文章、音楽、ゲーム、記事、更新記録、長期プロジェクトを追加できます。このページでは主に、作品の追加、ページ構成の調整、コンテンツモジュールの更新など、サイト自体の変更を記録します。"
    }
  }
];

window.AIKO_JOURNAL_DATA = journalEntries;
