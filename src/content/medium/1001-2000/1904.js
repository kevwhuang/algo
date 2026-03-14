// 1904 - The Number of Full Rounds You Have Played

function numberOfRounds(loginTime, logoutTime) {
    const convert = s => 60 * s.slice(0, 2) + +s.slice(3);
    const first = convert(loginTime);
    let last = convert(logoutTime);
    if (first < last && last - first < 15) return 0;
    if (first > last) last += 1440;
    return Math.floor(last / 15) - Math.ceil(first / 15);
}
