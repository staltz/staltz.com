"use strict";
var core_1 = require('../core');
var empty = {};
var DropRepeatsOperator = (function () {
    function DropRepeatsOperator(fn, ins) {
        this.fn = fn;
        this.ins = ins;
        this.out = null;
        this.v = empty;
    }
    DropRepeatsOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    DropRepeatsOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = null;
        this.v = empty;
    };
    DropRepeatsOperator.prototype.isEq = function (x, y) {
        return this.fn ? this.fn(x, y) : x === y;
    };
    DropRepeatsOperator.prototype._n = function (t) {
        var v = this.v;
        if (v === empty || !this.isEq(t, v)) {
            this.out._n(t);
        }
        this.v = t;
    };
    DropRepeatsOperator.prototype._e = function (err) {
        this.out._e(err);
    };
    DropRepeatsOperator.prototype._c = function () {
        this.out._c();
    };
    return DropRepeatsOperator;
}());
exports.DropRepeatsOperator = DropRepeatsOperator;
function dropRepeats(isEqual) {
    if (isEqual === void 0) { isEqual = null; }
    return function dropRepeatsOperator(ins) {
        return new core_1.Stream(new DropRepeatsOperator(isEqual, ins));
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dropRepeats;
//# sourceMappingURL=dropRepeats.js.map