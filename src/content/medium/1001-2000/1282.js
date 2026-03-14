// 1282 - Group the People Given the Group Size They Belong To

function groupThePeople(groupSizes) {
    const groups = [];
    const split = {};
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        split[size] = split[size] ? split[size].concat(i) : [i];
        if (split[size].length === size) {
            groups.push(split[size]);
            delete split[size];
        }
    }
    return groups;
}
