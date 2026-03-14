// 3846 - Total Distance to Type a String Using One Finger

function totalDistance(s) {
    function init() {
        const M = [[16, 22, 4, 17, 19, 24, 20, 8, 14, 15]];
        M[1] = [0, 18, 3, 5, 6, 7, 9, 10, 11, -1];
        M[2] = [25, 23, 2, 21, 1, 13, 12, -1, -1, -1];
        C = Array.from({ length: 26 }, () => new Uint8Array(26));
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 10; y++) {
                const a = M[x][y];
                if (a === -1) continue;
                for (let xx = 0; xx < 3; xx++) {
                    for (let yy = 0; yy < 10; yy++) {
                        const b = M[xx][yy];
                        if (b === -1) continue;
                        C[a][b] = Math.abs(x - xx) + Math.abs(y - yy);
                    }
                }
            }
        }
    }
    if (!this.C) init();
    let res = 0, prev = 0, i = -1;
    while (++i < s.length) {
        const cur = s.charCodeAt(i) - 97;
        res += C[prev][cur], prev = cur;
    }
    return res;
}
