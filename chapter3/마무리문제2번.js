//사용자로부터 숫자 2개를 입력받아 첫번쨰 입력받은 숫자가 큰지 두번쨰 입력받은 숫자가 큰지를 구하는 프로그램
// 139 pg 2번문제

const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));

if (a > b) {
  alert("첫번쨰로 입력한 숫자가 더 큽니다");
} else if (a === b) {
  alert("두 숫자가 같습니다");
} else {
  alert("두번째로 ㅇ비력한 숫자가 더 큽니다");
}
