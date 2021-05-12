console.log(this); 
// 전역 스코프의 this는 전역객체 window가 아닌 빈 객체{}가 됨 
// why? module.exports === exports === {} 이므로
console.log(this === module.exports);

function a() { 
  console.log(this === global);
}
a();