// 2162 - Minimum Cost to Set Cooking Time

function minCostSetTime(startAt, moveCost, pushCost, targetSeconds) {
    function calculate(str) {
        let i = 0;
        while (str[i] === '0') i++;
        let cost = (str.length - i) * pushCost;
        if (str[i++] !== String(startAt)) cost += moveCost;
        while (i < str.length) {
            if (str[i - 1] !== str[i++]) cost += moveCost;
        }
        return cost;
    }
    let min = Math.floor(targetSeconds / 60);
    let sec = targetSeconds - 60 * min;
    if (min > 99) return calculate(String(min - 1) + String(sec + 60));
    const cost = calculate(String(min) + String(sec).padStart(2, '0'));
    if (min === 0 || sec > 39) return cost;
    return Math.min(cost, calculate(String(min - 1) + String(sec + 60)));
}
