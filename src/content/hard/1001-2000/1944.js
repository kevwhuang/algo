// 1944 - Number of Visible People in a Queue

function canSeePersonsCount(heights) {
    const res = new Uint32Array(heights.length);
    const S = [];
    for (let i = 0; i < heights.length; i++) {
        while (S.length && heights[S.at(-1)] < heights[i]) res[S.pop()]++;
        if (S.length) res[S.at(-1)]++;
        S.push(i);
    }
    return res;
}
