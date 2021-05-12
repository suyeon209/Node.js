//  require('./dep2');
//  module.exports = {
//  hello: 'zerocho';  
//  }

// dep1.js에서 ./dep2를 참조하고 dep2.js에서 ./dep1을 참조하면서(반복...)
// 순환참조가 발견되면 node에서 dep1.js의 module.export가 함수가 아니라 빈객체로 변경해 알아서 차단을 해줌... 
// 왠만하면 순환참조가 없는게 낫다 

const dep2 = require('./dep2');
console.log('require dep2', dep2);
module.exports = () => {
  console.log('dep2', dep2);
};


