export type Task<a> = {
    promise: Promise<a>;
};

export function runTask<a>(task: Task<a>): void {
    task.promise.then();
}

export function asTask<a>(fn: () => a): Task<a> {
    return {
        promise: new Promise((resolve, reject) => {
            resolve(fn());
        }),
    };
}

export function andThen<a, b>(
    taskGenerator: (arg: a) => Task<b>,
    task: Task<a>
): Task<b> {
    return {
        promise: new Promise((resolve, reject) => {
            task.promise.then((value: a) => {
                taskGenerator(value).promise.then(resolve, reject);
            });
        }),
    };
}

export function map<a, b>(fn: (arg: a) => b, task: Task<a>): Task<b> {
    return {
        promise: new Promise((resolve, reject) => {
            task.promise.then((val) => {
                resolve(fn(val));
            });
        }),
    };
}

export function after<b>(fn: (a?: any) => b, time: number): Task<b> {
    return {
        promise: new Promise((resolve, reject) => {
            setTimeout(() => resolve(fn()), time);
        }),
    };
}
