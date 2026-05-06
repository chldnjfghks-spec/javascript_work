// 1. 조건문
let number = 5;
// number가 짝수이면 짝수 출력, 홀수이면 홀수 출력
if ((number % 2) === 0){
  console.log("짝수")
} else {
  console.log("홀수")
}

// 2. 중복 if
// number가 2, 3, 4, 5의 배수인지? ex) 3의 배수
// 모두 아니면 : 2, 3, 4, 5의 배수가 아님.
if ((number % 2) === 0){
  console.log("2의 배수")
} else if((number % 3) === 0){
  console.log("3의 배수")
}  else if((number % 4) === 0){
  console.log("4의 배수")
} else if((number % 5) === 0){
  console.log("5의 배수")
} else {
  console.log("2, 3, 4, 5의 배수가 아님")
}

const fruits = 'Apple'
switch (fruits) {
  case 'Apple':
    console.log("사과")
    break;
  case 'Mango':
    console.log("망고")
    break;
  default:
    console.log("과일")
    break;
}

// for 루프
let sum = 0;
for(let i=1; i <= 10; i++){
  sum = sum + i;
}
console.log(sum)
// for - in : 객체의 키로 순회(Object)
const 안유진 = {
  name : 'Ahn YouJin',
  year : 2003,
  group : 'ive',
};

for (let key in 안유진){
  console.log(key)
  console.log(안유진[key])
}

for (let[key, value] of Object.entries(안유진)){
  console.log(key)
  console.log(value)
}

// for - of : 값으로 순회(배열)
const colors = ["빨강", "검정","노랑"];
for(let color of colors){
  console.log(color)
}

// while
let s = 0;
let i = 1;
while(i <= 10){
  s = s + i;
  i = i + 1;
}
console.log(s)