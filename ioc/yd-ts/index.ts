import "reflect-metadata";
import { parseScript } from "esprima";
interface IIndexService {
    log(str: string): void
}
//类型起名字
interface ITypes {
    [key: string]: Symbol
}
const Types: ITypes = {
    "indexService": Symbol.for("indexService")
}
const container :Map<Symbol,{
    callback:Function
}>= new Map();
container.set(Types.indexService,{
    callback:()=>new  IndexService()
})
// container.set()
//数据提供方  Model
class IndexService implements IIndexService {
    log(str: string) {
        console.log("🐻", str);
    }
}
function inject(serviceIdentifier: Symbol) {
    // step 1
    console.log("step1", "我进入到inject");
    return (target: object, targetKey: string, index: number) => {
        console.log("step2", index, target);
        if (!targetKey) {
            //这里我们就可以劫持
            // target["indexService"] = new IndexService();
            // target["qq"] = 123;
            // const callback = container.get(Types.indexService)
            Reflect.defineMetadata(serviceIdentifier, new IndexService(), target);
        }
    }
}
function getParams(fn: Function) {
    let ast = parseScript(fn.toString());
    let funcParams: any[] = [];
    // console.log("🌲ast树", ast);
    let node = ast.body[0];
    if (node.type == "FunctionDeclaration") {
        funcParams = node.params;
    }
    let validParam: string[] = [];
    funcParams.forEach((obj) => {
        if (obj.type == "Identifier") {
            validParam.push(obj.name);
        }
    })
    return validParam;
}
function hasKey<O extends object>(obj: O, key: keyof any): key is keyof O {
    return obj.hasOwnProperty(key);
}
function controller<T extends { new(...args: any[]): {} }>(constructor: T) {
    //step3
    console.log("🐱step3", "对类进行修饰的函数")
    class Controller extends constructor {
        constructor(...args: any[]) {
            super(args)
            // console.log("通过ast获取函数的参数名", getParams(constructor));
            // console.log("indexService",constructor["indexService"]);
            console.log("🐻step4", "真正的修饰类");
            const injectParams = getParams(constructor);
            let identity: string;
            for (identity of injectParams) {
                if (hasKey(this, identity)) {
                    this[identity] = Reflect.getMetadata(Types[identity], constructor);
                }

            }
        }
        // [index:string]:any
    }
    return Controller;
}
//路由 Controller
@controller
class IndexController {
    private indexService: IIndexService;
    constructor(@inject(Types.indexService) indexService: any) {
        this.indexService = indexService;
    }
    info() {
        this.indexService.log("京程一灯🏮");
    }
}
//①.傻瓜写法
// const indexController = new IndexController();
// indexController.info();

// ②.对业务侵占性特别强
// const indexService = new IndexService();
// const indexController = new IndexController(indexService);
// indexController.info();

// ③.无侵入式的代码逻辑 代码的实例没被托管
// const index = new IndexController(null);
// index.info();

//④.进行更深层次的 类的实例的托管 IOC 流程 缓存等等
const index = new IndexController(null);
index.info();

//⑤ 去对设计模式进行深耕 

