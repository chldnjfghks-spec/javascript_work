// Promise : 이 작업이 마무리 되면 결과를 꼭 돌려줄게
// resolve : 함수 성공하면 then 으로 결과를 넘겨주는 애
// reject : 함수 실패하면 catch로 결과를 넘겨주는 애
const myPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    const text = prompt('따봉을 입력해줘!1 선물줄게!')
    if(text === '따봉'){
      // resolve()를 호출해서 then()으로 결과 보냄
      resolve('👍')
    }else{
      // reject()를 호출해서 catch()으로 결과 보냄
      reject('따봉이 아니잖아')
    }
  }, 2000);
  })

myPromise
.then((result)=>{
  console.log(`Promise 결과 : ${result}`)
})
.catch((error)=>{
  console.log(`Promise 결과 : ${error}`)
})
.finally(()=>{
  console.log("끝")
})