interface IStorageEngine {
    items:Array<Product>;
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
};
interface IScalable {
    getScale():number;
    getName():string;
};

class Scales <StorageEngine extends IStorageEngine> {
    private productArray:Product[];
    private storage:StorageEngine;
    constructor(storage:StorageEngine) {
        this.storage = storage;
        this.productArray=storage.items;
        
    };
    public getSumScale():number {
        let num = this.productArray.reduce((sum:number, item:IScalable)=>{
            return sum + item.getScale();
        }, 0);
        return num;
    };
    public getNameList():string[] {
        let list = this.productArray.map((item:IScalable)=>{
            return item.getName();
        })
        return list;
    };
    public addItem(item:Product):void {
        this.storage.addItem(item);
    };
    public getItem(index:number) {
        return this.storage.getItem(index);
    };
    public getCount() {
        return this.storage.getCount();
    };
}
class Product implements IScalable {
    private scale:number;
    private name:string;
    constructor(_name:string, _scale:number) {
        this.scale = _scale;
        this.name = _name;
    };
    public getScale():number {
        return this.scale;
    };
    public getName():string {
        return this.name;
    };
}

class ScalesStorageEngineArray implements IStorageEngine {
    public items: Product[];
    constructor() {
        this.items=[];
    };
    public addItem(item:Product) {
        this.items.push(item);
    };
    public getItem(index:number) {
        return this.items[index];
    };
    public getCount() {
        return this.items.length;
    };
}
class ScalesStorageEngineLocalStorage  implements IStorageEngine {
    public items: Product[];
    constructor() {
        if(localStorage.getItem('products')) {
            this.items=JSON.parse(localStorage.getItem('products')).map((item:any)=>{
                return new Product(item.name, item.scale);
            });
        } else {
            this.items = [];
        }
        
        localStorage.setItem('products', JSON.stringify(this.items));
    };
    public addItem(item:Product) {
        let locArray = JSON.parse(localStorage.getItem('products'));
        for(let i:number=0; i<locArray.length; i++) {
            if(locArray[i].name === item.getName()) {
                return;
            }
        }
        locArray.push(item);
        this.items.push(item);
        localStorage.setItem('products', JSON.stringify(locArray));
    };
    public getItem(index:number) {
        let locArray:Product[] = JSON.parse(localStorage.getItem('products'));
        return locArray[index];
    };
    public getCount() {
        let locArray:Product[] = JSON.parse(localStorage.getItem('products'));
        return locArray.length;
    };
}

const scaleArray = new Scales(new ScalesStorageEngineArray());
const scaleLocStorage = new Scales(new ScalesStorageEngineLocalStorage());
const product1 = new Product('Яблоко', 200);
const product2 = new Product('Киви', 100);
const product3 = new Product('Мандарин', 80);
scaleArray.addItem(product1);
scaleArray.addItem(product2);
scaleArray.addItem(product3);
scaleLocStorage.addItem(product1);
scaleLocStorage.addItem(product2);
scaleLocStorage.addItem(product3);
console.log(scaleArray.getNameList());
console.log(scaleArray.getSumScale());
console.log(scaleLocStorage.getNameList());
console.log(scaleLocStorage.getSumScale());
