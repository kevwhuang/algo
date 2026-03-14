// 1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance

function findTheCity(n, edges, distanceThreshold) {
    const mapper = () => new Array(n).fill(Infinity);
    const fw = Array.from({ length: n }, mapper);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        fw[u][v] = fw[v][u] = edges[i][2];
    }
    for (let w = 0; w < n; w++) {
        fw[w][w] = 0;
        for (let u = 0; u < n; u++) {
            for (let v = 0; v < n; v++) {
                fw[u][v] = Math.min(fw[u][w] + fw[w][v], fw[u][v]);
            }
        }
    }
    let city, min = Infinity;
    for (let r = n - 1; ~r; r--) {
        let count = 0;
        for (let c = 0; c < n; c++) {
            if (fw[r][c] <= distanceThreshold) count++;
        }
        if (count >= min) continue;
        city = r;
        min = count;
    }
    return city;
}
