
/*

스크립트에서 문자열의 대소비교가 가능하다. ( 코드비교를 통해 )
하마<가방 =false // 하 가 가 보다 코드가 뒤에 있기 때문에 더 큰수 

*/ 

console.log("A"<"B") //ture

console.log("가">"나") //false => 가가 나 보다 코드가 앞서 있기 때문에 코드상으로 나 가 더 큰 수 


let x = 10;
console.log(0<=x<=20) // 실행시에 에러가 나지 않는다. 

let x1 = -5;
console.log(0<=x1<=20) // 실행시에 에러가 나지 않는다. 
/*

0<=x1 - false

false(0)

x1(false(0))<=20   =

0<=x1<=20  ==>true

 */

