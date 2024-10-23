# Wakarun Front
## ローカル開発環境構築手順
1. dockerでNode.js環境を起動
```
docker-compose up -d
```
2. 下記のコマンドでコンテナに入る
```
docker-compose exec app bash
```
3. プロジェクトのディレクトリに移動
```
cd wakarun
```
4. 依存モジュールのインストール
```
npm install
```
5. 開発用サーバーを起動
```
npm run dev
```
6. ブラウザで`localhost:3000`へアクセスして、アプリケーションの画面を確認

## ブランチ運用ルール
原則gitflowに従う（main, develop, feature)
- main 本番環境で動いているソースコードを管理する。
- develop　開発中のソースコードを管理する。
- feature 機能実装を行う。(命名規則：feature/{機能名})
- hotfix バグ修正などの軽微な修正を行う。

開発が終わったらMatterMostのEteamチャンネルでコードレビューを`@channel`をつけて依頼する。
（レビュワーは依頼者以外の誰がレビューしても良い）
