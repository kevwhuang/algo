// 1773 - Count Items Matching a Rule

function countMatches(items, ruleKey, ruleValue) {
    let res = 0, cur = 0;
    if (ruleKey === 'color') cur = 1;
    else if (ruleKey === 'name') cur = 2;
    for (let i = 0; i < items.length; i++) {
        if (items[i][cur] === ruleValue) res++;
    }
    return res;
}
