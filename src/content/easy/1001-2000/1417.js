// 1417 - Reformat the String

function reformat(s) {
    let arr1 = [], arr2 = [];
    for (let i = 0; i < s.length; i++) {
        (isNaN(s[i]) ? arr1 : arr2).push(s[i]);
    }
    if (Math.abs(arr1.length - arr2.length) > 1) return '';
    if (arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];
    return arr1.reduce((s, e, i) => s + e + (arr2[i] ?? ''), '');
}
