class CreateIoc {
    public container: Map<Symbol, any>;
    constructor() {
        this.container = new Map();
    }
    get(namespace: Symbol) {
        let item = this.container.get(namespace);
        return item.callback();
    }
    bind(key: Symbol, callback: Function) {
        this.container.set(key, { callback })
    }
}
export default CreateIoc;