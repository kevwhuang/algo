// 2201 - Count Artifacts That Can Be Extracted

function digArtifacts(n, artifacts, dig) {
    const obj = {};
    for (let i = 0; i < dig.length; i++) {
        const r = dig[i][0];
        if (!obj[r]) obj[r] = new Set();
        obj[r].add(dig[i][1]);
    }
    let count = 0;
    L: for (let i = 0; i < artifacts.length; i++) {
        for (let r = artifacts[i][0]; r <= artifacts[i][2]; r++) {
            if (!obj[r]) continue L;
            for (let c = artifacts[i][1]; c <= artifacts[i][3]; c++) {
                if (!obj[r].has(c)) continue L;
            }
        }
        count++;
    }
    return count;
}
