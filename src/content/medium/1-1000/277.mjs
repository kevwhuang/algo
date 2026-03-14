// 277 - Find the Celebrity

function solution(knows) {
    function find(n) {
        let candidate = 0;
        for (let i = 1; i < n; i++) {
            if (knows(candidate, i)) candidate = i;
        }
        for (let i = 0; i < n; i++) {
            if (candidate === i) continue;
            if (knows(candidate, i)) return -1;
            if (!knows(i, candidate)) return -1;
        }
        return candidate;
    }
    return find;
}
