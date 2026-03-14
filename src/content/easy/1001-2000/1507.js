// 1507 - Reformat Date

function reformatDate(date) {
    const dict = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    dict.push('Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    let [day, month, year] = date.split(' ');
    day = day.length === 4 ? day[0] + day[1] : '0' + day[0];
    month = String(dict.indexOf(month) + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
