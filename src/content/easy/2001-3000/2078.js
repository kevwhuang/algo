// 2078 - Two Furthest Houses With Different Colors

function maxDistance(colors) {
    const len = colors.length;
    let i = len - 1;
    while (i) if (colors[i--] !== colors[0]) break;
    let j = 0;
    while (j < len - 1) if (colors[j++] !== colors.at(-1)) break;
    return Math.max(i + 1, len - j);
}
