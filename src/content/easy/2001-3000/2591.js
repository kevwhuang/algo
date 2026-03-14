// 2591 - Distribute Money to Maximum Children

function distMoney(money, children) {
    if (money < children) return -1;
    for (let i = children; i; i--) {
        if (7 * i + children > money) continue;
        const rem = money - 8 * i;
        if (rem > 0 && i === children) continue;
        if (rem === 4 && children - i === 1) continue;
        return i;
    }
    return 0;
}
