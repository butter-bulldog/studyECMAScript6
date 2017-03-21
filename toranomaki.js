// ブロックスコープが有効な変数
// これを使えばグローバル汚染が防げるので即時関数は利用しない
if (true) {
    let i = 1;
    console.log(i);
}
//console.log(i); // エラー


// 定数を宣言する
// 定数は再代入できない。ただし変更はできる
const data = 100;
//data = 150; // エラー

const data2 = [1, 2, 3];
data2[0] = 10;
console.log(data2); // [10, 2, 3]



// 2進数/8進数リテラル
// 2進数リテラルは0b, 8進数リテラルは0o(ゼロオー)で始まる
console.log(0o10 === 8); // true
console.log(0b11 === 3); // true


// テンプレート文字列
let name = 'Yamada';
console.log(`Hello, ${name}!!`);
// Hello, Yamada!!


// Symbol型
// ユニークで隠蔽された値が作れる
// 使い方としてはなんでもよい定数
var JAVASCRIPT = Symbol();
var RUBY = Symbol();


// 分割代入
// 使い方としては複数を返す関数
let [hoge, foo] = [15, 21];
console.log(hoge); // 15


let {hoge2, foo2} = {hoge2: 'ほげ', foo2: 'ふー'};
console.log(hoge2); // ほげ



// 名前つき引数を指定
function trapezoid({upper = 1, lower = 1, height = 1}) {
    return (upper + lower) * height / 2
}

console.log(trapezoid({
    upper: 5,
    lower: 10,
    height: 2
}))

