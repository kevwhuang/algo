// 2776 - Convert Callback Based Function to Promise Based Function

function promisify(fn) {
    function res() {
        return new Promise((res, rej) => {
            fn((e, err) => err ? rej(err) : res(e), ...arguments);
        });
    }
    return res;
}
