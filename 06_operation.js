// == : 값만 비교
// === : 값과 타입 두 개 비교
console.log(5 == '5')
console.log(5 === '5')
console.log(5 !=='5')
console.log(3 >= 5)

// 삼항 연산
console.log(10 > 0? '크다': '작다')

// 단축 평가(***)
console.log(true || '아이브')
console.log(false || '아이브')
console.log(true && '아이브')
console.log(false && '아이브')

let x = (3>4);
console.log(x)
console.log(x || '작다')
console.log(true && true && '뉴진스')
console.log(true && false && '뉴진즈')

//값이 없으면 기본값 사용
let input = '홍길동'
const userName = input || '익명';
console.log(userName)