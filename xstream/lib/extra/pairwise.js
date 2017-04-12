"use strict";
var core_1 = require('../core');
var PairwiseOperator = (function () {
    function PairwiseOperator(ins) {
        this.ins = ins;
        this.val = null;
        this.has = false;
        this.out = null;
    }
    PairwiseOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    PairwiseOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.has = false;
        this.out = null;
        this.val = null;
    };
    PairwiseOperator.prototype._n = function (t) {
        if (this.has) {
            this.out._n([this.val, t]);
        }
        this.val = t;
        this.has = true;
    };
    PairwiseOperator.prototype._e = function (err) {
        this.out._e(err);
    };
    PairwiseOperator.prototype._c = function () {
        this.out._c();
    };
    return PairwiseOperator;
}());
function pairwise() {
    return function pairwiseOperator(ins) {
        return new core_1.Stream(new PairwiseOperator(ins));
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pairwise;
//# sourceMappingURL=pairwise.js.map