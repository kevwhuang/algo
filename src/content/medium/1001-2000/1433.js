// 1433 - Check If a String Can Break Another String

function checkIfCanBreak(s1, s2) {
    s1 = s1.split('').sort();
    s2 = s2.split('').sort();
    const len = s1.length;
    let degree1 = 0, degree2 = 0;
    for (let i = 0; i < len; i++) {
        if (s1[i] >= s2[i]) degree1++;
        if (s1[i] <= s2[i]) degree2--;
    }
    return degree1 === len || -degree2 === len;
}
