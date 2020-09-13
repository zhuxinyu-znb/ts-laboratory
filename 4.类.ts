// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
// ➖➖➖➖➖➖➖➖➖抽象类➖➖➖➖➖➖➖➖➖
abstract class Animal {
  abstract makeSound():void
  move():void {
    console.log('roaming the earch...')
  }
}
// 子类必须实现抽象类的抽象方法
// abstract class Animal {
//   eat() {
//       console.log('eat')
//   }
//   abstract sleep(): void
// }
// // let animal = new Animal()

// class Dog extends Animal {
//   constructor(name: string) {
//       super()
//       this.name = name
//       this.pri()
//   }
//   public name: string = 'dog'
//   run() {}
//   private pri() {}
//   protected pro() {}
//   readonly legs: number = 4
//   static food: string = 'bones'
//   sleep() {
//       console.log('Dog sleep')
//   }
// }
// // console.log(Dog.prototype)
// let dog = new Dog('wangwang')
// // console.log(dog)
// // dog.pri()
// // dog.pro()
// console.log(Dog.food)
// dog.eat()

// class Husky extends Dog {
//   constructor(name: string, public color: string) {
//       super(name)
//       this.color = color
//       // this.pri()
//       this.pro()
//   }
//   // color: string
// }
// console.log(Husky.food)

// class Cat extends Animal {
//   sleep() {
//       console.log('Cat sleep')
//   }
// }
// let cat = new Cat()

// let animals: Animal[] = [dog, cat]
// animals.forEach(i => {
//   i.sleep()
// })

// class Workflow {
//   step1() {
//       return this
//   }
//   step2() {
//       return this
//   }
// }
// new Workflow().step1().step2()

// class MyFlow extends Workflow {
//   next() {
//       return this
//   }
// }
// new MyFlow().next().step1().next().step2()