// figure.jsでexportで定義した関数をimportする
import {triangle, circle} from './figure';
console.log(triangle(10, 5));
console.log(circle(2));

// 全関数をimportし、特定の名前からアクセスできるようにする方法
import * as mymath from './figure';
console.log(mymath.triangle(10, 5));
console.log(mymath.circle(2));

// 特定の関数に別名をつける方法
import {triangle as mytriangle, circle as mycircle} from './figure';
console.log(mytriangle(10, 5));
console.log(mycircle(2));

