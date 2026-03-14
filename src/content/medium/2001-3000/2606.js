// 2606 - Find the Substring With Maximum Cost

function maximumCostSubstring(s, chars, vals) {
    const costs = {};
    for (let code = 97; code <= 122; code++) {
        costs[String.fromCharCode(code)] = code - 96;
    }
    for (let i = 0; i < chars.length; i++) {
        costs[chars[i]] = vals[i];
    }
    let max = 0, running = 0;
    for (let i = 0; i < s.length; i++) {
        running = Math.max(costs[s[i]], costs[s[i]] + running);
        max = Math.max(running, max);
    }
    return max;
}
