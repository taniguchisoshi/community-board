デプロイURL：https://script.google.com/macros/s/AKfycbwN4CdYSwI4WWMZ_XgGQSP4n4Vy9OhTMQinFHHVZzPJl8G_D2FgAWc-EjUG5l51fsrO/exec

# 谷口コミュニティ 返信ボードのつくり（記録）

作りは [jinjacafe-board](https://github.com/taniguchisoshi/jinjacafe-board) と同じ。谷口の作業はOAuth承認とデプロイの承認だけで、残りはClaudeが内蔵ブラウザで行った（2026-11-02）。

- 画面：GitHub Pages（このリポジトリの root）。https://taniguchisoshi.github.io/community-board/
- データとAPI：Googleスプレッドシート「谷口コミュニティ 返信ボード」（soshi7393@gmail.com のドライブ）＋ 紐づいた Apps Script（`apps-script/Code.gs`・`StoreSeed.gs`）
- 鍵：ボードは URL の `?k=`（config シートの boardUrl）。Claude 用の apiToken は config シートにだけある（AI-Vault・このリポジトリには書かない）
- 通知：Slack「コミュニティ-返信通知」（C0CDURUNRDK）
- 巡回：常駐Mac「soshiのMacBook Pro」のClaudeアプリ（内蔵ブラウザ）で1日3回（9・15・21時台）。モデル Sonnet
- 対象：心電図循環器コミュニティ（MOSH 293155・全部屋）／MAT（MOSH 376911・全部屋）／Yoor（https://yoor.jp/room/taniguchisoshi）
- config の tone・facts・rules の元文は `config/` にある（正本は config シート。tone 末尾「■最近の修正から学んだこと」はClaudeが追記する）

## 直すとき
- 画面：このリポジトリの `index.html` を直して push（1~2分で反映）
- API：Apps Script を直したら「デプロイ → デプロイを管理 → ✏ → 新バージョン → デプロイ」（URLは変わらない）
- ボードURLが漏れた：Apps Script で `resetBoardKey` を実行し、config の boardUrl を使う。巡回タスクの指示文のURLも差し替える

## API（Claude 用メモ）
jinjacafe-board の SETUP.md と同じ。items の項目：id, source（心電図循環器|MAT|Yoor）, room, roomUrl, kind（自己紹介|質問|相談|報告|雑談|返事）, author, commentDate, commentHead, comment（全文）, postUrl, postTitle, draft, note, isFollowup, thread, status, finalText, edited, factFlagged, toneLogged, reactionDone, requestedAt, doneAt, repliedBy, error, createdAt, version。
