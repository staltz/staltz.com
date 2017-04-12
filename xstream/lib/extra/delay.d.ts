import { Stream } from '../core';
export default function delay<T>(period: number): (ins: Stream<T>) => Stream<T>;
