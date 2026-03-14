// 3577 - Count the Number of Computer Unlocking Permutations

function countPermutations(complexity) {
    function init() {
        dict = new Uint32Array(100001), dict[2] = 1;
        for (let i = 2; i < 100000; i++) {
            dict[i + 1] = i * dict[i] % 1000000007;
        }
    }
    if (!this.dict) init();
    const tgt = complexity[0];
    for (let i = 1; i < complexity.length; i++) {
        if (complexity[i] <= tgt) return 0;
    }
    return dict[complexity.length];
}
