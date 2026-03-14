// 806 - Number of Lines to Write String

function numberOfLines(widths, s) {
    let lines = 1, pixels = 0;
    for (let i = 0; i < s.length; i++) {
        const width = widths[s.charCodeAt(i) - 97];
        if (pixels + width <= 100) {
            pixels += width;
        } else {
            lines++;
            pixels = width;
        }
    }
    return [lines, pixels];
}
