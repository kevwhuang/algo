// 1051 - Height Checker

function heightChecker(heights) {
    let res = 0;
    const arr = heights.toSorted((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== heights[i]) res++;
    }
    return res;
}
