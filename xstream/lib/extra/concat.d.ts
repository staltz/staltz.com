import { Stream } from '../core';
export default function concat<T>(...streams: Array<Stream<T>>): Stream<T>;
