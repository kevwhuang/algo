// 3133 - Minimum Array End

function minEnd(n, x) {
    n = (n - 1).toString(2);
    x = x.toString(2).split('');
    let i = n.length - 1, j = x.length;
    while (~i && ~--j) if (x[j] === '0') x[j] = n[i--];
    return parseInt(n.slice(0, i + 1) + x.join(''), 2);
}
