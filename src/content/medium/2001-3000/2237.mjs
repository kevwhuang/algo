// 2237 - Count Positions on Street With Required Brightness

function meetRequirement(n, lights, requirement) {
    const street = new Int32Array(n);
    for (let i = 0; i < lights.length; i++) {
        const pos = lights[i][0], d = lights[i][1];
        street[Math.max(0, pos - d)]++;
        street[Math.min(n, pos + d + 1)]--;
    }
    let count = 0, acc = 0;
    for (let i = 0; i < n; i++) {
        acc += street[i];
        if (acc >= requirement[i]) count++;
    }
    return count;
}
