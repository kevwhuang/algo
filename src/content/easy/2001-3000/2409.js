// 2409 - Count Days Spent Together

function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const convert = s => cumulativeDays[+(s[0] + s[1]) - 1] + +(s[3] + s[4]);
    const cumulativeDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304];
    cumulativeDays.push(334);
    arriveAlice = convert(arriveAlice);
    leaveAlice = convert(leaveAlice);
    arriveBob = convert(arriveBob);
    leaveBob = convert(leaveBob);
    const arriveOverlap = Math.min(leaveAlice, leaveBob);
    const leaveOverlap = Math.max(arriveAlice, arriveBob);
    const overlap = arriveOverlap - leaveOverlap + 1;
    return overlap < 0 ? 0 : overlap;
}
