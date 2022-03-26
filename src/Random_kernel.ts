export function kernelShuffle<a>(xs: a[]): a[] {
    const ys = [...xs];
    let currentIndex = ys.length;

    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [ys[currentIndex], ys[randomIndex]] = [
            ys[randomIndex],
            ys[currentIndex],
        ];
    }

    return ys;
}

export function kernelRandomInt(lower: number, upper: number): number {
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

export function kernelChoice<a>(n: number, xs: a[]): a[] {
    const shuffled = [...xs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}
