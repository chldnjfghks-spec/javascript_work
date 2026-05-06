//함수 (function으로 정의)
// function 함수 이름 (매개변수){
// return; 돌려줄 값이 있을 경우
//}

//number를 받아서 10을 곱하고 2로 나눈 나머지를 출력
//함수를 정의
function calculate(number){
  console.log((number*5)%2)
}
//함수를 호출해서 실행 함.
calculate(3)

// 두 수 x,y를  받아서 두 수를 곱하는 함수를 만들고 호출
//함수의 이름을 multiply, x = 2, y = 4;
function multiply(x,y){
  console.log(x * y);

}
multiply(2,4)

// default 파라미터
//두 수를 받아서 빼는 함수 :  minus(x, y)
//y 값이 주어지지 않을 경우 : y = 1;
function minus(x,y=1){
  console.log(x - y)
}
minus(5)
minus(5,2)

//리턴값이 있는 경우
function divide(x,y)
{
  return x / y;
}
let result = divide(7,3)
console.log(result)