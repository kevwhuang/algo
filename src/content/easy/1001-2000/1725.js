// 1725 - Number of Rectangles That Can Form the Largest Square

function countGoodRectangles(rectangles) {
    let res = 0, max = 1;
    for (let i = 0; i < rectangles.length; i++) {
        const min = rectangles[i].reduce((s, e) => Math.min(e, s));
        if (min > max) res = 1, max = min;
        else if (min === max) res++;
    }
    return res;
}
