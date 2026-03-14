// 844 - Backspace String Compare

function backspaceCompare(s, t) {
    const arr1 = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === '#' ? arr1.pop() : arr1.push(s[i]);
    }
    const arr2 = [];
    for (let i = 0; i < t.length; i++) {
        t[i] === '#' ? arr2.pop() : arr2.push(t[i]);
    }
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
