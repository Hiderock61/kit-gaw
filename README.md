# Kit Gaw v0.7.2｜静的HTML模型

GitHub Pagesへそのまま置ける静的サイトです。ビルド工程はありません。

## ファイル

- `index.html`
- `style.css`
- `script.js`

## 公開方法

1. 3ファイル（READMEは任意）をGitHubリポジトリのルートへ置く
2. GitHubの `Settings` → `Pages` を開く
3. `Deploy from a branch` を選ぶ
4. 公開ブランチを `main`、フォルダを `/(root)` に設定して保存する

## 実装範囲

- 入口 `screen-home`
- 小型コミュニティ一覧の部屋探し `screen-explore`
- ビートルズ部屋への遷移確認用仮受け皿 `screen-beatles`
- コミュニティ詳細 `screen-community`
- 問い詳細・地層・立ち話 `screen-question`
- プロフィール・部屋名刺 `screen-profile`
- 入口、部屋を探す、コミュニティ詳細、各仮受け皿の画面切り替え

問い詳細、プロフィールの本体および、それ以降の画面は実装していません。
