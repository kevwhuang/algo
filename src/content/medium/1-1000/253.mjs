// 253 - Meeting Rooms II

function minMeetingRooms(intervals) {
    const n = intervals.length;
    const arr1 = new Uint32Array(n), arr2 = new Uint32Array(n);
    intervals.forEach((e, i) => (arr1[i] = e[0], arr2[i] = e[1]));
    arr1.sort();
    arr2.sort();
    let i = 0, j = 0;
    while (i < n) if (arr1[i++] >= arr2[j]) j++;
    return n - j;
}
