// 825 - Friends of Appropriate Ages

function numFriendRequests(ages) {
    const bucket = new Array(121).fill(0);
    for (let i = 0; i < ages.length; i++) {
        bucket[ages[i]]++;
    }
    let requests = 0, prefix = 0;
    for (let age = 1; age < 121; age++) {
        if (age >= 15 && bucket[age]) {
            const people = prefix - bucket[(.5 * age >> 0) + 7];
            requests += bucket[age] * people;
            requests += bucket[age] * (bucket[age] - 1);
        }
        prefix += bucket[age];
        bucket[age] = prefix;
    }
    return requests;
}
