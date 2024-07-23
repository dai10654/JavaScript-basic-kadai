// 1から100までのランダムな整数を生成
const num = Math.floor(Math.random() * 100) + 1;
console.log(num);


if (num % 3 === 0 && num % 5 === 0) {
  // ③ 3と5の倍数の場合
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  // ① 3の倍数の場合
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  // ② 5の倍数の場合
  console.log("5の倍数です");
} else {
  // どれにも当てはまらない場合
  console.log(num);
}