// 1415 - The Kth Lexicographical String of All Happy Strings of Length N

function getHappyString(n, k) {
    function backtrack(cur) {
        if (count === k) return;
        if (cur.length === n) return (res = cur) && count++;
        if (cur[cur.length - 1] === 'a') {
            backtrack(cur + 'b');
            backtrack(cur + 'c');
        } else if (cur[cur.length - 1] === 'b') {
            backtrack(cur + 'a');
            backtrack(cur + 'c');
        } else {
            backtrack(cur + 'a');
            backtrack(cur + 'b');
        }
    }
    let res, count = 0;
    backtrack('a');
    backtrack('b');
    backtrack('c');
    return count === k ? res : '';
}
