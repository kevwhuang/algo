// 3200 - Maximum Height of a Triangle

function maxHeightOfTriangle(red, blue) {
    function check(a, b) {
        let res = 1, cur = true;
        while (true) {
            if (cur) {
                if (a < res) break;
                a -= res++, cur = false;
            } else {
                if (b < res) break;
                b -= res++, cur = true;
            }
        }
        return res - 1;
    }
    return Math.max(check(red, blue), check(blue, red));
}
