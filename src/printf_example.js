/**
 * 외부에서 라이브러리를 가져와야 하는데, 
 * 이 때 npm을 사용한다. 
 * 최근에는 모듈형식으로 사용하기 때문에 설정파일에서 타입: 모듈을 추가한다. 
 * 
 * 실행명령어는 Expression.js를 참조할 것 .
 * 참고로 깃허브에 형상관리할 때는 모듈파일은 ginore에 넣는다. 
 * 
 * 라이브러리를 가져왔으면 사용할 때 임포팅한다. 
 * 본 파일 13행을 참조.
 */

/*
자바스크립트에서 수치타입은 다 double로 봐야 한다. 
 */


import { sprintf } from "sprintf-js";
 
 
let epoch = new Date().getTime();

console.log(epoch);

console.log(sprintf("%020d",epoch)); //20자리수 
console.log(sprintf("%x",epoch)); //십육진수
console.log(sprintf("%X",epoch)); //십육진수 대문자


let hour = parseInt(epoch/1000/60/60%60+9)%24;  // 자바에서는 int이지만 자바스크립트에서는 double
let minute= parseInt(epoch/1000/60%60);  // 그래서 연산을 할 때 double형으로 결과값이 나온다. 그러므로 정수형 결과를 원할 때는 메소드를 사용해야 한다.(parseInt, Math.floor)  
let second = parseInt(epoch/60%60);

console.log(hour+":"+minute+":"+second);
console.log(sprintf("%02d : %02d : %02d",hour,minute,second))
