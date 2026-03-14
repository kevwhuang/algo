// 881 - Boats to Save People

function numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0, l = 0, r = people.length - 1;
    while (l <= r) {
        if (people[l] + people[r] <= limit) l++;
        boats++, r--;
    }
    return boats;
}
