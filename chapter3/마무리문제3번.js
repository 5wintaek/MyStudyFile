const a = Number(prompt("숫자를 입력하세요"));

if (a < 0) {
  alert("음수입니다");
} else {
  if (a > 0) {
    alert("양수입니다");
  } else if (a === 0) {
    alert("0입니다");
  }
}
