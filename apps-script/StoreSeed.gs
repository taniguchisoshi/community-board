/** このスプレッドシートのID（URLの /d/ と /edit の間）。シートに紐づかないプロジェクトで動かすときだけ使います（紐づいていれば空でよい）。 */
const SHEET_ID = "";

/**
 * 谷口コミュニティ返信ボードの初期値。
 * setup() が config シートの「空いている行」にだけ入れます。入れたあとは config シートが正本です。
 * tone・facts・rules は Claude が API の setConfig で入れます（長いのでここには書きません）。
 */
const STORE_SEED = {
  storeName: "谷口コミュニティ",
  storeFullName: "谷口総志",
  themeColor: "#1f6f5c",
  logoUrl: "",
  pageUrl: "https://taniguchisoshi.github.io/community-board/",
  slackChannelId: "C0CDURUNRDK",
  slackChannelName: "コミュニティ-返信通知",
  patrolStaleMin: 420,
  patrolTimes: "9・15・21時台",
  sources: [
    { name: "心電図循環器", code: "ecg", bg: "#e8f0fe", fg: "#1a56c4", url: "https://mosh.jp/user/memberships/293155/posts",
      rooms: [{ name: "相談ルーム", url: "https://mosh.jp/user/memberships/293155/posts/99581" }] },
    { name: "MAT", code: "mat", bg: "#e3efeb", fg: "#1f6f5c", url: "https://mosh.jp/user/memberships/376911/posts",
      rooms: [
        { name: "みんなのAI実践室", url: "https://mosh.jp/user/memberships/376911/posts/113128" },
        { name: "ご入会ありがとうございます（自己紹介）", url: "https://mosh.jp/user/memberships/376911/posts/113127" },
        { name: "テンプレート保管庫", url: "https://mosh.jp/user/memberships/376911/posts/113126" },
        { name: "セミナーアーカイブの部屋", url: "https://mosh.jp/user/memberships/376911/posts/113188" },
        { name: "MAT共創室", url: "https://mosh.jp/user/memberships/376911/posts/113534" },
      ] },
    { name: "Yoor", code: "yoor", bg: "#fde7f0", fg: "#b5236b", url: "https://yoor.jp/room/taniguchisoshi", rooms: [] },
  ],
  facts: "",
  rules: "",
  tone: "",
};
