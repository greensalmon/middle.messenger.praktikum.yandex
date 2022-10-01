import { range } from './range';

export function rangeRight(start: number, end: number, step: number) {
	return range(start, end, step, true);
}
