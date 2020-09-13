let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];
// ➖➖➖➖➖➖➖➖➖用接口表示数组➖➖➖➖➖➖➖➖➖
interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];
// ➖➖➖➖➖➖➖➖➖any 在数组中的应用➖➖➖➖➖➖➖➖➖
// let list: any[] = ["laoyuan", 25, { website: "www.yidengfe.com" }];
// ➖➖➖➖➖➖➖➖➖类数组➖➖➖➖➖➖➖➖➖
function sum() {
  let args: IArguments = arguments;
}
