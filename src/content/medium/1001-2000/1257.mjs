// 1257 - Smallest Common Region

function findSmallestRegion(regions, region1, region2) {
    const map = new Map();
    for (let i = 0; i < regions.length; i++) {
        const arr = regions[i];
        for (let j = 1; j < arr.length; j++) {
            map.set(arr[j], arr[0]);
        }
    }
    const set = new Set([region1]);
    while (map.has(region1)) {
        set.add(map.get(region1));
        region1 = map.get(region1);
    }
    while (true) {
        if (set.has(region2)) return region2;
        region2 = map.get(region2);
    }
}
