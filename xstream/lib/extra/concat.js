"use strict";
var core_1 = require('../core');
var ConcatProducer = (function () {
    function ConcatProducer(streams) {
        this.streams = streams;
        this.out = null;
        this.i = 0;
    }
    ConcatProducer.prototype._start = function (out) {
        this.out = out;
        this.streams[this.i]._add(this);
    };
    ConcatProducer.prototype._stop = function () {
        var streams = this.streams;
        if (this.i < streams.length) {
            streams[this.i]._remove(this);
        }
        this.i = 0;
        this.out = null;
    };
    ConcatProducer.prototype._n = function (t) {
        this.out._n(t);
    };
    ConcatProducer.prototype._e = function (err) {
        this.out._e(err);
    };
    ConcatProducer.prototype._c = function () {
        var streams = this.streams;
        streams[this.i]._remove(this);
        if (++this.i < streams.length) {
            streams[this.i]._add(this);
        }
        else {
            this.out._c();
        }
    };
    return ConcatProducer;
}());
function concat() {
    var streams = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        streams[_i - 0] = arguments[_i];
    }
    return new core_1.Stream(new ConcatProducer(streams));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = concat;
//# sourceMappingURL=concat.js.map