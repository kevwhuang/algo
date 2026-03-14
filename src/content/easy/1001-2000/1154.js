// 1154 - Day of the Year

function dayOfYear(date) {
    let [year, month, day] = date.split('-');
    year = Number(year), month = Number(month) - 1, day = Number(day);
    const leap = Number(year > 1900 && year % 4 === 0 && month > 1);
    const ps = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    return ps[month] + day + leap;
}
