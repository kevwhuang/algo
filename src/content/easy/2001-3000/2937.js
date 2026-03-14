// 2937 - Make Three Strings Equal

function findMinimumOperations(s1, s2, s3) {
    let len = 0;
    const bound = Math.min(s1.length, s2.length, s3.length);
    for (let i = 0; i < bound; i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) len++;
        else break;
    }
    return len ? s1.length + s2.length + s3.length - 3 * len : -1;
}
