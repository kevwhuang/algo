// 2288 - Apply Discount to Prices

function discountPrices(sentence, discount) {
    sentence = sentence.split(' ');
    discount = 1 - discount / 100;
    const re = /^\$\d+$/;
    for (let i = 0; i < sentence.length; i++) {
        if (!re.test(sentence[i])) continue;
        sentence[i] = '$' + (sentence[i].slice(1) * discount).toFixed(2);
    }
    return sentence.join(' ');
}
