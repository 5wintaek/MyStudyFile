// if else if 조건문으로 시간 파악하기
// 137 pg

const date = new Date();

const hour = date.getHours();

if (hour < 11) {
  alert("아침먹을시간");
} else if (hour < 15) {
  alert("점심먹을시간");
} else {
  alert("저녁먹을시간");
}
