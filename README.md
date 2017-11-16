# studyECMAScript6

トランスコンパイラー(babel)の準備

```
npm install -g babel-cli
npm install --save-dev babel-preset-es2015
```

これでes6で書かれたbasic.es6.jsをbasic.jsとして出力できる

```
babel basic.es6.js -o basic.js --presets es2015

# wオプションをつければ変更を監視できる
babel -w basic.es6.js -o basic.js --presets es2015
```

トランスコンパイラを行いnodeで実行するには以下コマンド

```
babel-node basic.es6.js --presets es2015
```

polyfillを有効にする。  
babelが変換対象とするのはimport,exportなどの新文法が中心  
Promiseなどの新しい組み込みオブジェクトを使うにはpolyfillが必要

```
npm install --save babel-polyfill
```

import, exportのサンプル
```
babel-node main.js --presets es2015
```
