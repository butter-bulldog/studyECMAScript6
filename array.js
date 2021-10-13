// ---------------
// 配列の要素数
// ---------------
var arr = ["a", "b", "c"];
console.log(arr.length); // 3

// 要素数を代入すると要素は切れる
arr.length = 2;
console.log(arr); // ["a","b"];

// ---------------
// 値が含まれているか確認
// ---------------
var arr = ["a", "b", "c"];
arr.includes("a"); // true
arr.includes("c"); // false

// 確認するインデックスを指定
arr.includes("b", 1); // true
arr.includes("b", 2); // false

// ---------------
// 式を使って値が含まれているか確認
// ---------------
let numbers = [1, 2, 3, 4];

// 4より大きい値ある？
var result = numbers.some((n) => 4 < n);
console.log(result); // false

// 全要素が0より大きい？
var result = numbers.every((n) => 0 < n);
console.log(result); // true

// ---------------
// 値を検索
// ---------------
let numbers = [1, 2, 3, 4, 1];

// 最初に見つかったインデックスを返す
var index = numbers.indexOf(1);
console.log(index); // 0

// 見つからなかったら-1を返す
var index = numbers.indexOf(5);
console.log(index); // -1

// 最後に見つかったインデックスを返す
var index = numbers.lastIndexOf(1);
console.log(index); // 4

// 式を使って最初に見つかったインデックスを返す
var index = numbers.findIndex((n) => 3 < n);
console.log(index); // 3

// 式を使って最初に見つかった要素を返す
var elem = numbers.find((n) => 3 < n);
console.log(elem); // 4

// 見つからなかったらundefiedを返す
var elem = numbers.find((n) => 4 < n);
console.log(elem); // undefined

// 式を使って見つかった要素すべてを返す
// 見つからなかったらundefinedを返す
var elem = numbers.filter((n) => 1 < n);
console.log(elem); // [2, 3, 4]

// ---------------
// 並び替え
// ---------------

// 逆転
var numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // 3, 2, 1

// 昇順 (辞書順なので数値順ではない)
var numbers = [1, 2, 13, 10];
numbers.sort();
console.log(numbers); // 1, 10, 13, 2

// 昇順 (数値順)
var numbers = [1, 2, 13, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // 1, 10, 13, 2

// ---------------
// 順番に処理
// ---------------

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(n)); // 1 | 2 | 3…

// breakやcontinueを使えないので中断する場合はfor-ofを使うべき
for (const [i, n] of numbers.entries()) {
  console.log(`index:${i} value: ${n}`); // index:0 value:1 | index:1 value:2 …
}

// インデックスだけ使う場合はfor-inでOK
for (const i in numbers) {
  console.log(`index:${i}`); // index:0 | index:1…
}

// ---------------
// 要素を更新する
// ---------------

// すべて0に更新
var numbers = [1, 2, 3];
numbers.fill("hoge");
console.log(numbers); // ["hoge", "hoge", "hoge"]

// インデックス1を以降を"hoge"に更新
var numbers = [1, 2, 3];
numbers.fill("hoge", 1);
console.log(numbers); // [0, "hoge", "hoge"]

// インデックス0から2までを0に更新 (実施は2は含まれず0と1が更新される)
var numbers = [1, 2, 3];
numbers.fill("hoge", 0, 2);
console.log(numbers); // ["hoge", "hoge", 3]

// インデックス0から1個消す
var numbers = [1, 2, 3];
numbers.splice(0, 1);
console.log(numbers); // [2, 3]

// インデックス0をhogeに置き換える
var numbers = [1, 2, 3];
numbers.splice(0, 0, "hoge");
console.log(numbers); // [2, 3]

// ---------------
// 配列から異なる配列を生成する
// ---------------

// 関数を適用した結果を返す
var numbers = [1, 2, 3];
var result = numbers.map((n) => n * n);
console.log(result); // 1, 4, 9

// 第二引数はインデックス、第三インデックスは配列そのもの
var numbers = [1, 2, 3];
var result = numbers.map((n, i, arr) => `${i}:${n}:${arr}`);
console.log(result); // ["0:1:1,2,3", "1:2:1,2,3", "2:3:1,2,3"]

// インデックス1から最後まで取る
var numbers = [1, 2, 3];
var result = numbers.slice(1);
console.log(result); // 2, 3

// インデックス0から2まで取る (実際は2番目は含まれず0番目と1番目となる)
var numbers = [1, 2, 3];
var result = numbers.slice(0, 2);
console.log(result); // 1, 2

// ---------------
// 関数を適用した結果を返す
// ---------------

var numbers = [1, 2, 3];
var result = numbers.map((n) => n * n);
console.log(result); // 1, 4, 9

// 第二引数はインデックス、第三インデックスは配列そのもの
var numbers = [1, 2, 3];
var result = numbers.map((n, i, arr) => `${i}:${n}:${arr}`);
console.log(result); // ["0:1:1,2,3", "1:2:1,2,3", "2:3:1,2,3"]

// インデックス1から最後まで取る
var numbers = [1, 2, 3];
var result = numbers.slice(1);
console.log(result); // 2, 3

// インデックス0から2まで取る (実際は2番目は含まれず0番目と1番目となる)
var numbers = [1, 2, 3];
var result = numbers.slice(0, 2);
console.log(result); // 1, 2

// 隣り合う2つの配列要素に対して左から右へ同時に関数を適用
var numbers = [1, 2, 3];
// 1回目のsumにはインデックス0の1が入ってくる。nには2が入ってくる
var result = numbers.reduce((sum, n) => (sum += n));
console.log(result); // 1, 2

// ---------------
// 配列を結合する
// ---------------
var numbers = [1, 2, 3];
var result = numbers.concat(4, 5, 6);
console.log(result); // 1, 2, 3, 4, 5, 6

// 配列を指定しても展開されて要素が追加される
var result = numbers.concat([4, 5, 6]);
console.log(result); // 1, 2, 3, 4, 5, 6

// 配列と配列でない値を指定してもよい
var result = numbers.concat([4, 5], 6);
console.log(result); // 1, 2, 3, 4, 5, 6

// joinを使うと結合した文字列が返る
var numbers = [1, 2, 3];
var result = numbers.join();
console.log(result); // "1,2,3"

// セパレータを変更できる
var result = numbers.join("-");
console.log(result); // "1-2-3"

// ---------------
// 配列をスタックとして使う
// ---------------
var stack = [1, 2, 3];
stack.push(4);
console.log(stack); // 1, 2, 3, 4

let item = stack.pop();
console.log(item); // 4

// ---------------
// 配列をキューとして使う
// ---------------
var queue = [1, 2, 3];
queue.push(4);
console.log(queue); // 1, 2, 3, 4

// shiftを使うと先頭から要素を取り出し、配列から削除
let item = queue.shift();
console.log(item); // 1

console.log(queue); // 2, 3, 4
