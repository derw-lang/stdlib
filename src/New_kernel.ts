export function makeNew(constructor: any, args: any[]): any {
    return new constructor(...args);
}

export function makeNewByName(constructorName: any, args: any[]): any {
    const constructor: any = (globalThis as any)[constructorName];

    if (typeof constructor === "undefined") {
        console.error(
            `Failed to find constructor ${constructorName} in global namespace.`
        );
    }

    return new constructor(...args);
}
