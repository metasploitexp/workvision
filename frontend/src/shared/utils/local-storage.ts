
export function get(name: string, isJSON: boolean = false): any {
    return isJSON ? JSON.parse(localStorage.getItem(name) || '') : localStorage.getItem(name);
}

export function set(name: string, value: any, isJSON: boolean = false): void {
    localStorage.setItem(name, isJSON ? JSON.stringify(value) : value);
}

export function remove(name: string): void {
    localStorage.removeItem(name);
}