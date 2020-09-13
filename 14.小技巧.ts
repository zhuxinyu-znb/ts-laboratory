//1.keyof keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。
// const data = {
//     a: 3,
//     hello: "world",
//   };
//   // 1.无法确认返回类型：这将损失 ts 最大的类型校验功能
//   // 2.无法对 key 做约束：可能会犯拼写错误的问题
//   // function get(o: object, name: string) {
//   //   return o[name];
//   // }
//   function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name];
//   }
//   const data1 = get(data, "hello");
//   console.log(data1);

//----------------------------------------------------------------
//2.Condition Type
// type isTrue<T> = T extends true ? true : false
// // 相当于 type t = false
// type t = isTrue<number>

// // 相当于 type t = false
// type t1 = isTrue<false>

//----------------------------------------------------------------
// 3.typeof 代表取某个值的 type，可以从以下示例来展示他们的用法
// const a: number = 3

// // 相当于: const b: number = 4
// const b: typeof a = 4
// //在一个典型的服务端项目中，我们经常需要把一些工具塞到 context 中，如config，logger，db models, utils 等，此时就使用到 typeof。
// import logger from './logger'
// import utils from './utils'

// interface Context extends KoaContect {
//   logger: typeof logger,
//   utils: typeof utils
// }

// app.use((ctx: Context) => {
//   ctx.logger.info('hello, world')

//   // 会报错，因为 logger.ts 中没有暴露此方法，可以最大限度的避免拼写错误
//   ctx.loger.info('hello, world')
// });

//----------------------------------------------------------------
// 4.is
// if ((err as AxiosError).isAxiosError) {
//     code = `Axios-${(err as AxiosError).code}`
//   }
// function isAxiosError(error: any): error is AxiosError {
//   return error.isAxiosError;
// }

// if (isAxiosError(err)) {
//   code = `Axios-${err.code}`;
// }
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >

// let a: unknown;
// let b: number = <number>a;
// function isNumber(val: any): val is number {
//     return typeof val === "number";
// }


// if (isNumber(a)) {
//    b = a;
// }


// // 主动使用联合类型确保我们的输入是 1-6的数字
// type Dice = 1 | 2 | 3 | 4 | 5 | 6;

// function pipsAreValid(pips: number): pips is Dice {
//   return pips === 1 || pips === 2 || pips === 3 ||
//     pips === 4 || pips === 5 || pips === 6;
// }

// function evalThrow(count: number) {
//   if (pipsAreValid(count)) {
//     // count is now of type Dice ?
//     switch (count) {
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//         console.log('Not today');
//         break;
//       case 6:
//         console.log('Won!');
//         break;
//       case 7:
//         // TypeScript errors here. 7 is not in the union type of 
//         // Dice
//         console.log('This does not work!');
//         break;
//     }
//   }

// const isEntity = (v: any): v is Entity<any> => {
//   return v instanceof Entity;
// };
//-----------5.默认提示---------------
type CoreIconName = "user" | "customer";
const opts: CoreIconName = "customer";


type LiteralUnion<T extends U, U = string> = T | (U & {})
interface GreetSettings {
  greeting: string,
  duration: number,
  color?: string;
}
type Color = LiteralUnion<'red' | 'black' | keyof GreetSettings>
const c: Color = "";

// var c: Color = "red"
// var d: Color = 'any-string'
// type N = LiteralUnion<1 | 2, number>

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//---6.默认参数----
interface User {
  name: string;
  age: number;
}
type Func = (user: User) => void;
type ParamType<T> = T extends (param: infer P) => any ? P : T;
type Test = ReturnType<Func>; // Test = User
type s = ParamType<string>; // string