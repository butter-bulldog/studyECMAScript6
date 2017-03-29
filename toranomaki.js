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


// 正規表現でマッチした部分文字列を抽出
let tel = '000-111-2222';
let tel_pattern = /^(0\d{2,3})\-(\d{1,4})\-(\d{2,5})$/;
let [, area, local, privated] = tel_pattern.exec(tel);
console.log(area);  // 000
console.log(local); // 111
console.log(privated); // 2222


// 展開演算子
console.log(Math.max(100, -10, 50, 108)); // 引数で渡した最大を返す 108
console.log(Math.max([100, -10, 50, 108])); // 配列で渡してるのでnullかNanとなる
console.log(Math.max(...[100, -10, 50, 108])); // 配列が展開される 108


// for of命令
let datas = [1, 2, 4];
for (let d of datas) {
    console.log(d) // 1, 2, 4
}

// 従来のlet in命令はプロパティ名(インデックス)を列挙する
for (let d in datas) {
    console.log(d) // 0, 1, 2
    console.log(datas[d]) // 1, 2, 4
}


/**
 * 関数
 */

// 引数にデフォルト値を設定できる
function show(name = '権兵衛') {
    console.log('私の名前は' + name);
}
show(); // 私の名前は権兵衛
show('リオ') // 私の名前はリオ


// デフォルト値に他の引数を指定できる
function add (a, b = a) {
    return a + b;
}
console.log(add(1, 4)); // 5
console.log(add(1)) // 2

// デフォルト値に関数の結果を指定
function dateFormat(date = new Date()) {
    return date.toLocaleString();
}
console.log(dateFormat()); // 現在日時(yyyy-mm-dd hh:ii:ss)


// 必須引数の表現
function required() {
    throw new Error('Arguments is missing');
}
// 引数が入ってないとデフォルト値にrequired()が入るので例外がスローされる
function test(value = required()) {
    return value;
}
//test();


// 可変長引数
function sum(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }

    return result;
}
console.log(sum(10, 20, 30)); // 60


/**
 * アロー関数
 */
let data3 = [1, 2, 3];

// 従来の関数リテラル表記
let formatted = data3.map(function(value, index) {
    return value * value;
});
console.log(formatted); // 1, 4, 9

// アロー関数表記
let formatted2 = data3.map((value, index) => value * value);
console.log(formatted2); // 1, 4, 9

// 引数がない場合
var func = () => console.log('hoge');

// 複数文の場合は{}で囲む
let formatted3 = data3.map((value, index) => {
    return value * value;
});
console.log(formatted3) // 1, 4, 9


// アロー関数はthisが固定される
// 従来の方法
var Counter = function() {
    // thisを退避(ここのthisはインスタンスを指すが、setIntervalではwindowオブジェクトを指す為)
    var self = this;
    self.count = 0;

    setInterval(function() {
        self.count++;
    }, 1000);
};
//var c = new Counter();

// es2015の方法
let Counter2 = function() {
    this.count = 0;
    setInterval(() => this.count++, 1000);
};
//let c = new Counter2();



/**
 * 組み込みオブジェクト
 */

// Promiseオブジェクト(非同期処理)

function hage(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`値は${value}`);
            } else {
                reject('入力値が空です');
            }
        }, 2000);
    })
}

hage('佐藤').then(
    response => {
        console.log(response);
    },
    error => {
        console.log(error);
    }
);

hage('').then(
    response => {
        console.log(response);
    },
    error => {
        console.log(error);
    }
);


// 非同期処理を連結する
hage('佐藤').then(
    response => {
        console.log('1. ' + response);
        // ここで2回目のhageを行う
        return hage('スズキ');
    }
// 2回目hageの結果はここで処理
).then(
    response => {
        console.log('2. ' + response);
    },
    error => {
        console.log('Error.' + error);
    }
);

// 複数の非同期処理を並行して実行する
Promise.all([
    hage('佐藤'),
    hage('腰掛'),
    hage('鈴木花子')
]).then(
    response => {
        // 全てが成功した場合
        console.log(response); // [ '値は佐藤', '値は腰掛', '値は鈴木花子' ]
    },
    error => {
        // いずれかが失敗した場合はこっちが実行される
        console.log('Error.' + error);
    }
);

// Proxyオブジェクト
let obj = {hoge: 'ほげ', foo: 'ふー'};
var p_obj = new Proxy(obj, {
    get(target, prop) {
        return prop in target ?
            target[prop] : '?';
    }
});

console.log(p_obj.hoge);
console.log(p_obj.nothing);

/**
 * マップ
 */
let objkey = {};
let m = new Map();
m.set('hoge', 'ほげ');
m.set('foo', 'ふぅ');
m.set('piyo', 'ぴよ');
m.set(objkey, 'オブジェクト');
console.log(m.get('hoge')); // ほげ
console.log(m.has('hoge')); // true

// マップのキーを列挙
for (let key of m.keys()) {
    console.log(key);
}

// マップの値を列挙
for (let value of m.values()) {
    console.log(value);
}

// マップのキー/値を列挙
for (let [key, value] of m) {
    console.log(`${key}:${value}`);
}

// マップを順番に処理
m.forEach((value, key) =>
    console.log(`${key}=${value}`));

// hogeキーを削除
m.delete('hoge');

// すべてのキーを削除
m.clear();



/**
 * Setオブジェクト
 * 一意な値の集合を管理するセット
 */ 
// セットの生成&値の登録
let s = new Set();
s.add(5);
s.add(10);
s.add(8);
s.add(0);
s.add(0); // 重複した値が追加されたら無視される

console.log(s.size); // 4
console.log(s.has(5)) // true

s.delete(5);

// セットの値を列挙
for (let value of s) {
    console.log(value); // 10, 8, 0
}

// セットの内容をクリア
s.clear();


/**
 * オブジェクト指向公文
 */

// メソッド定義
let book = {
    title: 'AngularJSアプリケーション',
    price: 3700,
    toString() {
        console.log(`${this.title}:${this.price}円`);
    }
}

book.toString(); // AngularJSアプリケーション:3700円

// プロパティ名の動的生成
let i = 0;
let data4 = {
    ['hoge' + ++i]: 15,
    ['hoge' + ++i]: 20,
    ['hoge' + ++i]: 25
}
console.log(data4);

// クラスを定義する
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show () {
        return `${this.name}は${this.sex}です`;
    }
}
let p = new Person('ナオ', '女');
console.log(p.show());

// 匿名クラスも使える
const Person2 = class {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show () {
        return `${this.name}は${this.sex}です`;
    }
}
let p2 = new Person2('ミキ', '女');
console.log(p2.show());

// getter / setterも利用できる
class Person3 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value
    }

    show() {
        return `${this.name}は${this.sex},${this.age}歳です`;
    }
}
let p3 = new Person('アキ', '女');
p.age = 10;
console.log(p3.show());


// 継承
class Person4 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show () {
        return `${this.name}は${this.sex}です`;
    }
}

class BusinessPerson extends Person4 {
    constructor(name, sex, clazz) {
        super(name, sex);
        this.clazz = clazz;
    }
    show() {
        return `${super.show()}役職は${this.clazz}です`;
    }
}

let bp = new BusinessPerson('チエ', '女', '主任');
console.log(bp.show());


// イテレーター
// 組み込み
let array_data = [1, 2, 3];
let str_data = 'いろは';
let map_data = new Map();
map_data.set('JS', 'JavaScript');
map_data.set('PL', 'Perl');
map_data.set('PY', 'Python');

for (let tmp of array_data) {
    console.log(tmp);
}

for (let [key, value] of map_data)
{
    console.log(`${key}:${value}`);
}

// イテレーターを実装したクラス
class MyClazz {
    // 引数で渡された配列を保持
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
                next() {
                    // 最後のデータならdone:trueを、違ってれば現在のデータとdone:falseを
                    return current < that.data.length ?
                        {value:that.data[current++], done:false} : {done: true};
                }
        }
    }
}

let c = new MyClazz(['ほげ', 'ふー', 'ぴよ']);
for (let d of c) {
    console.log(d);
}



// ジェネレーター
function* myGenerator() {
    yield 'あ';
    yield 'い';
    yield 'う';
}
for (let t of myGenerator()) {
    console.log(t) // あ　い　う
}

// カウントダウンするジェネレーター
function* countdown(begin) {
    while (begin >= 0) {
        yield begin--;
    }
}
for (let t of countdown(10)) {
    console.log(t);
}

// さきほどのサンプルをジェネレータで書き換え
class MyClazz2 {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function*() {
            let current = 0;
            let that = this;
            while (current < that.data.length) {
                yield that.data[current++];
            }
        }
    }
}

let c2 = new MyClazz2(['ほげ', 'ふー', 'ぴよ']);
for (let d of c2) {
    console.log(d);
}




