// 변수 선언
const a = 1;
const b = 2;
console.log(a, b)

const [x,y] = [10,20]
console.log(x,y)

let m = 100;
let n = 200;
[m,n] = [n,m]
console.log(m,n)

console.log('-----------------------------------------------')
const sumEvenBetween= (x,y)=>{
  // x,y를 비교해서 x가 크면 두 수를 바꿈
  if(x > y)[x,y] = [y,x]
  let sum = 0;
  for (let i = x; i <= y ; i++) {
    if((i%2)===0)
   sum = sum + 1;
    
  }
  return sum;
}

console.log(sumEvenBetween(3,9))
console.log(sumEvenBetween(9,3))