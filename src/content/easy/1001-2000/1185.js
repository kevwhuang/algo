// 1185 - Day of the Week

function dayOfTheWeek(day, month, year) {
    const dict = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
    dict.push('Thursday', 'Friday', 'Saturday');
    return dict[new Date(year, month - 1, day).getDay()];
}
