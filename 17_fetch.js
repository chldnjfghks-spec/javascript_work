// 외부 API를 호출하는 자바스크립트 기본 함수
// 1; fetch : Promise

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then((response) => {
 
  // json()
  // return response.text();
   // JSON 타입으로 받은 데이터를 자바스크립트의 Object로 변환
return response.json();
})
.then((date)=>{
  console.log(date)
})
.catch((err)=>{
  console.log('Error!!')
})
.finally(()=>{
  console.log('데이터를 다 가져왔어요')
})
console.log('데이터를 다 받고 실행하고 싶어요.')