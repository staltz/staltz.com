import { Stream } from '../core';
export default function pairwise<T>(): (ins: Stream<T>) => Stream<[T, T]>;
