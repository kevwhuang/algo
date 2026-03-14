// 1737 - Change Minimum Characters to Satisfy One of Three Conditions

function minCharacters(a, b) {
    const bucket1 = new Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
        bucket1[a.charCodeAt(i) - 97]++;
    }
    const bucket2 = new Array(26).fill(0);
    for (let i = 0; i < b.length; i++) {
        bucket2[b.charCodeAt(i) - 97]++;
    }
    const max1 = Math.max(...bucket1);
    const max2 = Math.max(...bucket2);
    let min = a.length + b.length - max1 - max2;
    let pre1 = 0, post1 = bucket1.reduce((s, e) => s + e);
    let pre2 = 0, post2 = bucket2.reduce((s, e) => s + e);
    for (let i = 0; i < 25; i++) {
        pre1 += bucket1[i];
        post1 -= bucket1[i];
        pre2 += bucket2[i];
        post2 -= bucket2[i];
        min = Math.min(pre1 + post2, pre2 + post1, min);
    }
    return min;
}
