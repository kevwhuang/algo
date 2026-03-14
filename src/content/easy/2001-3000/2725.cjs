// 2725 - Interval Cancellation

function cancellable(fn, args, t) {
    fn(...args);
    const key = setInterval(() => fn(...args), t);
    return () => clearInterval(key);
}
