const { odd, even } = require('./var');
// 구조분해할당 할때는 속성명, 변수명이 같아야하므로 odd, even 그대로 사용
const checkNumber = require('./func'); 
// checkNumber -> 변수명은 마음대로 지을수있으므로 checkOddOrEven과 다른이름으로 지음

function checkStringOddOrEven(str) {
  if(str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));