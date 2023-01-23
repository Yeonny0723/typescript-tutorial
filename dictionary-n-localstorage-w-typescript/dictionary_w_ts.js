var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (term, definition) {
        if (!this.words[term]) {
            this.words[term] = definition;
        }
    };
    Dict.prototype.get = function (term) {
        return this.words[term];
    };
    Dict.prototype["delete"] = function (term) {
        delete this.words[term];
    };
    Dict.prototype.update = function (term, newDef) {
        if (this.words[term]) {
            this.words[term] = newDef;
        }
    };
    Dict.prototype.showAll = function () {
        var _this = this;
        Object.keys(this.words).forEach(function (term) {
            return console.log("".concat(term, ": ").concat(_this.words[term]));
        });
    };
    Dict.prototype.count = function () {
        return Object.keys(this.words).length;
    };
    return Dict;
}());
var dictionary = new Dict();
dictionary.add("kimchi", "내가 제일 좋아하는 음식");
dictionary.showAll();
console.log(dictionary.count());
dictionary.update("kimchi", "김치전 원재료");
console.log(dictionary.get("김치"));
dictionary["delete"]("김치");
console.log(dictionary.count());
