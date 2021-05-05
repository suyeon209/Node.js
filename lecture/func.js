// reauire함수는 선언을 안했지만 node에서 제공을 해주기 때문에 function require로 사용하지 않고 바로사용
const value = require('./var');
console.log(value);

/*
  ./ 현재 내가 있는 폴더 (=현재 lecture폴더)
  ../ 부모폴더
  ../../ 조부모폴더
*/

/*
 - 구조분해할당으로 축약도 가능 
 const value = require('./var');
 const odd = value.odd;
 const even = value.even;
            ⏬
 const { odd, even } = require('./var');
*/

const { odd, even } = require('./var');

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;

// 위와같이 module.exports로 다시 넘겨줄수도 있다.
// 