import { Operator, Stream } from '../core';
export declare class DropRepeatsOperator<T> implements Operator<T, T> {
    fn: (x: T, y: T) => boolean;
    ins: Stream<T>;
    private out;
    private v;
    constructor(fn: (x: T, y: T) => boolean, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    isEq(x: T, y: T): boolean;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export default function dropRepeats<T>(isEqual?: (x: T, y: T) => boolean): (ins: Stream<T>) => Stream<T>;
