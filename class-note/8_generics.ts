function logText(text) {
  console.log(text)
  return text
}

//제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length)
//   text.forEach(function (text) {
//     console.log(text)
//   })
//   return text
// }

// logTextLength<string>(["hi"])

//제네릭 타입 제한하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text
}

//제네릭 타입 제한 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}

getShoppingItemOption('name')