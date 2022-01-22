import { Just, Maybe, Nothing } from "./Maybe";

export function kernelUpdate(
    a: any,
    fn: (maybeValue: Maybe<any>) => Maybe<any>,
    dict: any
): any {
    let updated: Maybe<any> = Nothing({});
    if (Object.keys(dict).indexOf(a) === -1) {
        updated = fn(Nothing({}));
    } else {
        updated = fn(Just({ value: dict[a] }));
    }

    if (updated.kind === "Nothing") {
        const newDict: any = {};

        for (const key of Object.keys(newDict)) {
            if (key !== a) {
                newDict[key] = dict[key];
            }
        }
        return newDict;
    }

    const newDict = { ...dict };
    newDict[a] = updated.value;

    return newDict;
}

export function kernelFromList(items: { key: any; value: any }[]): any {
    const obj: any = {};

    for (const item of items) {
        obj[item.key] = item.value;
    }

    return obj;
}

export function kernelToList(dict: any): { key: any; value: any }[] {
    const items = [];

    for (const key of Object.keys(dict)) {
        items.push({ key, value: dict[key] });
    }

    return items;
}
