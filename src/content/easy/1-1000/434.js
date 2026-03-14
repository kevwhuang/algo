// 434 - Number of Segments in a String

function countSegments(s) {
    return s.match(/\S+/g)?.length ?? 0;
}
