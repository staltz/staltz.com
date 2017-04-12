import { Promise } from '~es6-promise/dist/es6-promise';
export interface InternalListener<T> {
    _n: (v: T) => void;
    _e: (err: any) => void;
    _c: () => void;
}
export interface InternalProducer<T> {
    _start: (listener: InternalListener<T>) => void;
    _stop: () => void;
}
export interface Operator<T, R> extends InternalProducer<R>, InternalListener<T> {
    _start: (out: Stream<R>) => void;
    _stop: () => void;
    _n: (v: T) => void;
    _e: (err: any) => void;
    _c: () => void;
}
export interface Producer<T> {
    start: (listener: Listener<T>) => void;
    stop: () => void;
}
export interface Listener<T> {
    next: (x: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
export interface CombineProjectFunction {
    <T1, T2, R>(v1: T1, v2: T2): R;
    <T1, T2, T3, R>(v1: T1, v2: T2, v3: T3): R;
    <T1, T2, T3, T4, R>(v1: T1, v2: T2, v3: T3, v4: T4): R;
    <T1, T2, T3, T4, T5, R>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
    <T1, T2, T3, T4, T5, T6, R>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
    <R>(...values: Array<any>): R;
}
export interface CombineFactorySignature {
    <T1, T2, R>(project: (t1: T1, t2: T2) => R, stream2: Stream<T2>): Stream<R>;
    <T1, T2, T3, R>(project: (t1: T1, t2: T2, t3: T3) => R, stream2: Stream<T2>, stream3: Stream<T3>): Stream<R>;
    <T1, T2, T3, T4, R>(project: (t1: T1, t2: T2, t3: T3, t4: T4) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>): Stream<R>;
    <T1, T2, T3, T4, T5, R>(project: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>, stream5: Stream<T5>): Stream<R>;
    <R>(project: (...args: Array<any>) => R, ...streams: Array<Stream<any>>): Stream<R>;
}
export interface CombineInstanceSignature<T> {
    <T2, R>(project: (t1: T, t2: T2) => R, stream2: Stream<T2>): Stream<R>;
    <T2, T3, R>(project: (t1: T, t2: T2, t3: T3) => R, stream2: Stream<T2>, stream3: Stream<T3>): Stream<R>;
    <T2, T3, T4, R>(project: (t1: T, t2: T2, t3: T3, t4: T4) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>): Stream<R>;
    <T2, T3, T4, T5, R>(project: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>, stream5: Stream<T5>): Stream<R>;
    <R>(project: (...args: Array<any>) => R, ...streams: Array<Stream<any>>): Stream<R>;
}
export declare class FlattenConcOperator<T> implements Operator<Stream<T>, T> {
    ins: Stream<Stream<T>>;
    private active;
    private out;
    constructor(ins: Stream<Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    less(): void;
    _n(s: Stream<T>): void;
    _e(err: any): void;
    _c(): void;
}
export declare class FlattenOperator<T> implements Operator<Stream<T>, T> {
    ins: Stream<Stream<T>>;
    curr: Stream<T>;
    private inner;
    private open;
    private out;
    constructor(ins: Stream<Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    cut(): void;
    less(): void;
    _n(s: Stream<T>): void;
    _e(err: any): void;
    _c(): void;
}
export declare class Stream<T> implements InternalListener<T> {
    private _ils;
    private _stopID;
    private _prod;
    constructor(producer: InternalProducer<T>);
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
    _x(): void;
    /**
     * Adds a Listener to the Stream.
     *
     * @param {Listener<T>} listener
     */
    addListener(listener: Listener<T>): void;
    /**
     * Removes a Listener from the Stream, assuming the Listener was added to it.
     *
     * @param {Listener<T>} listener
     */
    removeListener(listener: Listener<T>): void;
    _add(il: InternalListener<T>): void;
    _remove(il: InternalListener<T>): void;
    /**
     * Creates a new Stream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {Stream}
     */
    static create<T>(producer?: Producer<T>): Stream<T>;
    /**
     * Creates a new MemoryStream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {MemoryStream}
     */
    static createWithMemory<T>(producer?: Producer<T>): MemoryStream<T>;
    /**
     * Creates a Stream that does nothing when started. It never emits any event.
     *
     * @factory true
     * @return {Stream}
     */
    static never(): Stream<any>;
    static empty(): Stream<any>;
    static throw(err: any): Stream<any>;
    static of<T>(...items: Array<T>): Stream<T>;
    static fromArray<T>(array: Array<T>): Stream<T>;
    static fromPromise<T>(promise: Promise<T>): Stream<T>;
    static periodic(period: number): Stream<number>;
    static merge<T>(...streams: Array<Stream<T>>): Stream<T>;
    static combine: CombineFactorySignature;
    /**
     * Transform each event from the input Stream through a `project` function, to
     * get a Stream that emits those transformed events.
     *
     * Marble diagram:
     * ```text
     * --1---3--5-----7------
     *    map(i => i * 10)
     * --10--30-50----70-----
     * ```
     *
     * @param {Function} project A function of type `(t: T) => U` that takes event
     * `t` of type `T` from the input Stream and produces an event of type `U`, to
     * be emitted on the output Stream.
     * @return {Stream}
     */
    map<U>(project: (t: T) => U): Stream<U>;
    /**
     * It's like `map`, but transforms each input event to always the same
     * constant value on the output Stream.
     *
     * Marble diagram:
     * ```text
     * --1---3--5-----7-----
     *       mapTo(10)
     * --10--10-10----10----
     * ```
     *
     * @param projectedValue A value to emit on the output Stream whenever the
     * input Stream emits any value.
     * @return {Stream}
     */
    mapTo<U>(projectedValue: U): Stream<U>;
    filter(predicate: (t: T) => boolean): Stream<T>;
    take(amount: number): Stream<T>;
    drop(amount: number): Stream<T>;
    last(): Stream<T>;
    startWith(x: T): Stream<T>;
    endWhen(other: Stream<any>): Stream<T>;
    fold<R>(accumulate: (acc: R, t: T) => R, init: R): Stream<R>;
    replaceError(replace: (err: any) => Stream<T>): Stream<T>;
    flatten<R, T extends Stream<R>>(): T;
    flattenConcurrently<R, T extends Stream<R>>(): T;
    merge(other: Stream<T>): Stream<T>;
    combine: CombineInstanceSignature<T>;
    compose(operator: (stream: Stream<T>) => Stream<any>): Stream<any>;
    remember(): Stream<T>;
    imitate(other: Stream<T>): void;
    debug(spy?: (t: T) => void): Stream<T>;
    /**
     * Forces the Stream to emit the given value to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param value The "next" value you want to broadcast to all listeners of
     * this Stream.
     */
    shamefullySendNext(value: T): void;
    /**
     * Forces the Stream to emit the given error to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param {any} error The error you want to broadcast to all the listeners of
     * this Stream.
     */
    shamefullySendError(error: any): void;
    /**
     * Forces the Stream to emit the "completed" event to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     */
    shamefullySendComplete(): void;
}
export declare class MemoryStream<T> extends Stream<T> {
    private _val;
    private _has;
    constructor(producer: InternalProducer<T>);
    _n(x: T): void;
    _add(listener: InternalListener<T>): void;
}
export default Stream;
