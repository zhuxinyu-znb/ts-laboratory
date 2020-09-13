import CreateIoc from "./ioc";
import "reflect-metadata";
const container = new CreateIoc();
interface ITYpes {
  [key: string]: Symbol;
}
const Types: ITYpes = {
  indexService: Symbol.for("IndexService"),
};
interface IIndexService {
  log(str: string): void;
}
class IndexService implements IIndexService {
  log(str: string) {
    console.log(str);
  }
}
//IndexService这个实例 注入到容器中
container.bind(Types.indexService, () => new IndexService());
function inject(serviceIdentifier: Symbol): Function {
  // step1
  //console.log("🍌", "1.执行构造函数");
  return (target: any, targetKey: any, index: any) => {
    //step 2
    //console.log("🍌", "2.对构造函数内部进行赋值");
    if (!targetKey) {
      // console.log("🍓", index);
      // console.log("---------");
      //target["indexService"] = 1111;
      //target["indexService"] = container.get(serviceIdentifier);
      //  target.prototype.indexService = container.get(serviceIdentifier);
      Reflect.defineMetadata(
        serviceIdentifier,
        container.get(serviceIdentifier),
        target
      );
    }
  };
}
function getArgs(func: any) {
  // 先用正则匹配,取得符合参数模式的字符串.
  // 第一个分组是这个: ([^)]*) 非右括号的任意字符
  var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
  // 用逗号来分隔参数(arguments string).
  return args
    .split(",")
    .map(function (arg: any) {
      // 去除注释(inline comments)以及空格
      return arg.replace(/\/\*.*\*\//, "").trim();
    })
    .filter(function (arg: any) {
      // 确保没有 undefined.
      return arg;
    });
}
function controller<T extends { new (...args: any[]): {} }>(constructor: T) {
  //step3
  // console.log("🍌", "3.执行了装饰器的注入");
  // console.log("关键", constructor);
  class Controller extends constructor {
    constructor(...args: any[]) {
      // console.log("4.真实controller类",constructor);
      //step4
      super(args);
      //this.indexService = Reflect.getMetadata(Types.IndexService, constructor);
      //console.log("📚", "5.利用constructor.constructor特性实现强行注入参数")
      const injectParams = getArgs(constructor);
      //const me:typeof constructor = this;
      let identity: string;
      for (identity of injectParams) {
        // console.log(_identity);
        this[identity] = Reflect.getMetadata(Types[identity], constructor);
      }
    }
    [index: string]: any;
  }
  return Controller;
}
@controller
class IndexController {
  public indexService: IIndexService;
  constructor(@inject(Types.indexService) indexService: any) {
    this.indexService = indexService;
  }
  info() {
    this.indexService.log("🍊注入成功");
    // console.log("🍊注入成功");
  }
}
//---最早的开发方式 手动的声明文件---
// const indexService = new IndexService();
// new IndexController(indexService);
//-----把这些通过new的文件统统的放到容器内容----
//const index = new IndexController(container.get(Types.IndexService));
//----我们的类具体执行的阶段不需要手动的寻找----
/**
 * 1.在构造函数执行的阶段 通过 @inject 的方式传入别名
 * 2.constructor在TS的内部职能放2种修饰符 public @xx
 * 3.类顶部也可以传入装饰器 先执行constructor传参修饰符-》类顶部的修饰符
 * 4.如何拦截null
 * 4-1 通过inject我们已经能够知道 constructor Types.IndexService 知晓注入的类
 * 通过参数的构造函数从容器中直接取得设置赋值
 * 5.调用类的装饰器
 */
const index = new IndexController(null);
index.info();
// console.log(index);
