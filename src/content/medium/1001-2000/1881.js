// 1881 - Maximum Value After Insertion

function maxValue(n, x) {
    let i = n[0] === '-' ? 1 : 0;
    if (i) while (x >= +n[i]) i++;
    else while (x <= +n[i]) i++;
    return `${n.slice(0, i)}${x}${n.slice(i)}`;
}
