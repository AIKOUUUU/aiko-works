# Aiko Works 小白更新说明

Aiko Works 是一个静态作品集网站。它没有后端、没有数据库、没有登录后台，也没有在线上传系统。

> 更详细的作品添加模板请看：`ADD_WORK_GUIDE.md`。当前项目实际使用 `zh.title / ja.title / zh.summary / ja.summary / zh.content / ja.content`，音乐文件放在 `files` 数组里，不使用顶层 `titleJa` 或 `audio` 字段。

更新网站的方法很简单：

1. 把图片、文章、PDF、音乐文件放进 `assets/` 文件夹。
2. 打开 `content-helper.html`，填写内容信息。
3. 复制它生成的 JS 对象代码。
4. 粘贴到 `data/works.js`、`data/journal.js` 或 `data/projects.js` 对应的数组里。
5. 保存文件，刷新 `index.html` 查看效果。
6. 如果网站已经发布到网上，本地改完后还需要重新部署，公开链接才会更新。

## 文件夹应该放什么

- `assets/images/works/painting/`：绘画作品图片。
- `assets/images/works/writing/`：文章、文字作品相关图片。
- `assets/images/works/music/`：音乐作品封面或相关图片。
- `assets/images/works/game/`：游戏与交互作品图片。
- `assets/images/works/craft/`：手工与生活作品图片。
- `assets/images/journal/`：日记 / 更新记录封面和图片。
- `assets/images/projects/`：长期项目封面和图片。
- `assets/images/covers/`：五个作品分类的默认封面。
- `assets/files/articles/`：长文章 HTML 文件。
- `assets/files/pdf/`：PDF 文件。
- `assets/audio/`：音乐、声音、mp3 文件。

## 添加一张绘画作品

1. 把绘画图片放进 `assets/images/works/painting/`。
2. 打开 `content-helper.html`。
3. 找到“添加作品 Work”表单。
4. `category` 选择 `painting`。
5. 填写 id、日期、中文标题、中文摘要、中文正文、日文标题、日文摘要、日文正文。
6. 如果有封面图，在 `cover 路径` 里填写，例如：

```text
assets/images/works/painting/my-painting.jpg
```

7. 如果有多张图片，在 `images 路径` 里一行写一张：

```text
assets/images/works/painting/my-painting-1.jpg
assets/images/works/painting/my-painting-2.jpg
```

8. 点击“生成作品对象”。
9. 复制生成的对象。
10. 打开 `data/works.js`。
11. 把对象粘贴到 `const works = [` 和 `];` 之间。
12. 保存文件，刷新 `index.html`。

如果 `cover` 留空，网站会自动使用绘画分类默认封面 `assets/images/covers/painting-cover.svg`。

## 图片路径一定要用 /

网页里的路径必须使用正斜杠 `/`，不能使用 Windows 的反斜杠 `\`。

正确：

```text
assets/images/works/painting/my-painting.jpg
```

错误：

```text
assets\images\works\painting\my-painting.jpg
```

也不要直接使用电脑完整路径。`content-helper.html` 会尽量自动把完整路径转换成从 `assets/` 开始的相对路径，但最稳妥的方法是自己填写：

```text
assets/images/works/painting/my-painting.jpg
```

如果图片显示成默认封面，请优先检查：

- 文件是否真的放进 `assets/images/works/painting/`。
- 文件名和路径是否完全一致。
- 扩展名是 `.jpg`、`.jpeg` 还是 `.png`。
- 路径是否使用了 `/`。
- 是否保存了 `data/works.js` 并刷新了 `index.html`。

## 添加一篇文章

如果是短文，可以直接写在作品或日记的 `content` 字段里。

如果是长文，建议做成 HTML 或 PDF：

1. HTML 文章放进 `assets/files/articles/`。
2. PDF 放进 `assets/files/pdf/`。
3. 在 `content-helper.html` 的 `files` 输入框里添加一行。

HTML 文章示例：

```text
article|阅读完整文章|assets/files/articles/my-essay.html
```

PDF 示例：

```text
pdf|打开 PDF|assets/files/pdf/my-essay.pdf
```

页面会在详情里显示可以点击的链接。

## 添加一首音乐

1. 把 mp3 文件放进 `assets/audio/`。
2. 打开 `content-helper.html`。
3. 在作品或日记的 `files` 输入框里添加：

```text
audio|听音乐|assets/audio/my-music.mp3
```

4. 生成对象，复制到对应 data 文件里。
5. 保存并刷新 `index.html`。

页面会自动显示 HTML5 音频播放器。

## 添加日记 / 更新记录

提示：新增作品后，`日记 / 更新记录` 页面会自动从 `data/works.js` 生成一条作品新增记录。只有网站结构调整、重要说明等固定更新，才需要手动修改 `data/journal.js`。

1. 打开 `content-helper.html`。
2. 找到“添加日记 Journal”表单。
3. 填写 id、日期、tags、封面、相关作品、图片、文件、中文内容和日文内容。
4. `tags` 用逗号分隔，例如：

```text
AI, 作品集, 创作记录
```

5. `relatedWorks` 填作品 id，用逗号分隔，例如：

```text
early-dream-2026-05-24, early-spring-2026-04-21
```

6. 点击“生成日记对象”。
7. 复制生成的对象。
8. 打开 `data/journal.js`。
9. 把对象粘贴到 `const journalEntries = [` 和 `];` 之间。
10. 保存并刷新 `index.html`。

Journal 会自动按日期从新到旧排序。

## 添加长期项目

1. 打开 `content-helper.html`。
2. 找到“添加项目 Project”表单。
3. 填写 id、status、封面、相关链接、文件、中文内容和日文内容。
4. `status` 建议使用：

```text
ongoing      进行中
concept      构想中
documenting  长期记录中
completed    已完成
```

5. `links` 每行写一个链接，格式是：

```text
链接文字|链接地址
```

例如：

```text
查看相关作品|#works
项目页面|https://example.com
```

6. 点击“生成项目对象”。
7. 复制生成的对象。
8. 打开 `data/projects.js`。
9. 把对象粘贴到 `const projects = [` 和 `];` 之间。
10. 保存并刷新 `index.html`。

## 替换五个分类封面

五个默认分类封面在 `assets/images/covers/`：

- `painting-cover.svg`：绘画
- `writing-cover.svg`：文字
- `music-cover.svg`：音乐
- `game-cover.svg`：游戏与交互
- `craft-cover.svg`：手工与生活作品

最简单的方法是：直接替换对应文件，文件名保持不变。

例如你想换绘画分类封面，就把新文件命名为：

```text
painting-cover.svg
```

然后放进：

```text
assets/images/covers/
```

如果你想使用 jpg 或 png，也可以修改 `script.js` 里的 `categoryCovers` 路径。



## 更新公开网站

本地刷新 `index.html` 只能看到你电脑上的新内容。

如果这个网站已经部署到 GitHub Pages、Netlify、Vercel 或其他平台，需要重新上传 / 重新部署，公开网页才会显示新内容。





