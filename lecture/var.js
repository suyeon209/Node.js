// 모듈 만들기(아래 생성된 변수가 다른 파일에서 사용이 가능함)
const odd = '홀수입니다';
const even = '짝수입니다';

// 다른 파일에서 사용할 변수들을 아래 module.exports에 대입(할당)해서 넘겨주면됨
// 배열로도 넘길수있으나 보통 module.exports에서는 객체로 넘겨줌
module.exports = {
  odd,
  even,
};
// exports.odd = odd;
// export.even = even; 과 동일함  <- 해당형식 사용시 module.exports는 사용하면 안됨(무시됨, 같이 사용불가)
// 객체형식과의 차이점은? 기본적으로 module.exports === exports === {}


/*
  module.exports는 객체로 값을 넘기는데 최신 문법에서 키:값이 같은경우 생략이 가능하게됨
  module.exports = {
    odd: odd,
    even: even,
  }
*/

