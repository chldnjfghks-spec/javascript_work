// 콜백(Callback) 함수 :  나중에 필요할 때 실행될 함수

function greet(name, callback){
  console.log('안녕하세요 ' +  name + '님')
  callback()
}

function afterDreeting(){
  console.log('오늘도 맛점 하세요.')
  
}
function beforeDreeting(){
  console.log('오늘도 아침 맛점 하세요.')
  
}

greet('홍길동', beforeDreeting)

console.log('-------------------------------------------------------------------')
// setTimeout 함수는 특정 시간 이후에 실행할 함수를 정의
let t_1 = setTimeout(function(){
  console.log('3초가 지났어요')
}, 3000)


console.log('-------------------------------------------------------------------')
// 함수의 참조를 전달
function sayHello(){
  console.log('안녕하세요')
}
let t_2 = setTimeout(sayHello, 2000)

// 타이머를 취소하기
clearTimeout(t_1 )
