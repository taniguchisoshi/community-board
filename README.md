# 谷口コミュニティ 返信ボード（画面）

心電図循環器コミュニティ（MOSH）・MAT（MOSH）・Yoor に届いた会員の投稿への返信を、谷口総志が承認するためのボード画面です。
データは Google スプレッドシート（Apps Script）に保存し、この画面は GitHub Pages から配信します。作りは [jinjacafe-board](https://github.com/taniguchisoshi/jinjacafe-board) と同じです。

- `index.html` / `config.js` / `manifest.webmanifest` / アイコン：GitHub Pages で配信する画面
- `apps-script/Code.gs` / `StoreSeed.gs`：スプレッドシートに貼る Apps Script（API）
- 手順：`SETUP.md`
- ボードは鍵付きURL（`?k=`）でだけ開けます。URLは公開しません。
