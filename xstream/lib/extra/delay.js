"use strict";
var core_1 = require('../core');
var DelayOperator = (function () {
    function DelayOperator(dt, ins) {
        this.dt = dt;
        this.ins = ins;
        this.out = null;
    }
    DelayOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    DelayOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = null;
    };
    DelayOperator.prototype._n = function (t) {
        var self = this;
        var id = setInterval(function () {
            self.out._n(t);
            clearInterval(id);
        }, this.dt);
    };
    DelayOperator.prototype._e = function (err) {
        var self = this;
        var id = setInterval(function () {
            self.out._e(err);
            clearInterval(id);
        }, this.dt);
    };
    DelayOperator.prototype._c = function () {
        var self = this;
        var id = setInterval(function () {
            self.out._c();
            clearInterval(id);
        }, this.dt);
    };
    return DelayOperator;
}());
function delay(period) {
    return function delayOperator(ins) {
        return new core_1.Stream(new DelayOperator(period, ins));
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = delay;
//# sourceMappingURL=delay.js.map