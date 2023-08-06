
export const CreateParams = (params: object = {}): string => {
    let count: number = 0;
    const length: number = Object.keys(params).length;
    let complete: string = '';

    for (let [key, value] of Object.entries(params)) {
        complete += key + '=' + value;
        count++;
        
        if (count < length) {
            complete += '&';
        }
    }

    return complete;
}