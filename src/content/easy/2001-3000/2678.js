// 2678 - Number of Senior Citizens

function countSeniors(details) {
    return details.reduce((s, e) => Number(e[11] + e[12]) > 60 ? s + 1 : s, 0);
}
