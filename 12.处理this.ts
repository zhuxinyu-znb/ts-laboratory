// ThisType  ThisType<T> 键入的上下文类型，那么 this 的类型为 T

// Compile with --noImplicitThis

// type Point = {
//   x: number;
//   y: number;
//   moveBy(dx: number, dy: number): void;
// };

// let p: Point = {
//   x: 10,
//   y: 20,
//   moveBy(dx, dy) {
//     this.x += dx; // this has type Point
//     this.y += dy; // this has type Point
//   }
// };

// let foo = {
//   x: 'hello',
//   f(n: number) {
//     this; // { x: string, f(n: number): void }
//   }
// };

// let bar = {
//   x: 'hello',
//   f(this: { message: string }) {
//     this; // { message: string }
//   }
// };
// class Test{
//     private count = 0;
//     fn(){
//         console.log(this.count);
//     }
// }
// var num = 20;
// function fn(that: typeof globalThis){
//     return that.num;
// }
// fn(this);

// ThisType<T>
// 这个工具不会返回一个转换后的类型。它做为上下文的this类型的一个标记。注意，若想使用此类型，必须启用--noImplicitThis。
// 例子
// Compile with --noImplicitThis

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
console.log("🍊",obj.x);
console.log("🍊",obj.y);
// 上面例子中，makeObject参数里的methods对象具有一个上下文类型ThisType<D & M>，因此methods对象的方法里this的类型为{ x: number, y: number } & { moveBy(dx: number, dy: number): number }。
// 在lib.d.ts里，ThisType<T>标识接口是个简单的空接口声明。除了在被识别为对象字面量的上下文类型之外，这个接口与一般的空接口没有什么不同。

//映射类型
// type ArrayMethodName = 'filter' | 'forEach' | 'find';
// type SelectArrayMethod<T> = {
//   [K in ArrayMethodName]: Array<T>[K]
//  }
 
//  interface SomeClass extends SelectArrayMethod<number> {}
 
//  class SomeClass {
//   value = [1, 2, 3];
 
//   someMethod() {
//     this.forEach(/* ... */)        // ok
//     this.find(/* ... */)           // ok
//     this.filter(/* ... */)         // ok
//     this.value                     // ok
//     this.someMethod()              // ok
//   }
//  }
 
//  const someClass = new SomeClass();
//  someClass.forEach(/* ... */)        // ok
//  someClass.find(/* ... */)           // ok
//  someClass.filter(/* ... */)         // ok
//  someClass.value                     // ok
//  someClass.someMethod()              // ok