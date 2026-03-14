// 2514 - Count Anagrams

function countAnagrams(s) {
    function init() {
        dict1 = new BigUint64Array(100001), dict1[0] = 1n;
        for (let i = 1n; i < 100001n; i++) {
            dict1[Number(i)] = (dict1[i - 1n] * i) % 1000000007n;
        }
        dict2 = new BigUint64Array(100001), dict2[100000] = 716327852n;
        for (let i = 99999n; ~i; i--) {
            dict2[Number(i)] = (dict2[i + 1n] * (i + 1n)) % 1000000007n;
        }
    }
    if (!this.dict1) init();
    let res = 1n, i = 0;
    const B = new Uint32Array(26), n = s.length;
    while (i < n) {
        let j = i;
        while (j < n && s[j] !== ' ') B[s.charCodeAt(j++) - 97]++;
        res = res * dict1[j - i] % 1000000007n, i = j + 1, j = 0;
        while (j < 26) res = res * dict2[B[j++]] % 1000000007n;
        B.fill(0);
    }
    return Number(res);
}
