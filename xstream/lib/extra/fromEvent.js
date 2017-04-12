"use strict";
var core_1 = require('../core');
var DOMEventProducer = (function () {
    function DOMEventProducer(node, eventType, useCapture) {
        this.node = node;
        this.eventType = eventType;
        this.useCapture = useCapture;
    }
    DOMEventProducer.prototype._start = function (out) {
        this.listener = function (e) { return out._n(e); };
        var _a = this, node = _a.node, eventType = _a.eventType, useCapture = _a.useCapture;
        node.addEventListener(eventType, this.listener, useCapture);
    };
    DOMEventProducer.prototype._stop = function () {
        var _a = this, node = _a.node, eventType = _a.eventType, listener = _a.listener, useCapture = _a.useCapture;
        node.removeEventListener(eventType, listener, useCapture);
        this.listener = null;
    };
    return DOMEventProducer;
}());
exports.DOMEventProducer = DOMEventProducer;
function fromEvent(node, eventType, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    return new core_1.Stream(new DOMEventProducer(node, eventType, useCapture));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fromEvent;
//# sourceMappingURL=fromEvent.js.map