interface Iiteratee {
  <T>(currentValue: any, index: number, array: T): void;
}
function arrayMap(arr: Array<string | boolean | number>, iteratee: Iiteratee) {
  let index = -1,
    length = arr == null ? 0 : arr.length,
    result = Array<ReturnType<Iiteratee>>(length);
  console.log(typeof arr);
  while (++index < length) {
    result[index] = iteratee<typeof arr>(arr[index], index, arr);
  }
  return result;
}

//正确情况
const arr = ['测试', 123, true];
//类型校验错误 ①
// const arr = ['测试', 123, true, function () {}];
//类型校验错误类型②
// arrayMap内部对原始数据arr、result等进行了强校验
//类型错误校验③ 对内部新声明的arr 设置key和value也手动声明key
// type InnerArray = {
//   [key: number]: ReturnType<Iiteratee>;
// };
// let result :InnerArray
arrayMap(arr, (currentValue, index, array) => {
  console.log(currentValue, index, array);
});
