/* // inch 단위를 cm 단위로 변경

// 숫자를 입력받음
const rawInput = prompt("inch 단위를 입력해주세요");

// 입력받은 데이터를 숫자형으로 변경하고 cm 단위로 변경
const inch = Number(rawInput);
const cm = inch * 2.54;

// 출력
alert(`${inch}inch는 ${cm}cm 입니다 `);
 */

const input = prompt("inch를 입력하세요");
const inch = Number(input);
const cm = inch * 2.54;

alert(`${inch}inch는 ${cm}cm입니다`);
