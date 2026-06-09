# Aiko Works 快速开始

## 最常用的更新方法

1. 把图片放进 `assets/images/works/painting/` 等对应文件夹。
2. 打开 `content-helper.html`。
3. 填写作品、日记或项目内容。
4. 复制生成的对象代码。
5. 粘贴到 `data/works.js`、`data/journal.js` 或 `data/projects.js` 的数组里。
6. 保存文件，刷新 `index.html`。

## 路径规则

网页路径必须使用 `/`，不能使用 Windows 的 `\`。

正确：

```text
assets/images/works/painting/my-image.jpg
```

错误：

```text
assets\images\works\painting\my-image.jpg
```

不要使用电脑完整路径。建议始终填写从 `assets/` 开始的相对路径。

## 图片不显示时先检查

- 文件是否真的放进 `assets/images/works/painting/`。
- 文件名和路径是否完全一致。
- 扩展名是 `.jpg`、`.jpeg` 还是 `.png`。
- 路径是否使用了 `/`。
- 是否保存了 `works.js` 并刷新了 `index.html`。

如果 `cover` 留空，网站会自动使用对应分类的默认封面。`images` 用来放真正的作品图片。
## 更新记录会自动生成

新增作品时，只需要把作品对象添加到 `data/works.js`。`日记 / 更新记录` 页面会自动根据作品日期、标题和分类生成“新增作品”记录，不需要再到 `data/journal.js` 重复写一遍。

`data/journal.js` 主要保留网站建成、页面结构调整等固定网站记录。
## 详细作品模板

如果要添加诗、散文、绘画或音乐作品，请优先查看 `ADD_WORK_GUIDE.md`。那里按当前项目真实结构写了可复制模板：`zh.title / ja.title`、`images`、`files`、`commentary` 等字段。

