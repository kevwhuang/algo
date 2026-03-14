// 2358 - Maximum Number of Groups Entering a Competition

function maximumGroups(grades) {
    let groups = 1, remaining = grades.length;
    while (remaining > 2 * groups) remaining -= groups++;
    return groups;
}
