// 556 - Next Greater Element III

function nextGreaterElement(n) {
    function swap(i, j) {
        const temp = n[i];
        n[i] = n[j];
        n[j] = temp;
    }
    n = n.toString().split('');
    for (let i = n.length - 2; i >= 0; i--) {
        if (n[i] >= n[i + 1]) continue;
        let j = n.length - 1;
        while (n[i] >= n[j]) j--;
        swap(i, j);
        j = n.length - 1;
        while (i < j) swap(++i, j--);
        n = Number(n.join(''));
        return n <= 2147483647 ? n : -1;
    }
    return -1;
}
