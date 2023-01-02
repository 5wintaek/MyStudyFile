/* let content = document.getElementById("jasoseol").value;
console.log(content);

let content = document.getElementById("");
 */

/* let content = document.getElementById("jasoseol").value;

document.getElementById("count").innerHTML = "(" + content.length + "/200)"; */

// ? 함수
//? 키보드이벤트
// onkeydown = "counter()";
/* function counter() {
  let content = document.getElementById("jasoseol").value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML = "(" + content.length + "/200)";
}
counter(); */

// ! 내가 연습 다시 연습
// count 라는 class 를 가진것에 접근
function counter() {
  let content = document.getElementById("jasoseol").value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML = "(" + content.length + "/200)";
}

counter();
