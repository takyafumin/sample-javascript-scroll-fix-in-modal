# sample-javascript-scroll-fix-in-modal

モーダル表示時に元画面をFIXさせておくサンプル

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [目的](#目的)
2. [環境](#環境)
3. [使い方](#使い方)

<!-- /code_chunk_output -->

## 目的

モーダル表示時に元画面をFIXさせておくサンプル


## 環境

- node(v17.8.0)


## 使い方

リポジトリをクローンして、`run.sh`を使って node modules をインストールしてください

```bash
git clone [リポジトリURL]
cd sample-javascript-scroll-fix-in-modal

./run.sh npm-ci
```

webpack でバンドルしてください

```bash
# sample-javascript-scroll-fix-in-modalフォルダで実行する
./run.sh dev
```

`app/dist`フォルダをブラウザからアクセスできるように設定し、index.htmlへアクセスしてください。
またはVSCodeのLiveServerを使うとsample-javascript-scroll-fix-in-modalフォルダがブラウザからアクセスできるようになるので、app/dist/index.htmlへアクセスしてください。
