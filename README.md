# Kit Gaw v0.8α-2｜探索盤差分・最新版合流

ベース: kit-gaw-v072-screen2-density-fix-static.zip（開通2件＋準備中4件、プロフィール本体版）
合流: 先に作成したv0.8α探索盤（screen-home）の差分のみ

## 変更したファイル
index.html / style.css / script.js（3ファイルすべてに変更あり。README以外）

## 変更したHTMLブロック
`screen-home` のみ全面差し替え。他の6画面（部屋を探す／ビートルズ仮受け皿／コミュニティ詳細／問い詳細／プロフィール）は無変更。

## 追加したCSSクラス（「/* 探索盤（screen-home） */」以降にすべて集約）
.board-brand / .board-block / .board-first-time-heading / .board-starter-list /
.board-later-section / .board-later-count / .board-later-list / .board-later-row /
.board-next-path-section / .board-signpost-list / .board-signpost-context /
.board-signpost-room / .board-other-places-button
※ .room-card / .room-button / .room-list / .waiting-label / .section-label / .secondary-button は
既存最新版に残っていたため、そのまま再利用（新規追加なし）。

## 追加したJavaScript
explorationState / boardFirstTime / boardReturning / boardLaterSection /
boardNextPathSection / boardStarterOpenButton / boardResumeButton /
applyExplorationState() と、その2つのボタンのイベント登録のみ。
既存の showScreen・setProfileModel・他ボタンの結線はすべて無変更。

## 維持した最新版要素
- screen-explore: 開通2件（🍏ビートルズ／🎸ハードロック）＋準備中4件、compact-room-*構成、自分の部屋名刺リンク
- screen-beatles（ビートルズの仮受け皿）
- screen-profile: アバター／部屋名刺©️／よくいる部屋／よく戻る問い／距離感／体験例／別の見方を見る／合図を置く
- 既存5画面の全遷移

## 削除／不採用にした古い差分
- 旧v0.7.1のscreen-home（splash+「部屋を歩いてみる」ボタン）
- 探索盤側ファイルにあった可能性のある旧screen-explore/screen-profile構成（今回は最新版側を採用したため合流対象外）
- 「この先に続く場所」は指示により2件→1件に整理（🌙夜型生活の観測室のみ）

## 4状態の確認方法
`script.js` 冒頭の `explorationState` を次のいずれかに変更してください（既定は `"with-next-path"`）。
- "first-time" / "returned" / "with-later" / "with-next-path"

## 既存画面遷移の確認結果
Playwrightで以下をすべて自動確認済み（エラーなし）。
- 入口(探索盤)→ほかの場所を見る→部屋を探す
- 部屋を探す→ビートルズ仮受け皿→戻る
- 部屋を探す→ハードロックの矛盾→問い→この見方を置いた人を見る(プロフィール)
- プロフィールの「別の見方を見る」「合図を置く」モーダル開閉
- 部屋を探す→自分の部屋名刺©️を見る→プロフィール
- 探索盤「続きを見る」→コミュニティ
- 探索盤(初回)「この部屋を歩く」→コミュニティ
- 4状態の切替とレイアウト崩れなし、横はみ出しなし、JSエラーなし
