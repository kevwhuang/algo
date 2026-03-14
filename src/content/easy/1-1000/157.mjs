// 157 - Read N Characters Given Read4

function solution(read4) {
    function readN(buf, n) {
        while (true) {
            const buf4 = [], len = read4(buf4);
            for (let i = 0; n > buf.length && i < buf4.length; i++) {
                buf.push(buf4[i]);
            }
            if (len !== 4) return;
        }
    }
    return readN;
}
