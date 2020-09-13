// 联合属性的缺陷 只能访问联合属性共有的属性和方法
// function getLength(something: string | number): number {
//     return something.length;
// }

// 可以使用类型断言，将 something 断言成 string
function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
//---这里也可以强制使用as 进行推断
function getLength3(something: string | number): number {
    if ((something as string).length) {
      return (something as string).length;
    } else {
      return something.toString().length;
    }
  }
//如果联合属性太复杂 可以给类型起个别名
// 使用 type 创建类型别名,类型别名常用于联合类型
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
//联合类型带的参考
//这里也可以使用帮助方法 动态的设置对象类型
// interface A{}
// function helper(options:A){
//     return options;
// }
// //报错信息比较难调试
// const xxA : A = {};
// const xxB = helper(xxA);
