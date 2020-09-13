//=========泛型===========
//泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持
interface Lengthwise {
  length: number;
}
function identity<T extends Lengthwise>(arg: T): T {
  console.log('👴', arg.length);
  return arg;
  //   return "🌶";
}

const str = 'typescript学习';
const result = identity<string>(str);
console.log(result);

//=======泛型类===========
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(30, 50));

//=================实操函数重载=================
//只能返回string类型的数据
// function getData(value:string):string{
//   return value;
// }

// //同时返回 string类型 和number类型  （代码冗余）
// function getData1(value:string):string{
//   return value;
// }
// function getData2(value:number):number{
//   return value;
// }
//--------愚蠢些的函数重载--------
// function add(...rest: number[]): number;
// function add(...rest: string[]): string;
// function add(...rest: any[]) {
//     let first = rest[0];
//     if (typeof first === 'number') {
//         return rest.reduce((pre, cur) => pre + cur);
//     }
//     if (typeof first === 'string') {
//         return rest.join('');
//     }
// }
// console.log(add(1, 2))
// console.log(add('a', 'b', 'c'));
//使用泛型后就可以解决这个问题
// T表示泛型，具体什么类型是调用这个方法的时候决定的
// 表示参数是什么类型就返回什么类型~~~
function getData<T>(value: T): T {
  return value;
}
getData<number>(123);
getData<string>('1214231');

// 定义接口
interface ConfigFn {
  <T>(value: T): void;
}
var getData2: ConfigFn = function <T>(value: T): T {
  return value;
};
getData2<string>('张三');
// getData2<string>(1243);  //错误

// 小彩蛋
// readonly修饰只能用于方括号的数组和元组上
// let err1: readonly Set<number>; // 错误!
// let err2: readonly Array<boolean>; // 错误!

// let okay: readonly boolean[]; // 无错误
// let okay2: readonly [boolean, string]; // 无错误

//============泛型的动态数据==============
interface Bookmark {}
class BookmarksService<T extends Bookmark> {
  items: T[] = [];
}
//给泛型提供了默认值
class BookmarksService2<T extends Bookmark = Bookmark> {
  items: T[] = [];
}
