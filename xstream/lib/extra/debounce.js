"use strict";
var core_1 = require('../core');
var DebounceOperator = (function () {
    function DebounceOperator(dt, ins) {
        this.dt = dt;
        this.ins = ins;
        this.out = null;
        this.value = null;
        this.id = null;
    }
    DebounceOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    DebounceOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = null;
        this.value = null;
        this.id = null;
    };
    DebounceOperator.prototype.clearTimer = function () {
        var id = this.id;
        if (id !== null) {
            clearTimeout(id);
        }
        this.id = null;
    };
    DebounceOperator.prototype._n = function (t) {
        var _this = this;
        this.value = t;
        this.clearTimer();
        this.id = setTimeout(function () { return _this.out._n(_this.value); }, this.dt);
    };
    DebounceOperator.prototype._e = function (err) {
        this.clearTimer();
        this.out._e(err);
    };
    DebounceOperator.prototype._c = function () {
        this.clearTimer();
        this.out._c();
    };
    return DebounceOperator;
}());
function debounce(period) {
    return function debounceOperator(ins) {
        return new core_1.Stream(new DebounceOperator(period, ins));
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = debounce;
//# sourceMappingURL=debounce.js.map