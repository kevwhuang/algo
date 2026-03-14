// 2665 - Counter II

function createCounter(init) {
    let res = init;
    return {
        decrement: () => --res,
        increment: () => ++res,
        reset: () => res = init,
    };
}
