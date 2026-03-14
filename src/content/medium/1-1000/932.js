// 932 - Beautiful Array

function beautifulArray(n) {
    function insert(d) {
        for (let i = 0; i < arr.length; i++) {
            const next = 2 * arr[i] + d;
            if (next <= n) nextArr.push(next);
        }
    }
    let arr = [1], nextArr;
    while (arr.length < n) {
        nextArr = [];
        insert(-1);
        insert(0);
        arr = nextArr;
    }
    return arr;
}
