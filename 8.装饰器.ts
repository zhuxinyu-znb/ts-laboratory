import "reflect-metadata";
function inject(serviceIdentifier) {
  return function(target, targetKey, index) {
    Reflect.defineMetadata(serviceIdentifier, "老袁666", target);
  };
}
class IndexController {
  public indexService;
  constructor(@inject('xxx') indexService) {
    this.indexService = indexService;
  }
}
const indexController = new IndexController("京程一灯");
console.log("🍎",indexController.indexService);
console.log("🍊",Reflect.getMetadata("xxx",IndexController));