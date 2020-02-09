class Scales {
    productArray:IScalable[];
    constructor() {
        this.productArray = [];
    }
    add(product:IScalable):void {
        this.productArray.push(product);
    };
    getSumScale():number {
        let num = this.productArray.reduce((sum:number, item:IScalable)=>{
            return sum + item.getScale();
        }, 0);
        return num;
    };
    getNameList():string[] {
        let list = this.productArray.map((item:IScalable)=>{
            return item.getName();
        })
        return list;
    } 

};

interface IScalable {
    getScale():number;
    getName():string;
}

class Apple implements IScalable {
    scale:number;
    name:string;
    constructor(_name:string, _scale:number) {
        this.scale = _scale;
        this.name = _name;
    };
    getScale():number {
        return this.scale;
    };
    getName():string {
        return this.name;
    };
};
class Tomato implements IScalable {
    scale:number;
    name:string;
    constructor(_name:string, _scale:number) {
        this.scale = _scale;
        this.name = _name;
    };
    getScale():number {
        return this.scale;
    };
    getName():string {
        return this.name;
    };
};

const scales:Scales = new Scales();
const apple1:Apple = new Apple('Большое яблоко', 100);
const apple2:Apple = new Apple('Маленькое яблоко', 50);
const tomato1:Tomato = new Apple('Большой томат', 80);
const tomato2:Tomato = new Apple('Маленький томат', 30);
scales.add(apple1); 
scales.add(apple2); 
scales.add(tomato1); 
scales.add(tomato2); 
console.log(scales.getSumScale());
console.log(scales.getNameList());