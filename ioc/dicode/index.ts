import 'reflect-metadata';
import CreateIoc from './ioc';
import { parseScript } from 'esprima';
const container = new CreateIoc();
interface ITypes {
  [key: string]: Symbol;
}
const Types: ITypes = {
  indexService: Symbol.for('IndexService'),
};
// ====实现Service服务 被用于注入的====
interface IIndexService {
  log(str: string): void;
}

class IndexService implements IIndexService {
  log(str: string) {
    console.log(str);
  }
}
//注入到容器
container.bind(Types.indexService, () => new IndexService());
function getParams(fn: Function) {
  let ast = parseScript(fn.toString());
  console.log('生成的ast节点', ast);
  let funParmas: any[] = [];
  let node = ast.body[0];
  if (node.type == 'FunctionDeclaration') {
    funParmas = node.params;
  }
  let validParam: string[] = [];
  funParmas.forEach((obj) => {
    if (obj.type == 'Identifier') {
      validParam.push(obj.name);
    }
  });
  return validParam;
}
function inject(serviceIdentifier: Symbol): Function {
  return (target: Function, targetKey: string, index: number) => {
    // target.prototype.indexService = new IndexService();
    if (!targetKey) {
      //构造函数
      Reflect.defineMetadata(
        serviceIdentifier,
        container.get(serviceIdentifier),
        target
      );
    }
    // console.log('😁', target, targetKey, index);
  };
}
function hasKey<O extends Object>(obj: O, key: keyof any): key is keyof O {
  return obj.hasOwnProperty(key);
}
function controller<T extends { new(...args: any[]): {} }>(constructor: T) {
  //console.log('传递进来的constructor', constructor);
  //不够灵活 构造函数内的变量是否需要注入 你都一股脑注入过程
  //constructor.prototype.indexService = new IndexService();
  //constructor.prototype.indexService = container.get(Types.indexService);
  //错误的执行 静态属性不能被赋值
  //constructor.indexService = new IndexService();
  class Controller extends constructor {
    constructor(...args: any[]) {
      super(args);
      //分析 constructor的参数有啥？？ constructor -> ast
      //   this["indexService"] = Reflect.
      const _fnParams = getParams(constructor);
      console.log('获取的函数的参数名', _fnParams);
      let identify: string;
      for (identify of _fnParams) {
        if (hasKey(this, identify)) {
          this[identify] = Reflect.getMetadata(
            Types['indexService'],
            constructor
          );
        }
      }
    }
    // [index: string]: any;
  }
  return Controller;
}

@controller
class IndexController {
  public indexService: IIndexService;
  constructor(@inject(Types.indexService) indexService: any) {
    this.indexService = indexService;
  }
  //   public test(
  //     @inject(Types.indexService) aa: any,
  //     @inject(Types.indexService) bb: any
  //   ) {}
  info() {
    this.indexService.log('🍊 注入成功');
  }
}

const index = new IndexController(null);
index.info();
// console.log(index.indexService);
// index.indexService.log('测试');
