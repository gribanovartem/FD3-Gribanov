interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
};

class Scales <StorageEngine extends IStorageEngine> {
    private storage:StorageEngine;
    constructor(storage:StorageEngine) {
        this.storage = storage;
    };
    public getSumScale():number {
        let scale:number = 0;
        let productsLength:number = this.storage.getCount();
        for(let i:number=0; i<productsLength; i++) {
            let item:Product = this.storage.getItem(i);
            scale+=item.getScale();
        };
        return scale;
    };
    public getNameList():string[] {
        let nameList:string[] = [];
        let productsLength:number = this.storage.getCount();
        
        for(let i:number=0; i<productsLength; i++) {
            let item:Product = this.storage.getItem(i);
            nameList.push(item.getName());
        };
        return nameList;
    };
    public addItem(item:Product):void {
        this.storage.addItem(item);
    };
    public getItem(index:number):Product {
        return this.storage.getItem(index);
    };
    public getCount():number {
        return this.storage.getCount();
    };
}
class Product {
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
    public addItem(item:Product):void {
        this.items.push(item);
    };
    public getItem(index:number):Product {
        return this.items[index];
    };
    public getCount():number {
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
            localStorage.setItem('products', JSON.stringify(this.items));
        }
        
    };
    public addItem(item:Product):void {
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
    public getItem(index:number):Product {
        let locArray = JSON.parse(localStorage.getItem('products'));
        let product:Product = new Product(locArray[index].name, locArray[index].scale);
        return product;
    };
    public getCount():number {
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
