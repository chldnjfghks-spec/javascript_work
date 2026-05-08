//배열에서 제공되는 기본함수의 기능을 살펴봅니다.
//배열의 추가, 삭제, 수정
//배열의 정렬, 변환 , 필터 기능
let iveMembers = ['안유진', '가을', '레이', '리즈', '이서'];

//1. 맨 뒤에 추가하기
console.log(`원본 : ${iveMembers}`)
iveMembers.push('장원영')
console.log(`추가 후 : ${iveMembers}`)
// 2. 맨 앞에 추가하기
console.log(`원본 : ${iveMembers}`)
iveMembers.unshift('홍길동')
console.log(`추가 후 : ${iveMembers}`)
// 맨 뒤에 삭제
iveMembers.pop()
console.log(`맨 뒤 삭제 후 : ${iveMembers}`)
// 맨 앞에 삭제
iveMembers.shift()
console.log(`맨 앞 삭제 후 : ${iveMembers}`)

// 임의의 위치 삭제 :  색인(0 부터 시작)
iveMembers.splice(2, 1)
console.log(`2번 인덱스 삭제 : ${iveMembers}`)
// 임의의 위치에 삽입
iveMembers.splice(3, 0, '장원영')
console.log(`3번 인덱스에 추가 : ${iveMembers}`)
// 정렬
iveMembers.sort()
console.log(`정렬 : ${iveMembers}`)
// 역순 정렬
iveMembers.reverse()
console.log(`내림차순정렬 : ${iveMembers}`)

// 원본을 변경하지 않는 함수
let fruits = ['사과', '딸기', '배', '포도', '바나나'];
// 1. concat
console.log(fruits.concat('망고'))
console.log(fruits)
console.log('-----------------------------------')

// 2. 배열의 일부 잘라내기(slice)
console.log(fruits.slice(0, 3))
console.log(fruits)
console.log('-----------------------------------')

// 3. join
console.log(fruits.join('/'))
console.log(fruits)
console.log('-----------------------------------')

// 중요 : Spread Operator [...] : 배열 복사
let iveMembers2 = [...iveMembers]
console.log(iveMembers == iveMembers2)
// 배열의 주소를 복사해서 사용하는 것.
let iveMembers3 = iveMembers;
console.log(iveMembers == iveMembers3)
console.log("수정 전 : " + iveMembers)
// iveMember3의 맨 앞에 'Hong'
iveMembers3.unshift('Hong')
console.log("수정 후 : " + iveMembers )
