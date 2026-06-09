# Aiko Works 发布到 GitHub Pages 新手说明

这份说明用于把 Aiko Works 静态网站发布成公开链接。这个网站不需要后端、不需要数据库，GitHub Pages 可以直接发布。

## 1. 创建 GitHub 仓库

1. 打开 GitHub。
2. 点击右上角的 `+`，选择 `New repository`。
3. 仓库名建议填写：`aiko-works`。
4. 仓库可以选择 `Public`，这样别人才能通过公开链接访问。
5. 点击 `Create repository`。

## 2. 上传哪些文件

请上传发布文件夹里面的所有内容。仓库第一层必须直接看到：

- `index.html`
- `style.css`
- `script.js`
- `content-helper.html`
- `data/`
- `assets/`
- `QUICK_START.md`
- `UPDATE_GUIDE.md`
- `ADD_WORK_GUIDE.md`
- `GITHUB_PAGES_GUIDE.md`

不要只上传外层文件夹本身。也就是说，打开 GitHub 仓库后，第一层就应该能看到 `index.html`，而不是先看到一个 `aiko-works-github-pages` 文件夹。

## 3. 打开 GitHub Pages

1. 进入你的 GitHub 仓库。
2. 点击 `Settings`。
3. 在左侧找到 `Pages`。
4. 找到 `Build and deployment`。
5. `Source` 选择 `Deploy from a branch`。
6. `Branch` 选择 `main`。
7. `Folder` 选择 `/ root`。
8. 点击 `Save`。

## 4. 等待公开链接生成

GitHub 通常需要等待一小会儿。完成后，页面会显示一个公开链接，格式大概是：

`https://你的GitHub用户名.github.io/aiko-works/`

如果刚打开时显示 404，可以等几分钟再刷新。

## 5. 发布后检查网站

打开公开链接后，请检查：

- 首页是否正常显示；
- Works 作品列表是否正常显示；
- 作品详情页是否能打开；
- 图片 gallery 是否正常显示；
- 音乐播放器是否能播放；
- Journal / 更新记录是否自动显示作品新增记录；
- Projects 长期项目是否正常显示；
- 中文 / 日本語 切换是否正常；
- 手机端排版是否正常。

## 6. 以后如何更新作品

以后新增作品时，一般需要：

1. 把图片放进 `assets/images/works/` 下面合适的位置。
2. 把文章文件放进 `assets/files/articles/` 或 `assets/files/pdf/`。
3. 把音乐文件放进 `assets/audio/` 或项目当前使用的音频文件夹。
4. 在 `data/works.js` 里新增或修改作品对象。
5. 本地打开 `index.html` 检查正常。
6. 把改动上传到 GitHub，也就是 commit / upload 更新。
7. GitHub Pages 会自动更新公开网页。

## 7. 路径注意事项

网站里的资源路径必须使用相对路径，例如：

- `assets/images/works/example.jpg`
- `assets/images/works/flower-before-fall-01.jpg`
- `assets/images/works/music/初音.wav`
- `data/works.js`

不要使用电脑完整路径。公开网站只能读取仓库里的文件，不能读取你电脑上的私人文件夹。