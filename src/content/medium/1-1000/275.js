// 275 - H-Index II

function hIndex(citations) {
    citations.reverse();
    let h = 0;
    while (h < citations[h]) h++;
    return h;
}
