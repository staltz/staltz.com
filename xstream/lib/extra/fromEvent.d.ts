import { Stream, InternalProducer, InternalListener } from '../core';
export declare class DOMEventProducer implements InternalProducer<Event> {
    private node;
    private eventType;
    private useCapture;
    private listener;
    constructor(node: EventTarget, eventType: string, useCapture: boolean);
    _start(out: InternalListener<Event>): void;
    _stop(): void;
}
export default function fromEvent(node: EventTarget, eventType: string, useCapture?: boolean): Stream<Event>;
