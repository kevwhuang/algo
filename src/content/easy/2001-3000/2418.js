// 2418 - Sort the People

function sortPeople(names, heights) {
    for (let i = 0; i < names.length; i++) {
        names[i] = [names[i], heights[i]];
    }
    return names.sort((a, b) => b[1] - a[1]).map(e => e[0]);
}
