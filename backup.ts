// enum smartPhoneActionType {
//   smartPhoneFirstShow = 11,
//   smartPhoneLoadFinish,
//   smartPhoneSubmit,
// }
// const imeStamp = {} as { [K in smartPhoneActionType]: number };
// //获得对象
// imeStamp[11] = 20;
// console.log(imeStamp);
// import ydkey from './demos/ydkey';
// import index2 from './demos/index2';
// const data = {
//   [ydkey]() {
//     index2[ydkey]();
//   },
// };
// data[ydkey]();


// abstract class A {
//   static fn() {
//     throw new Error("not implemented!");
//   }
//   protected abstract printMeeting(): void;
// }

// class B extends A {
//   static fn() {
//     console.log("B.fn");
//   }
//   printMeeting() { }
// }

// B.fn()

// type LiteralUnion<T, U = string> = T | (U & {});

// interface ITest {
//     test: string;
// }
// const data: LiteralUnion<keyof ITest> = {}
// console.log(data);



/**
 * 1.定义类型LiteralUnion（看变量名字应该是字符(串)联合）
 * 2.<T extends U, U = string> 这是对<T,U>的普通泛型升级
 * 3.<T extends U> 泛型T继承了U的全部属性 U = string U是字符串类型
 * 4.T已经具备了基础字符串的类型 接下来就是赋值返回T或者 (U & {})
 * 5.data返回的是属于keyof ITest的所以没有报错
 * 6.data2返回的是不属于keyof ITest的但是U & {}的联合类型
 * 7.U & {} 这里严格的规定了这个字符串的__proto__是object
 * 8.data3不符合T和U & {}报错了
 */
// type Lit,eralUnion<T extends U U = string> = T;
// type Color = LiteralUnion<"red" | "black" | "yellow">;
// const defaultColor:Color = "yellow"
// interface ITest {
//     test: string;
// }
// const data: LiteralUnion<keyof ITest> = null;
// const data2: LiteralUnion<keyof ITest> = "qq";
// //报错了 
// const data3: LiteralUnion<keyof ITest> = {
//     zz_IGNORE_ME:20
// };
// type HexColor = string & { hexish?: any };
// const HexColorData:HexColor = {
//     hexish:123
// }
// interface Options {
//     backGroundColor: "black" | "red" | "green" | HexColor
// }
// const opts : Options = {backGroundColor:"green"}

// type CoreIconName = "user" | "customer";
// const opts: CoreIconName = "user" 



/**
 * 题目描述:
 * 有一个数据列表，示例如下:
 * ID  PARENT_ID  NAME
 * 101   0         AA
 * 102   101       BB
 * 103   101       CC
 * 104   103       DD
 * 105   103       EE
 * 106   102       FF
 * 107   102       GG
 * 108   104       HH
 * 109   105       II
 *
 * 给定一个数据结构:
 * interface TreeNode {
 *   id: number;
 *   parentId: number;
 *   name: string;
 * }
 *
 * 请写一个函数 printTree(list: TreeNode[]): void
 * 把输入的数据在控制台打印为一个有缩进的树形结构。例如:
 * AA
 *   BB
 *     FF
 *     GG
 *   CC
 *     DD
 *       HH
 *     EE
 *       II
 * （可以有辅助函数，可以扩展数据结构）
 */

// interface TreeNode {
//     children?: IPusher;
//     id: number;
//     parentId: number;
//     name: string;
// }
// // interface IRes {
// //     children: Array<IPusher>;
// //     [key: number]: TreeNode
// // }
// interface IPusher {
//     value: string,
//     name: string,
//     children: Array<IPusher>
// }
// function printTree(list: TreeNode[]): void {
//     const tableData = list, keys = ['parentId', 'id'];
//     let hashTable = {
//         $$pos: 0
//     }, res: Array<IPusher> = [];
//     for (let i = 0; i < tableData.length; i++) {
//         let arr = res, cur = hashTable
//         for (let j = 0; j < keys.length; j++) {
//             let key = keys[j], filed = tableData[i][key]
//             if (!cur[filed]) {
//                 let pusher: IPusher = {
//                     value: filed,
//                     name: tableData[i]["name"],
//                     children: []
//                 }, tmp = [];
//                 if (j !== (keys.length - 1)) {
//                     tmp = []
//                     pusher.children = tmp
//                 }
//                 cur[filed] = { $$pos: arr.push(pusher) - 1 }
//                 cur = cur[filed]
//                 arr = tmp;
//             } else {
//                 cur = cur[filed]
//                 arr = arr[cur.$$pos].children
//             }
//         }
//     }
//     // console.log(res)
//     for (const item of res) {
//         console.log(item)
//     }
// }

// //============= 测试代码 ==============
// const list: TreeNode[] = [
//     { id: 1001, parentId: 0, name: 'AA' },
//     { id: 1002, parentId: 1001, name: 'BB' },
//     { id: 1003, parentId: 1001, name: 'CC' },
//     { id: 1004, parentId: 1003, name: 'DD' },
//     { id: 1005, parentId: 1003, name: 'EE' },
//     { id: 1006, parentId: 1002, name: 'FF' },
//     { id: 1007, parentId: 1002, name: 'GG' },
//     { id: 1008, parentId: 1004, name: 'HH' },
//     { id: 1009, parentId: 1005, name: 'II' },
// ];

// printTree(list);


/**
     * 实现思路 开始用的把所有可能都枚举了出来 嵌套循环 --后来改成了如下思路
     * 构造等式: a*b*c=() || a*b*()=c || a*()*b=c ||()*a*b=c 随机空也就在3 2 1 0
     * 1.得到3个随机数 1个随机空位置 2个符号 
     * 2.判断随机索引位位置 
     *   此处分为2种情况
     *   i.随机位置为0|1 则不需要进行判断 前两位的计算在0-20之间
     *   ii. 随机位置为2|3 则需要进行前两位计算判断是否在0-20之间 不在则踢出重试
     * 3.判断随机符号,第一位符号 与第二位符号都会出现两种情况即+|- 所以每种情况都要判断
     *   eg: a+b-c=() 第一位为+,二位- 并且随机索引在3位置  则需要进行2次判断
     *       i.判断 a+b 是否在0-20 若符合进行第二次符号位判断 
     *       ii. 判断a+b-c是否在0-20 若符合 则就是我所需要的  其他情况也是这样判断
     */
// const symbols: string[] = ["+", "-"];

const getRandom = (max: number): number => {
    const result: number = Math.ceil(Math.random() * (max - -1)) + -1;
    return result;
}
// const dictionariesMap: Map<number, (args: number[]) => string> = new Map();
// dictionariesMap.set(0, (...args) => {
//     const [firstSymbol, secondSymbol, a, b, c] = args;
//     let result: string = "";
//     if (firstSymbol == 0) {
//         //不需要判断
//         if (secondSymbol == 0 && c - a - b >= 0 && c - a - b <= 20) {
//             //()+a+b=c
//             result = "()" + "+" + a + "+" + b + "=" + c;
//         } else if (secondSymbol == 1 && c + b - a >= 0 && c + b - a <= 20) {
//             //()+a-b=c
//             result = "()" + "+" + a + "-" + b + "=" + c;
//         }
//     } else if (firstSymbol == 1) {
//         //()-a
//         if (secondSymbol == 0 && c - b + a >= 0 && c - b + a <= 20) {
//             //()-a+b=c
//             result = "()" + "-" + a + "+" + b + "=" + c;
//         } else if (secondSymbol == 1 && c + b + a >= 0 && c + b + a <= 20) {
//             //()-a-b=c
//             result = "()" + "-" + a + "-" + b + "=" + c;
//         }
//     }
//     return result;
// })
// dictionariesMap.set(1, (args) => {
//     const [firstSymbol, secondSymbol, a, b, c] = args;
//     let result: string = "";
//     return result;
// })
// const fn = dictionariesMap.get(1);
// fn();
// const getQuestion = (): string => {
//     const a = getRandom(21);
//     const b = getRandom(21);
//     const c = getRandom(21);
//     //随机空位置
//     const randomIndex = getRandom(4);
//     //随机符号
//     const firstSymbol = getRandom(2);
//     const secondSymbol = getRandom(2);
//     let result: string = "";//结果
//     if (randomIndex == 3) {
//         //1*1*1=() 代表加
//         if (firstSymbol == 0 && a + b >= 0 && a + b <= 20) {
//             if (secondSymbol == 0 && a + b + c >= 0 && a + b + c <= 20) {
//                 //+
//                 result = a + "+" + b + "+" + c + "=" + "()";
//             } else if (secondSymbol == 1 && a + b - c >= 0 && a + b - c <= 20) {
//                 //-
//                 result = a + "+" + b + "-" + c + "=" + "()";
//             }
//             return result;
//         } else if (firstSymbol == 1 && a - b >= 0 && a - b <= 20) {
//             //第一个符号为减
//             if (secondSymbol == 0 && a - b + c >= 0 && a - b + c <= 20) {
//                 //+
//                 result = a + "-" + b + "+" + c + "=" + "()";

//             } else if (secondSymbol == 1 && a - b - c >= 0 && a - b - c <= 20) {
//                 //-
//                 result = a + "-" + b + "-" + c + "=" + "()";
//             }
//             return result;
//         }

//     }
//     else if (randomIndex == 2) {
//         //a*b*()=c
//         if (firstSymbol == 0 && a + b >= 0 && a + b <= 20) {
//             //+
//             if (secondSymbol == 0 && c - a - b >= 0 && c - a - b <= 20) {
//                 //a+b+()=c
//                 result = a + "+" + b + "+" + "()" + "=" + c;

//             }
//             else if (secondSymbol == 1 && a + b - c >= 0 && a + b - c <= 20) {
//                 //a+b-()=c
//                 result = a + "+" + b + "-" + "()" + "=" + c;

//             }
//             return result;

//         } else if (firstSymbol == 1 && a - b >= 0 && a - b <= 20) {
//             //-
//             if (secondSymbol == 0 && c - a + b >= 0 && c - a + b <= 20) {
//                 //a-b+()=c
//                 result = a + "-" + b + "+" + "()" + "=" + c;
//             } else if (secondSymbol == 1 && a - b - c >= 0 && a - b - c <= 20) {
//                 //a-b-()=c
//                 result = a + "-" + b + "-" + "()" + "=" + c;
//             }
//             return result;
//         }
//     } else if (randomIndex == 1) {
//         //a*()*b=c
//         if (firstSymbol == 0) {
//             //不存在22运算
//             if (secondSymbol == 0 && c - a - b >= 0 && c - a - b <= 20) {
//                 //a+()+b=c
//                 result = a + "+" + "()" + "+" + b + "=" + c;

//             } else if (secondSymbol == 1 && c + b - a >= 0 && c + b - a <= 20) {
//                 //a+()-b=c
//                 result = a + "+" + "()" + "-" + b + "=" + c;
//             }
//             return result;

//         } else if (firstSymbol == 1) {
//             //a*()*b=c
//             if (secondSymbol == 0 && a + b - c >= 0 && a + b - c <= 20) {
//                 //a-()+b=c
//                 result = a + "-" + "()" + "+" + b + "=" + c;
//             } else if (secondSymbol == 1 && a - b - c >= 0 && a - b - c <= 20) {
//                 //a-()-b=c
//                 result = a + "-" + "()" + "-" + b + "=" + c;
//             }
//             return result;
//         }
//     } else if (randomIndex == 0) {
//         //()*a*b=c
//         if (firstSymbol == 0) {
//             //不需要判断
//             if (secondSymbol == 0 && c - a - b >= 0 && c - a - b <= 20) {
//                 //()+a+b=c
//                 result = "()" + "+" + a + "+" + b + "=" + c;
//             } else if (secondSymbol == 1 && c + b - a >= 0 && c + b - a <= 20) {
//                 //()+a-b=c
//                 result = "()" + "+" + a + "-" + b + "=" + c;
//             }
//             return result;
//         } else if (firstSymbol == 1) {
//             //()-a
//             if (secondSymbol == 0 && c - b + a >= 0 && c - b + a <= 20) {
//                 //()-a+b=c
//                 result = "()" + "-" + a + "+" + b + "=" + c;
//             } else if (secondSymbol == 1 && c + b + a >= 0 && c + b + a <= 20) {
//                 //()-a-b=c
//                 result = "()" + "-" + a + "-" + b + "=" + c;
//             }
//             return result;
//         }
//     }
//     return result;
// }
// const main = (): void => {
//     let t = 0;
//     while (t < 50) {
//         const test: string = getQuestion();
//         if (test == "") {
//             continue;
//         }
//         console.log(test);
//         t++;
//     }
// }
// main();