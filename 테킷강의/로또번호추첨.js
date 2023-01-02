let lotto = [];
while (lotto.length < 6) {
  let num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
lotto.sort((a, b) => a - b);
console.log(lotto);
