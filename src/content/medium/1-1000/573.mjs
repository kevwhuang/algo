// 573 - Squirrel Simulation

function minDistance(height, width, tree, squirrel, nuts) {
    const getDistance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    let total = 0, first = -Infinity;
    for (let i = 0; i < nuts.length; i++) {
        const treeToNut = getDistance(tree, nuts[i]);
        const squirrelToNut = getDistance(squirrel, nuts[i]);
        total += 2 * treeToNut;
        first = Math.max(treeToNut - squirrelToNut, first);
    }
    return total - first;
}
