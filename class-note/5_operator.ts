//유니온 타입
const logMessage = (value: string | number) => {
  if (typeof value === 'number') {
    value.toLocaleString()
  }
  if (typeof value === 'string') {
    value.toString()
  }
  throw new TypeError('value must be string or number')
}

interface Developer {
  name: string,
  skill: string
}

interface Person {
  name: string,
  age: number,
}

// const askSomeone = (someone: Developer | Person) => {
//   //공통된 속성에만 접근 가능
//   someone.name
//   //추후 타입 가드를 통한 접근도 가능 
// }

//인터섹션
const askSomeone = (someone: Developer & Person) => {
  //가지고 있는 모든 속성에 접근 가능
  someone.name
  someone.skill
  someone.age
}

