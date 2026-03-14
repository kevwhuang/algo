// 3690 - Split and Merge Array Transformation

function minSplitMerge(nums1, nums2) {
    function fn(cur) {
        let key = 0, k = 1, i = 0;
        while (i < n) key += k * cur[i++], k *= 10;
        return key;
    }
    const map = new Map(), n = nums1.length;
    for (let next = 1, i = 0; i < n; i++) {
        if (!map.has(nums1[i])) map.set(nums1[i], next++);
    }
    for (let i = 0; i < n; i++) {
        nums1[i] = map.get(nums1[i]);
        nums2[i] = map.get(nums2[i]);
    }
    if (fn(nums1) === fn(nums2)) return 0;
    const seen = new Set([fn(nums1)]), tgt = fn(nums2);
    let acc = 1, Q = [nums1];
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const cur = Q[i];
            for (let l = 0; l < n; l++) {
                for (let r = l + 1; r <= n; r++) {
                    const arr = [...cur.slice(0, l), ...cur.slice(r)];
                    for (let j = 0; j < arr.length; j++) {
                        const next = arr.slice(0, j);
                        next.push(...cur.slice(l, r), ...arr.slice(j));
                        const key = fn(next);
                        if (key === tgt) return acc;
                        if (seen.has(key)) continue;
                        seen.add(key);
                        N.push(next);
                    }
                }
            }
        }
        acc++, Q = N;
    }
}
