// 2305 - Fair Distribution of Cookies

function distributeCookies(cookies, k) {
    function backtrack(i) {
        if (i === cookies.length) return min = Math.min(Math.max(...arr), min);
        for (let j = 0; j < k; j++) {
            arr[j] += cookies[i];
            backtrack(i + 1);
            arr[j] -= cookies[i];
            if (arr[j] === 0 || arr[j] >= min) return;
        }
    }
    let min = Infinity;
    const arr = new Array(k).fill(0);
    backtrack(0);
    return min;
}
