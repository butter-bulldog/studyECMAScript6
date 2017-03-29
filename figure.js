/**
 * モジュール
 */
const PI = 3.1415;

// 外からアクセスできるようにexportキーワードで就職
export function triangle(base, height) {
   return base * height / 2;
};
export function circle(radius) {
   return radius * radius * PI;
}
