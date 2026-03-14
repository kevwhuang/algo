// 3340 - Check Balanced String

function isBalanced(num) {
    let even = 0, odd = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2) odd += Number(num[i]);
        else even += Number(num[i]);
    }
    return even === odd;
}
