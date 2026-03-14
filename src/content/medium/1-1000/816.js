// 816 - Ambiguous Coordinates

function ambiguousCoordinates(s) {
    function isValid(str) {
        if (str.length > 1 && str[0] === '0' && str[1] !== '.') return false;
        if (str.includes('.') && str[str.length - 1] === '0') return false;
        return true;
    }
    const coordinates = [];
    for (let i = 2; i < s.length - 1; i++) {
        const left = s.slice(1, i);
        const right = s.slice(i, s.length - 1);
        for (let j = 1; j <= left.length; j++) {
            const leftCoord = left.slice(0, j)
                + (j === left.length ? '' : '.')
                + left.slice(j);
            if (isValid(leftCoord) === false) continue;
            for (let k = 1; k <= right.length; k++) {
                const rightCoord = right.slice(0, k)
                    + (k === right.length ? '' : '.')
                    + right.slice(k);
                if (isValid(rightCoord) === false) continue;
                coordinates.push(`(${leftCoord}, ${rightCoord})`);
            }
        }
    }
    return coordinates;
}
