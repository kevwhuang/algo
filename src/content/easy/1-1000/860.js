// 860 - Lemonade Change

function lemonadeChange(bills) {
    let change5 = 0, change10 = 0;
    for (let i = 0, cur; i < bills.length; i++) {
        cur = bills[i];
        if (cur === 5) {
            change5++;
        } else if (cur === 10) {
            if (!change5) return false;
            change5--;
            change10++;
        } else {
            if (change10 && change5) {
                change5--;
                change10--;
            } else if (change5 >= 3) {
                change5 -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
