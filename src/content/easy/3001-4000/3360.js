// 3360 - Stone Removal Game

function canAliceWin(n) {
    let cur = 10;
    while (n >= cur) n -= cur--;
    return cur & 1;
}
