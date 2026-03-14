// 2843 - Count Symmetric Integers

function countSymmetricIntegers(low, high) {
    let count = 0;
    const bound = Math.min(99, high);
    for (let i = low; i <= bound; i++) {
        if (i % 10 === Math.floor(i / 10)) count++;
    }
    for (let i = Math.max(low, 1000); i <= high; i++) {
        const n1 = i % 10;
        let n = Math.floor(i / 10);
        const n2 = n % 10;
        n = Math.floor(n / 10);
        const n3 = n % 10;
        const n4 = Math.floor(n / 10);
        if (n1 + n2 === n3 + n4) count++;
    }
    return count;
}
