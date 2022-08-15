# sample-webpack-ignore-import

importしているモジュールをバンドルから除外する検証

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [目的](#目的)
2. [環境](#環境)
3. [使い方](#使い方)

<!-- /code_chunk_output -->

## 目的

importしているモジュールをバンドル対象外にする検証


## 環境

- node(v17.8.0)


## 使い方

リポジトリをクローンして、`run.sh`を使って node modules をインストールしてください

```bash
git clone [リポジトリURL]
cd sample-webpack-ignore-import

./run.sh npm-ci
```

webpack でバンドルしてから実行してください

```bash
# sample-webpack-ignore-importフォルダで実行する
./run.sh build
./run.sh exec
```
