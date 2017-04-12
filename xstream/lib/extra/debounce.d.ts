import { Stream } from '../core';
export default function debounce<T>(period: number): (ins: Stream<T>) => Stream<T>;
