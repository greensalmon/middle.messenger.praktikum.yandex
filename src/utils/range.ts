
export function range(start: number, end: number, step: number, fromRight: boolean = false) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    
    if (step === undefined) {
        step = start < end ? 1 : -1;
    }
    
    const result: number[] = [];
    
    let index = -1;
    let length = (end - start) / (step || 1);
    
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }

    return result;
}