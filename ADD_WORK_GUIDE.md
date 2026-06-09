# Aiko Works 添加作品说明

这份说明适合以后自己添加新作品时查看。Aiko Works 是静态网站，没有后台和数据库。新增作品的核心方法是：把素材放进 `assets/`，然后在 `data/works.js` 的 `works` 数组里追加一个作品对象。

也可以先打开 `content-helper.html`，填写表单后复制它生成的对象代码，再粘贴到 `data/works.js`。

## 当前项目实际使用的作品字段

当前 `data/works.js` 使用这种结构：

```js
{
  id: "unique-work-id",
  category: "writing",
  date: "2026-06-08",
  cover: "",
  images: [],
  files: [],
  tags: ["文学", "诗"],
  featured: false,
  zh: {
    title: "中文标题",
    summary: "中文摘要",
    content: `中文正文`,
    commentary: `作品说明，可选`
  },
  ja: {
    title: "日本語タイトル",
    summary: "日本語の概要",
    content: `日本語本文`,
    commentary: `作品解説、任意`
  }
}
```

注意：你之前可能见过 `titleJa`、`summaryJa`、`contentJa` 这种写法，但当前项目实际使用的是 `ja.title`、`ja.summary`、`ja.content`。为了让网站正常读取，请按当前结构填写。

## 分类 category 怎么填

当前网站支持这些分类：

- `painting`：绘画、美术作品、素描、插画。
- `writing`：文学、诗、散文、短文、日记、作品说明。
- `music`：音乐作品、旋律、声音实验、BGM。
- `game`：游戏与互动作品、视觉小说原型、交互项目。
- `craft`：手工与生活作品、小物件、生活观察、手作记录。

不要随意新增 `literature`、`art`、`handmade` 等新分类，除非你同时修改 `script.js` 里的分类列表和默认封面逻辑。现在写文字作品请用 `writing`，绘画作品请用 `painting`。

## 摘要和正文的区别

`summary / ja.summary`：用于作品列表页。读者还没有点进详情时，通过摘要快速知道这是什么作品。摘要建议 1 到 3 句话。

`content / ja.content`：用于作品详情页。可以放完整文章、诗歌原文、散文正文、创作说明等。短文可以直接放全文。长文以后可以改成 HTML 或 PDF 外链，但目前可以先直接放正文。

`commentary / ja.commentary`：可选字段。适合放“作品说明 / 作品解説”。如果有原文和作品说明，推荐把原文放在 `content`，把说明放在 `commentary`，这样详情页会分开显示。

## 原文排版要注意

诗歌和散文原文要保留原本换行。不要把诗歌压缩成一整段。

如果正文和作品说明都放在 `content` 里，中间至少留一个空行。但当前项目已经支持 `commentary`，更推荐这样写：

```js
zh: {
  title: "早春",
  summary: "这是一首写于早春的诗。",
  content: `《早春》2026.4.21

提笔，凝噎长。
无声何成信？

——Aiko`,
  commentary: `这首诗写的是早春来临时，那种似乎有什么正在苏醒，却还无法确认的状态。`
}
```

详情页会保留 `content` 里的换行、空行、署名和日期。

## 添加文字作品

适合：诗、散文、日记、短文、作品说明等。

步骤：

1. 打开 `data/works.js`。
2. 在 `const works = [` 和 `];` 之间追加一个新对象。
3. `category` 填 `writing`。
4. `cover` 可以保持空字符串 `""`，网站会使用文字分类默认封面。
5. 诗歌、散文正文请用反引号 `` `...` `` 包起来，这样可以保留换行。
6. 保存文件，刷新 `index.html`。

模板：

```js
{
  id: "unique-work-id",
  category: "writing",
  date: "2026-06-08",
  cover: "",
  images: [],
  files: [],
  tags: ["文学", "散文"],
  featured: false,
  zh: {
    title: "中文标题",
    summary: "这里写中文摘要，用于作品列表页。",
    content: `这里写中文正文。
请保留原文换行。`,
    commentary: `这里写作品说明。如果没有说明，可以删除这一行。`
  },
  ja: {
    title: "日本語タイトル",
    summary: "ここに日本語の概要を書く。",
    content: `ここに日本語本文を書く。`,
    commentary: `ここに作品解説を書く。不要ならこの行を削除。`
  }
}
```

## 添加绘画作品

图片文件建议放到：

```text
assets/images/works/painting/
```

当前项目不是用单独的 `image` 字段，而是用：

- `cover`：卡片封面和详情页顶部氛围图。留空则用分类默认封面。
- `images`：真正的作品图片列表，会在详情页“作品图片 / Images”区域显示。

步骤：

1. 把图片放进 `assets/images/works/painting/`。
2. 在 `data/works.js` 添加新对象。
3. `category` 填 `painting`。
4. 如果想让卡片使用默认绘画封面，`cover` 保持 `""`。
5. 把真正的作品图路径写进 `images`。
6. 摘要写作品大概内容，正文可以写创作说明。

模板：

```js
{
  id: "work-art-example",
  category: "painting",
  date: "2026-06-08",
  cover: "",
  images: [
    "assets/images/works/painting/example.jpg"
  ],
  files: [],
  tags: ["绘画", "创作"],
  featured: false,
  zh: {
    title: "作品标题",
    summary: "这是一幅关于……的绘画作品。",
    content: `这里写创作说明。`
  },
  ja: {
    title: "作品タイトル",
    summary: "これは……をテーマにした絵画作品。",
    content: `ここに制作説明を書く。`
  }
}
```

## 添加音乐作品

音频文件推荐放到：

```text
assets/audio/
```

如果你已经把音频放在别的位置，也可以使用实际路径，例如当前作品《初次的旋律》使用的是：

```text
assets/images/works/music/初音.wav
```

当前项目不是用单独的 `audio` 字段，而是用 `files` 数组：

```js
files: [
  {
    type: "audio",
    label: {
      zh: "播放音乐",
      ja: "音楽を再生"
    },
    url: "assets/audio/first-melody.mp3"
  }
]
```

正文可以为空字符串 `""`。正文为空时，详情页不会显示“无”这个字。

模板：

```js
{
  id: "first-melody",
  category: "music",
  date: "2026-06-08",
  cover: "",
  images: [],
  files: [
    {
      type: "audio",
      label: {
        zh: "播放音乐",
        ja: "音楽を再生"
      },
      url: "assets/audio/first-melody.mp3"
    }
  ],
  tags: ["音乐", "第一次创作"],
  featured: false,
  zh: {
    title: "初次的旋律",
    summary: "第一次创作的音乐，旋律给人带来轻松和愉悦的感觉。",
    content: ""
  },
  ja: {
    title: "初めてのメロディ",
    summary: "初めて制作した音楽作品。軽やかで心地よい旋律が、聴く人にリラックスした愉快な印象を与える。",
    content: ""
  }
}
```

## 添加文章、PDF 或外部链接

如果作品有长文章、PDF、外部页面，可以放进 `files`。

```js
files: [
  {
    type: "article",
    label: {
      zh: "阅读文章",
      ja: "文章を読む"
    },
    url: "assets/files/articles/example.html"
  },
  {
    type: "pdf",
    label: {
      zh: "打开 PDF",
      ja: "PDF を開く"
    },
    url: "assets/files/pdf/example.pdf"
  },
  {
    type: "external",
    label: {
      zh: "外部链接",
      ja: "外部リンク"
    },
    url: "https://example.com"
  }
]
```

## 新增作品后，更新记录会自动出现

当前“日记 / 更新记录”页面已经从 `data/works.js` 自动生成作品新增记录。

只要你在 `works.js` 中新增作品对象，更新记录页面会自动出现类似：

```text
2026-05-24 新增诗作《早时梦》
2026-05-05 新增散文《山中好长日》
2026-06-08 新增音乐作品《初次的旋律》
```

所以你不需要每次新增作品后再手动维护另一个更新记录数组。`data/journal.js` 主要用于保留网站建成、页面结构调整等固定网站记录。


## 作品突然全部不显示时

如果你修改 `data/works.js` 后，网站里的作品突然都不见了，通常是作品数据文件里有 JS 格式错误。请先检查你最后修改的那一篇作品。

常见原因：

- 作品对象之间少了英文逗号 `,`。
- 普通双引号 `"..."` 被直接写成了多行正文。
- 反引号 `` ` `` 没有闭合。
- `{}` 或 `[]` 少了半边。
- 字符串里的引号没有闭合。
- 新对象粘贴到了 `const works = [` 和 `];` 外面。
- 最后一行 `window.AIKO_WORKS_DATA = works;` 被误删。

多行正文推荐这样写：

```js
content: `这里是第一行正文。
这里是第二行正文。
这里可以继续保留诗歌、散文的换行。`
```

不要这样写：

```js
content: "这里是第一行正文。
这里是第二行正文。"
```

如果正文里本身出现反引号，需要写成 `\``，或者把那一个符号改成普通引号，避免提前结束字符串。

使用 `content-helper.html` 生成对象会更安全。生成后复制整段对象，粘贴到 `works` 数组里，再保存并刷新 `index.html`。
## 添加作品后请检查

□ 作品标题显示正常  
□ 摘要显示正常  
□ 作品详情页可以打开  
□ 正文换行没有被压缩  
□ 日文翻译显示正常  
□ 图片 / 音频文件可以正常加载  
□ 更新记录自动出现新增作品  
□ 页面没有出现隐私词  
□ 本地预览正常  
□ 部署版本正常  

## 常见路径提醒

网页路径必须使用 `/`，不要使用 Windows 的 `\`。

正确：

```text
assets/images/works/painting/example.jpg
assets/audio/first-melody.mp3
```

错误：

```text
assets\images\works\painting\example.jpg
电脑完整路径示例：桌面上的 example.jpg
```
