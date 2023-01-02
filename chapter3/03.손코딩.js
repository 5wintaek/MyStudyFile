// 135pg 중첩 조건문으로 시간 파악하기

const date = new Date();
const hour = date.getHours();

if (hour < 11) {
  alert("아침 먹을 시간입니다");
} else {
  if (hour < 15) {
    alert("점심먹을시간입닏");
  } else {
    alert("저녁먹을 시간입니다");
  }
}
