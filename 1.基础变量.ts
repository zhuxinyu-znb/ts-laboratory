let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let myName: string = 'Tom';
// 没有返回值的函数为void
function alertName(): void {
  alert('My name is Tom');
}
//声明一个 void 类型的只能将它赋值为 undefined 和 null
let unusable: void = undefined;
// 没有明确的值 ts会进行类型推导 声明变量的时候不一定非得指定类型。
let myFavoriteNumber = 'seven';
//等价于
let myFavoriteNumber2: string = 'seven';
//联合类型
function getString(something: string | number): string {
  return something.toString();
}
//interface类型设置
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person {
  readonly id: number; // 直读属性
  name: string;
  age?: number;
  // [propName: string]: string; 错误示范
  [propName: string]: any; //任意属性
}

let laoyuan: Person = {
  id: 89757, // 只读
  name: 'Tom',
  age: 25,
  gender: 'male',
};

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun']); // 0
console.log(Days[0]); // 'Sun'

enum Days2 {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days2['Sun']); // 7
