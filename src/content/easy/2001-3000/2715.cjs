// 2715 - Timeout Cancellation

function cancellable(fn, args, t) {
    const key = setTimeout(() => fn(...args), t);
    return () => clearTimeout(key);
}
