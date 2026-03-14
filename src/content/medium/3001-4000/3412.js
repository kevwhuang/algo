// 3412 - Find Mirror Score of a String

function calculateScore(s) {
    let res = 0;
    const S = Array.from({ length: 26 }, () => []);
    for (let i = 0; i < s.length; i++) {
        const a = s.charCodeAt(i) - 97, b = 25 - a;
        if (S[b].length) res += i - S[b].pop();
        else S[a].push(i);
    }
    return res;
}
