var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.setItem = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.getItem = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clearItem = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
var stringStorage = new LocalStorage();
stringStorage.setItem("name", "juyeon");
console.log(stringStorage.getItem("name"));
stringStorage.clearItem("name");
console.log(stringStorage.getItem("name"));
stringStorage.clear();
// Generic 타입을 사용하면 서로 다른 타입을 물려줄 수 있다. polymorphism 구현 가능!
var booleanString = new LocalStorage();
booleanString.setItem("above 30", false);
var CustomGeolocation = /** @class */ (function () {
    function CustomGeolocation() {
    }
    CustomGeolocation.prototype.getCurrentPosition = function (successFn, errorFn, optionsObj) {
        if (errorFn) { }
        ;
        if (optionsObj) { }
        ;
    };
    CustomGeolocation.prototype.watchPosition = function (success, error, options) {
        if (error) { }
        ;
        if (options) { }
        ;
        return "random string";
    };
    CustomGeolocation.prototype.clearWatch = function (id) {
        if (id) { }
        ;
    };
    return CustomGeolocation;
}());
var geolocation = new CustomGeolocation();
var tempFn = function () { };
var tempOption = {
    maximumAge: 10,
    timeout: 10,
    enableHighAccuracy: false
};
// 다른 개수의 파라미터 전달 가능. Overloading 구현!
geolocation.getCurrentPosition(tempFn);
geolocation.getCurrentPosition(tempFn, tempFn);
geolocation.getCurrentPosition(tempFn, tempFn, tempOption);
