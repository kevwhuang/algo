// 273 - Integer to English Words

function numberToWords(num) {
    function init() {
        dict1 = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen'];
        dict1.push('Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen');
        dict2 = ['One', 'Two', 'Three', 'Four', 'Five'];
        dict2.push('Six', 'Seven', 'Eight', 'Nine');
        dict3 = ['Twenty', 'Thirty', 'Forty', 'Fifty'];
        dict3.push('Sixty', 'Seventy', 'Eighty', 'Ninety');
    }
    function check(cur) {
        if (cur % 100 >= 10 && cur % 100 <= 19) {
            res.push(dict1[cur % 100 - 10]);
            cur = cur / 100 >> 0;
        } else {
            if (cur % 10) res.push(dict2[cur % 10 - 1]);
            cur = cur / 10 >> 0;
            if (cur % 10 >= 2) res.push(dict3[cur % 10 - 2]);
            cur = cur / 10 >> 0;
        }
        if (cur) res.push(`${dict2[cur - 1]} Hundred`);
    }
    if (this.dict1 === undefined) init();
    if (num === 0) return 'Zero';
    const res = [];
    check(num % 1000);
    num = num / 1000 >> 0;
    if (num % 1000) res.push('Thousand');
    if (num) check(num % 1000);
    num = num / 1000 >> 0;
    if (num % 1000) res.push('Million');
    if (num) check(num % 1000);
    num = num / 1000 >> 0;
    if (num % 1000) res.push('Billion');
    if (num) check(num % 1000);
    return res.reverse().join` `;
}
