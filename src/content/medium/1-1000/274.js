// 274 - H-Index

function hIndex(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    while (h < citations[h]) h++;
    return h;
}
