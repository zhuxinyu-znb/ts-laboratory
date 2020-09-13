//总结：
// 1.能用 interface 实现，就用 interface , 如果不能就用 type
// 2.https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases
//  类型别名 创建新类型就用interface 组合类型就用type
//相同点
/**
 * 1.都可以描述一个对象或者函数
 * 2.都允许拓展（extends）
 */
//不同点
/**
 * 1.type 可以而 interface 不行
 *  1-1 type 可以声明基本类型别名，联合类型，元组等类型
 *  1-2 type 语句中还可以使用 typeof 获取实例的 类型进行赋值
 * 2.interface 可以而 type 不行
 *  2-1 interface 能够声明合并
 */
//----------相同点1-----------
// interface User {
//   name: string
//   age: number
// }

// interface SetUser {
//   (name: string, age: number): void;
// }
//---------------------
// type User = {
//   name: string
//   age: number
// };

// type SetUser = (name: string, age: number)=> void;

// const fn:SetUser = (name: string, age: number)=>{
//     console.log(`name${name} -> ${age}`);
// }
// fn("老袁",30);

//----------相同点2-------------
// interface Name {
//   name: string;
// }
// interface User extends Name {
//   age: number;
// }

// type Name = {
//   name: string;
// };
// type User = Name & { age: number };

//----比较繁杂的类型转化-------
// type Name = {
//   name: string;
// };
// interface User extends Name {
//   age: number;
// }
// interface Name {
//   name: string;
// }
// type User = Name & {
//   age: number;
// };

//---不同点1---
// type 可以而 interface 不行
// type 可以声明基本类型别名，联合类型，元组等类型

// 基本类型别名
// type Name = string
// // 联合类型
// interface Dog {
//     wong();
// }
// interface Cat {
//     miao();
// }
// type Pet = Dog | Cat
// // 具体定义数组每个位置的类型
// type PetList = [Dog, Pet]

//type 语句中还可以使用 typeof 获取实例的 类型进行赋值

// 当你想获取一个变量的类型时，使用 typeof
// let div = document.createElement('div');
// type B = typeof div

//其他
// type StringOrNumber = string | number;
// type Text = string | { text: string };
// type NameLookup = Dictionary<string, Person>;
// type Callback<T> = (data: T) => void;
// type Pair<T> = [T, T];
// type Coordinates = Pair<number>;
// type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

//---不同点2---
// interface 可以而 type 不行
// interface 能够声明合并
// interface User {
//   name: string
//   age: number
// }

// interface User {
//   sex: string
// }
/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
