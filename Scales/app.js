var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArray = [];
    }
    Scales.prototype.add = function (product) {
        this.productArray.push(product);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var num = this.productArray.reduce(function (sum, item) {
            return sum + item.getScale();
        }, 0);
        return num;
    };
    ;
    Scales.prototype.getNameList = function () {
        var list = this.productArray.map(function (item) {
            return item.getName();
        });
        return list;
    };
    return Scales;
}());
;
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super.call(this) || this;
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
}(Scales));
;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.scale = _scale;
        _this.name = _name;
        return _this;
    }
    ;
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.scale = _scale;
        _this.name = _name;
        return _this;
    }
    ;
    return Tomato;
}(Product));
;
var scales = new Scales();
var apple1 = new Apple('Большое яблоко', 100);
var apple2 = new Apple('Маленькое яблоко', 50);
var tomato1 = new Apple('Большой томат', 80);
var tomato2 = new Apple('Маленький томат', 30);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map