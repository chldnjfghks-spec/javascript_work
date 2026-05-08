// 정렬
let numbers = [1,9,7,5,3];
// 배열의 정렬 함수 : sort(), reverse()
console.log(`정렬 전 : ${numbers}`)
// numbers.sort()
// console.log(`정렬 후 : ${numbers}`)
// 일반적인 숫자배열의 정렬 방법
// 결과 음수 : a를 앞에
// 결과 양수 : b를 앞에
// 결과 0 : 순서 유지
// numbers.sort((a,b) => a>b? 1: -1);
// 오름 차순
numbers.sort((a,b) => a-b)
console.log(`정렬 후  : ${numbers}`)
// 내림 차순
numbers.sort((a,b) => b-a)
console.log(`정렬 후  : ${numbers}`)

// 한글과 영문 비교
const fruits = ['banana', 'apple', 'orange']
const names = ['홍길동', '김철수', '박영희']
// 언어별 지역에 해당하는 정렬방식
fruits.sort((a,b) => a.localeCompare(b))
console.log(`오름차순 : ${fruits}`)
//내림차순
fruits.sort((a,b) => b.localeCompare(a))
console.log(`내림차순 : ${fruits}`)

// Object 내부의 값을 기준으로 비교 후 정렬
numbers.sort((a,b) => {
  if(a>b) return 1; // 양수면 b를 앞
  if(a<b) return -1; // 음수면 a를 앞
  return 0; // 변화 없음
})

// map() 함수 : 자바의 스트림과 유사
// 모든 요소를 변환
console.log(names.map(x => `이름 : ${x}`));

// 김철수 만... "이름 : "을 앞에 붙여서 출력
console.log(names.map((x,idx) => {
  if(x === '김철수'){
    return `${idx} : ${x}`
  }
  return x;
}))

// 필터링 : filter()
numbers = [1,8,7,5,3];
// 배열을 복사 data
let data = [...numbers, 10];
console.log('==================================================')
// 1. 작수만 출력
console.log(data)
console.log(data.filter(x => x % 2 === 0))
// 2. 3 보다 큰 수를 오름차순 정렬 출력
console.log(data.filter(x => x > 3).sort((a,b)=>a-b))


// find()와 findIndex() 함수
numbers = [1,8,7,5,3];
// 첫번재로 조건과 일치하는 값을 찾음, 없으면 undefind
console.log(numbers.find(x => x % 2 === 0))
// 첫번재로 조건과 일치하는 색인 값을 찾음, 없으면 -1
console.log(numbers.findIndex(x => x % 2 === 0))

//reduce() 함수 -- 누적을 할 때 사용
console.log(numbers.reduce((x, y) => x*y, 1))