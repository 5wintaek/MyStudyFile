// 조건문을 2번 사용하여 오전에는 오전입니다 오후에는 오후입니다 출력
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  console.log("오전입니다");
} else if (hour >= 12) {
  console.log("오후입니다");
}
