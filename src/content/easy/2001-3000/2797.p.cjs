// 2797 - Partial Function With Placeholders

function partial(fn, args) {
    function res() {
        let i = -1, j = 0;
        while (++i < args.length) {
            if (args[i] === '_') args[i] = arguments[j++];
        }
        while (j < arguments.length) args.push(arguments[j++]);
        return fn(...args);
    }
    return res;
}
