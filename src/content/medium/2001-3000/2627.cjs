// 2627 - Debounce

function debounce(fn, t) {
    function res() {
        clearTimeout(key);
        key = setTimeout(() => fn(...arguments), t);
    }
    let key;
    return res;
}
