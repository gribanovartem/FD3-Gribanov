;
var Scales = /** @class */ (function () {
    function Scales(storage) {
        this.storage = storage;
    }
    ;
    Scales.prototype.getSumScale = function () {
        var scale = 0;
        var productsLength = this.storage.getCount();
        for (var i = 0; i < productsLength; i++) {
            var item = this.storage.getItem(i);
            scale += item.getScale();
        }
        ;
        return scale;
    };
    ;
    Scales.prototype.getNameList = function () {
        var nameList = [];
        var productsLength = this.storage.getCount();
        for (var i = 0; i < productsLength; i++) {
            var item = this.storage.getItem(i);
            nameList.push(item.getName());
        }
        ;
        return nameList;
    };
    ;
    Scales.prototype.addItem = function (item) {
        this.storage.addItem(item);
    };
    ;
    Scales.prototype.getItem = function (index) {
        return this.storage.getItem(index);
    };
    ;
    Scales.prototype.getCount = function () {
        return this.storage.getCount();
    };
    ;
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.scale = _scale;
        this.name = _name;
    }
    ;
    Product.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ;
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        if (localStorage.getItem('products')) {
            this.items = JSON.parse(localStorage.getItem('products')).map(function (item) {
                return new Product(item.name, item.scale);
            });
        }
        else {
            this.items = [];
            localStorage.setItem('products', JSON.stringify(this.items));
        }
    }
    ;
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var locArray = JSON.parse(localStorage.getItem('products'));
        for (var i = 0; i < locArray.length; i++) {
            if (locArray[i].name === item.getName()) {
                return;
            }
        }
        locArray.push(item);
        this.items.push(item);
        localStorage.setItem('products', JSON.stringify(locArray));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var locArray = JSON.parse(localStorage.getItem('products'));
        var product = new Product(locArray[index].name, locArray[index].scale);
        return product;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var locArray = JSON.parse(localStorage.getItem('products'));
        return locArray.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var scaleArray = new Scales(new ScalesStorageEngineArray());
var scaleLocStorage = new Scales(new ScalesStorageEngineLocalStorage());
var product1 = new Product('Яблоко', 200);
var product2 = new Product('Киви', 100);
var product3 = new Product('Мандарин', 80);
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
//# sourceMappingURL=App.js.map