
export function range(start, end, step) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    
    if (step === undefined) {
        step = start < end ? 1 : -1;
    }
    
    const result = [];
    
    let index = -1;
    let length = (end - start) / (step || 1);
    
    while (length--) {
        result[++index] = start;
        start += step;
    }

    return result;
}