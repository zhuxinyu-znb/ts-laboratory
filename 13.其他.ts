//同步循环调用 ES2018
// async function process(array) {
//     for (let i of array) {
//       await doSomething(i);
//     }
//   }
function doSomething(i) {}
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}

//ES2019 新的写法 省略掉e
try {
} catch (e) {}
try {
} catch {}

namespace Shape {
  const pi = Math.PI;
  export function cricle(r: number) {
    return pi * r ** 2;
  }
}

//TypeScript提供一些工具类型来帮助常见的类型转换。这些类型是全局可见的
// Partial<T>，TypeScript 2.1
// Readonly<T>，TypeScript 2.1
// Record<K,T>，TypeScript 2.1
// Pick<T,K>，TypeScript 2.1
// Exclude<T,U>，TypeScript 2.8
// Extract<T,U>，TypeScript 2.8
// NonNullable<T>，TypeScript 2.8
// ReturnType<T>，TypeScript 2.8
// InstanceType<T>，TypeScript 2.8
// Required<T>，TypeScript 2.8
// ThisType<T>，TypeScript 2.8

// Partial<T>
// 构造类型T，并将它所有的属性设置为可选的。它的返回类型表示输入类型的所有子类型。
// 例子
// interface Todo {
//     title: string;
//     description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//     title: 'organize desk',
//     description: 'clear clutter',
// };

// const todo2 = updateTodo(todo1, {
//     description: 'throw out trash',
// });
// Readonly<T>
// 构造类型T，并将它所有的属性设置为readonly，也就是说构造出的类型的属性不能被再次赋值。
// 例子
// interface Todo {
//     title: string;
// }

// const todo: Readonly<Todo> = {
//     title: 'Delete inactive users',
// };

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// 这个工具可用来表示在运行时会失败的赋值表达式（比如，当尝试给冻结对象的属性再次赋值时）。
// Object.freeze
// function freeze<T>(obj: T): Readonly<T>;
// Record<K,T>
// 构造一个类型，其属性名的类型为K，属性值的类型为T。这个工具可用来将某个类型的属性映射到另一个类型上。
// 例子
// interface PageInfo {
//     title: string;
// }

// type Page = 'home' | 'about' | 'contact';

// const x: Record<Page, PageInfo> = {
//     about: { title: 'about' },
//     contact: { title: 'contact' },
//     home: { title: 'home' },
// };
// Pick<T,K>
// 从类型T中挑选部分属性K来构造类型。
// 例子
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// };
// Exclude<T,U>
// 从类型T中剔除所有可以赋值给U的属性，然后构造一个类型。
// 例子
// type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
// type T2 = Exclude<string | number | (() => void), Function>;  // string | number
// Extract<T,U>
// 从类型T中提取所有可以赋值给U的类型，然后构造一个类型。
// 例子
// type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
// type T1 = Extract<string | number | (() => void), Function>;  // () => void
// NonNullable<T>
// 从类型T中剔除null和undefined，然后构造一个类型。
// 例子
// type T0 = NonNullable<string | number | undefined>;  // string | number
// type T1 = NonNullable<string[] | null | undefined>;  // string[]
// ReturnType<T>
// 由函数类型T的返回值类型构造一个类型。
// 例子
// type T0 = ReturnType<() => string>;  // string
// type T1 = ReturnType<(s: string) => void>;  // void
// type T2 = ReturnType<(<T>() => T)>;  // {}
// type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
// type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
// type T5 = ReturnType<any>;  // any
// type T6 = ReturnType<never>;  // any
// type T7 = ReturnType<string>;  // Error
// type T8 = ReturnType<Function>;  // Error
// InstanceType<T>
// 由构造函数类型T的实例类型构造一个类型。
// 例子
// class C {
//     x = 0;
//     y = 0;
// }

// type T0 = InstanceType<typeof C>;  // C
// type T1 = InstanceType<any>;  // any
// type T2 = InstanceType<never>;  // any
// type T3 = InstanceType<string>;  // Error
// type T4 = InstanceType<Function>;  // Error
// Required<T>
// 构造一个类型，使类型T的所有属性为required。
// 例子
// interface Props {
//     a?: number;
//     b?: string;
// };

// const obj: Props = { a: 5 }; // OK

// const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
// ThisType<T>
// 这个工具不会返回一个转换后的类型。它做为上下文的this类型的一个标记。注意，若想使用此类型，必须启用--noImplicitThis。
// 例子
// // Compile with --noImplicitThis

// type ObjectDescriptor<D, M> = {
//     data?: D;
//     methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
// }

// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//     let data: object = desc.data || {};
//     let methods: object = desc.methods || {};
//     return { ...data, ...methods } as D & M;
// }

// let obj = makeObject({
//     data: { x: 0, y: 0 },
//     methods: {
//         moveBy(dx: number, dy: number) {
//             this.x += dx;  // Strongly typed this
//             this.y += dy;  // Strongly typed this
//         }
//     }
// });

// obj.x = 10;
// obj.y = 20;
// obj.moveBy(5, 5);
// 上面例子中，makeObject参数里的methods对象具有一个上下文类型ThisType<D & M>，因此methods对象的方法里this的类型为{ x: number, y: number } & { moveBy(dx: number, dy: number): number }。
// 在lib.d.ts里，ThisType<T>标识接口是个简单的空接口声明。除了在被识别为对象字面量的上下文类型之外，这个接口与一般的空接口没有什么不同。
