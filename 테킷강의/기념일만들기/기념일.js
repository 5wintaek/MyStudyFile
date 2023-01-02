/* let person = {
  name: "jocoding",
  sayHello: function () {
    console.log("hello");
  },
};
console.log(person.name);
person.sayHello(); */

// ! 이 날짜가 언제인지 ? 알려준느 값
/* var now = new Date();
const ch = new Date("2022-12-25");
console.log(ch); */

//! 현재시점부터 지금시점까지 날짜가 얼마나 흘렀는지
// 현재 시점
/* var now = new Date();
let start = new Date("2022-11-28");
console.log("start", start); */

// 사귄날 수
// Math.floor 소수점을 버림
/* const timeDiff = now.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
console.log(day); */

// 현재 시점으로부터 특정일 까지 몇일 남았는지
var now = new Date();
var start = new Date("2020-06-30");

// 우리 몇일쨰 ?
var timeDiff = now.getTime() - start.getTime();
// (1000 * 60 * 60 * 24) + 1) -> 현재 일수로 바꿔주는 역할
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

// 기념일까지 남은 날짜는 ? (발렌타인)
var valentine = new Date("2021-02-14");
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");

//천일은 언제인가?
var thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
var thousandDate = thousand.getFullYear() + "." + (thousand.getMonth() + 1) + "." + thousand.getDate();
$("#thousand-date").text(thousandDate);

//기념일까지 남은 날짜는?
var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day3 + "일 남음");
