import { Just, Maybe, Nothing } from "./Maybe";

export function parseInt(str: string, radix: number): Maybe<number> {
    try {
        const x = globalThis.parseInt(str, radix);
        if (isNaN(x)) {
            return Nothing({});
        } else {
            return Just({ value: x});
        }
    } catch (e) {
        return Nothing({});
    }
}

export function parseFloat(str: string): Maybe<number> {
    try {
        const x = globalThis.parseFloat(str);
        if (isNaN(x)) {
            return Nothing({});
        } else {
            return Just({ value: x});
        }
    } catch (e) {
        return Nothing({});
    }
}
