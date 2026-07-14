# Kit Gaw v0.7.1｜入口画面・静的HTML版

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
- 部屋を探す `screen-explore`
- コミュニティ詳細への遷移確認用仮受け皿 `screen-community`
- 入口、部屋を探す、仮受け皿の画面切り替え

コミュニティ詳細の本体および、それ以降の画面は実装していません。
