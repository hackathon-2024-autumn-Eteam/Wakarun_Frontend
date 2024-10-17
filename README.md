# Wakarun Front
## ローカル開発環境構築手順
1. dockerでNode.js環境を起動
```
docker-compose up -d
```
## ブランチ運用ルール
原則gitflowに従う（main, develop, feature)
-  main 本番環境で動いているソースコードを管理する。
やバグ修正などの開発作業を行
-  develop　開発中のソースコードを管理する。
 - feature 機能実装を行う。(命名規則：feature/{機能名})
 - hotfix バグ修正などの軽微な修正を行う。

開発が終わったらMatterMostのEteamチャンネルでコードレビューを`@channel`をつけて依頼する。
（レビュワーは依頼者以外の誰がレビューしても良い）