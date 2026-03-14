// 3751 - Total Waviness of Numbers in Range I

function totalWaviness(num1, num2) {
    function init() {
        dict = new Uint32Array(100001);
        for (let i = 100; i <= 100000; i++) {
            let acc = 0, cur1 = i / 100 >> 0, cur2 = i / 10 >> 0, c = i % 10;
            while (cur1) {
                const a = cur1 % 10, b = cur2 % 10;
                if (b > a && b > c || b < a && b < c) acc++;
                cur1 = cur1 / 10 >> 0, cur2 = cur2 / 10 >> 0, c = b;
            }
            dict[i] = dict[i - 1] + acc;
        }
    }
    if (!this.dict) init();
    return dict[num2] - dict[num1 - 1];
}
