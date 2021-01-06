const add = (a: number) => {
  //...
}

const sum = (a: number, b: number) => {
  //...
}

interface Empty<T> {

}

var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
  data: T
}

var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
// notempty1 = notempty2
// notempty2 = notempty1