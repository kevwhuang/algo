// 1118 - Number of Days in a Month

function numberOfDays(year, month) {
    let days = [4, 6, 9, 11].includes(month) ? 30 : 31;
    if (month !== 2) return days;
    days = 28;
    if (![1700, 1800, 1900, 2100].includes(year) && year % 4 === 0) days++;
    return days;
}
