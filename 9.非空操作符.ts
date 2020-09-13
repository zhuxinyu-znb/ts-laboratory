type ListNode = { data: string | number; next?: ListNode };
// function addNext(node: ListNode) {
//   if (node.next === undefined) {
//     node.next = { data: 0 };
//   }
// }
function setNextValue(node: ListNode, value: number) {
  //   addNext(node);
  node.next!.data = value;
  console.log(node);
}

setNextValue(
  {
    data: 123,
    next: {
      data: 456,
    },
  },
  1
);

//===可空操作符===
interface IPerson {
  name: string; // IPerson需要包含一个name属性，类型是string
  age: number; // IPerson需要包含一个age属性，类型是number
  family: string[]; // IPerson需要包含一个family属性，类型是数组，数组里面都是string类型的数据
  sex?: "男" | "女"; // IPerson可选一个sex属性，值为'男'或者'女'或者undefined
}
// 使用IPerson接口定义一个对象，如果对象不符合IPerson的定义，编译器会飘红报错
const person: IPerson = {
  name: "老袁",
  age: 12,
  family: ["老大", "老二"],
};
console.log(person.family);
