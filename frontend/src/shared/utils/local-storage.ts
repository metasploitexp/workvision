
export function get(name: string, isJSON: boolean = false) {
    return isJSON ? JSON.parse(localStorage.getItem(name) || '') : localStorage.getItem(name);
}

export function set(name: string, value: any, isJSON: boolean = false) {
    localStorage.setItem(name, isJSON ? JSON.stringify(value) : value);
}