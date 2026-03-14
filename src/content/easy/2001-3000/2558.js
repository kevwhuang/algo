// 2558 - Take Gifts From the Richest Pile

function pickGifts(gifts, k) {
    while (k--) {
        let max = 0;
        for (let i = 1; i < gifts.length; i++) {
            if (gifts[i] > gifts[max]) max = i;
        }
        gifts[max] = Math.sqrt(gifts[max]) >> 0;
    }
    return gifts.reduce((s, e) => s + e);
}
