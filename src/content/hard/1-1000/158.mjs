// 158 - Read N Characters Given Read4 II - Call Multiple Times

function solution(read4) {
    function res(cur, tgt) {
        while (true) {
            while (arr.length && cur.length < tgt) cur.push(arr.shift());
            if (cur.length === tgt) return;
            read4(arr);
            if (arr.length === 0) return;
        }
    }
    const arr = [];
    return res;
}
