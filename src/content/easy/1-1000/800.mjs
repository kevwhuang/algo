// 800 - Similar RGB Color

function similarRGB(color) {
    function findSimilar(col) {
        let similar, min = Infinity;
        for (let i = 0; i < 16; i++) {
            const abs = Math.abs(list[i] - col);
            if (abs >= min) continue;
            similar = list[i];
            min = abs;
        }
        return similar.toString(16).padStart(2, 0);
    }
    const list = [0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66,
        0x77, 0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff];
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5), 16);
    return `#${findSimilar(r)}${findSimilar(g)}${findSimilar(b)}`;
}
