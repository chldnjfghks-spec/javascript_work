const megaCoffee = {
  name: '메가커피',
  menus :[
    {name : '아메리카노', price : 2000, category : '커피', options : ["Hot," ,"Ice"]},
    {name : '카페라떼', price : 3000, category : '커피', options : ["Hot,\"  Ice"]},
    {name : '딸기스무디', price : 4500, category : '음료', options : ["Ice"]},
    {name : '망고주스', price : 4000, category : '음료', options : ["Ice"]},
  ] ,

  orders : [
    {menuName : '아메리카노', option : 'ICE', quantity : 2},
    {menuName : '딸기스무디', option : 'ICE', quantity : 1},
    {menuName : '카페라때', option : 'HOT', quantity : 3},
  ]
}

// ✅ 1. 기본 접근
// 매장 이름을 출력하시오.
console.log("매장 이름 :" + megaCoffee.name)
// 첫 번째 메뉴 이름을 출력하시오.
console.log("첫 번째 메뉴 이름 :"+megaCoffee.menus[0].name)
// 두 번째 메뉴 가격을 출력하시오.
console.log("두 번째 메뉴 가격 :" +megaCoffee.menus[1].price)
// 세 번째 메뉴의 옵션을 출력하시오.
console.log("세 번째 메뉴 옵션 :" +megaCoffee.menus[2].options)
// ✅ 2. 주문 데이터 접근
// 첫 번째 주문의 수량을 출력하시오.
console.log(megaCoffee.orders[0].quantity)
// 두 번째 주문의 메뉴 이름을 출력하시오.
console.log(megaCoffee.orders[1].menuName)
// 세 번째 주문의 옵션을 출력하시오.
console.log(megaCoffee.orders[2].option)










