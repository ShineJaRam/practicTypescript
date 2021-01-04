interface list<T1, T2> {
  value: T1,
  title: T2
}

const listTest: list<number, string>  = {
  value: 200,
  title: 'Hello World'
}

interface DropDown<T> {
  value: T,
  title: string
}

interface detailedDropDown<K> extends DropDown< K> {
  description: string;
  tag: K;
}

let detailedItem: detailedDropDown<string> = {
  title: 'abc',
  description: 'asdsad',
  value: 'a',
  tag: 'a'
}