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
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.scale = _scale;
        this.name = _name;
    }
    ;
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Apple.prototype.getName = function () {
        return this.name;
    };
    ;
    return Apple;
}());
;
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.scale = _scale;
        this.name = _name;
    }
    ;
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    ;
    Tomato.prototype.getName = function () {
        return this.name;
    };
    ;
    return Tomato;
}());
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