import { Just, Maybe, Nothing } from "./Maybe";

export function parseInt(str: string, radix: number): Maybe<number> {
    try {
        return Just({ value: globalThis.parseInt(str, radix) });
    } catch (e) {
        return Nothing({});
    }
}

export function parseFloat(str: string): Maybe<number> {
    try {
        return Just({ value: globalThis.parseFloat(str) });
    } catch (e) {
        return Nothing({});
    }
}
