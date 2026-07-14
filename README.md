# Kit Gaw v0.7.1｜入口画面

入口画面と、遷移確認用の仮受け皿だけを実装した1ページSPAです。
画面2以降の本体は含まれていません。

## 実装範囲

- `screen-home`
  - Kit Gaw
  - 指定説明文
  - 「人を探すな。場を探せ。」
  - 「部屋を歩いてみる」ボタン
- `screen-explore`
  - 「部屋を探す」
  - 「入口へ戻る」ボタン

## 主な変更ファイル

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## ローカル確認

Node.js 22以上で次を実行します。

```bash
npm ci
npm run dev
```

## GitHub Pagesでの公開

このプロジェクトはNext.jsのソースなので、`app/page.tsx`をGitHub
Pagesへそのまま置いても表示できません。GitHub Pagesが配信できるのは、
ビルド後の静的HTML・CSS・JavaScriptです。

同梱の`.github/workflows/deploy-pages.yml`が、`main`ブランチへの反映時に
Next.jsを静的サイトへ変換し、`out/`をGitHub Pagesへ公開します。

リポジトリのGitHub Pages設定で、Sourceを「GitHub Actions」にしてください。
その後、プロジェクト一式を`main`ブランチへ反映すると公開処理が始まります。

## 含めていないもの

- Work専用の`.openai/hosting.json`
- ローカル依存物`node_modules/`
- ビルド生成物`.next/`と`out/`
- 認証・データベース・画面2以降
