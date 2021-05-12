require('./var');
console.log(require);
// 다른 파일에 실행만하고 거기에 있는 변수들을 가져오고 싶지않다. 
// 하면 위와같이 변수에 대입하지 않고 require만 사용 

/* 

  require 특성
  1. require가 제일 위에 올 필요는 없음
  2. require.cache에 한 번 require한 모듈에 대한 캐슁 정보가 들어있음
  3. require.name은 노드 실행 시 첫 모듈을 가리킴 
  
*/