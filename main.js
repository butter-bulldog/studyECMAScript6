// figure.jsでexportで定義した関数をimportする
import {triangle, circle} from './figure';
console.log(triangle(10, 5));
console.log(circle(2));

// 全関数をimportし、特定の名前からアクセスできるようにする方法
import * as mymath from './figure';
console.log(mymath.triangle(10, 5));
console.log(mymath.circle(2));
