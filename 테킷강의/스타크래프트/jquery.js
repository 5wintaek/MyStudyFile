// ! 함수
/* function hello() {
  console.log("아 배고파");
}
$("#click").click(hello); */

// ! 익명함수
/* $("#click").click(function () {
  console.log("hello");
}); */

//! fadein
/* $("#drone").click(function () {
  // $() .
  $("#spit").fadeIn();
}); */

// ! animate
/* $("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=250" });
});
 */

// ! fadeout()
let hp = 3;
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=250" });
  $("#spit").fadeOut(function () {
    hp = hp - 1;
    $("#hp").text("HP :" + hp);
    if (hp == 0) {
      $("#bunker").fadeOut();
    }
  });
  $("#spit").css({ left: "150px" });
});
