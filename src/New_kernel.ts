export function makeNew(constructor: any, args: any[]) {
    return new constructor(...args);
}
