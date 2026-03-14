// 135 - Candy

function candy(ratings) {
    if (!this.arr) arr = new Uint16Array(20000);
    arr[0] = 1;
    const n = ratings.length;
    for (let i = 1; i < n; i++) {
        arr[i] = ratings[i - 1] < ratings[i] ? arr[i - 1] + 1 : 1;
    }
    let res = arr[n - 1];
    for (let i = n - 2; ~i; i--) {
        if (ratings[i] <= ratings[i + 1]) res += arr[i];
        else res += arr[i] = Math.max(arr[i + 1] + 1, arr[i]);
    }
    return res;
}
