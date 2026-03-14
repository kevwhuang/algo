// 1268 - Search Suggestions System

function suggestedProducts(products, searchWord) {
    products.sort();
    const res = new Array(searchWord.length);
    let l = 0, r = products.length - 1;
    for (let i = 0; i < searchWord.length; i++) {
        const char = searchWord[i];
        while (products[l]?.charAt(i) < char) l++;
        while (products[r]?.charAt(i) > char) r--;
        const arr = [];
        for (let j = 0; j < 3 && l + j <= r; j++) {
            arr.push(products[l + j]);
        }
        res[i] = arr;
    }
    return res;
}
