
export function getDataFromLocalStorage(variableName: string, isJSON: boolean = false) {
    const data = localStorage.getItem(variableName);
    if (isJSON && data) {
        return JSON.parse(data);
    }
    return data;
}

export function setDataToLocalStorage(variableName: string, value: any, isJSON: boolean = false) {
    if(isJSON) {
        value = JSON.stringify(value);
    }
    localStorage.setItem(variableName, value);
}