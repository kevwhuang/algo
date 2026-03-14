// 2629 - Function Composition

function compose(functions) {
    function fn(res) {
        for (let i = functions.length - 1; ~i; i--) {
            res = functions[i](res);
        }
        return res;
    }
    return fn;
}
