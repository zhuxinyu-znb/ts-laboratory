//实现静态类
/* class decorator */
interface MyType {
    instanceMethod(): void;
}

interface MyTypeStatic {
    new(): MyType;
    staticMethod(): void;
}
function staticImplements<T>() {
    return <T>(constructor: T) => constructor;
}

@staticImplements<MyTypeStatic>()
class MyTypeClass {
    public static staticMethod() {
        console.log("静态方法");
    }
    instanceMethod() {
        console.log("动态方法");
    }
}
MyTypeClass.staticMethod();

//解法二：
// interface ConfigConstructor {
//   CoreInterface: () => any;
//   new(): Config;
// }

// interface Config {
//   readonly NAME: string;
//   readonly TITLE: string;
// }

// class Test implements Config {
//   readonly NAME: string;
//   readonly TITLE: string;

//   static CoreInterface = function (): any { return "something"; }
// }

interface ConfigConstructor {
    CoreInterface: () => any;
    new(): Config;
}

interface Config {
    readonly NAME: string;
    readonly TITLE: string;
}

const Test: ConfigConstructor = class Test implements Config {
    readonly NAME: string;
    readonly TITLE: string;
    static CoreInterface = function (): any { return "something"; }
}
Test.CoreInterface();