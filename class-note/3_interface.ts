interface User {
  age: number;
  name: string;
}

//변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: "세호"
}

//함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user)
}

const capt = {
  age: 30,
  name: "캡틴"
}

getUser(capt);

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number
}

var sum: SumFunction;

sum = (a: number, b: number): number => {
  return a + b
}

//인덱싱
interface StringArray {
  [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c']
arr[0]

//딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

Object.keys(obj).forEach((value) => {

})

//인터페이스 확장
interface person {
  name: string,
  age: number
}

interface Developer extends person {
  laguage: string
}

var captain: Developer = {
  name: "수현",
  age: 30,
  laguage: "typescript"
}