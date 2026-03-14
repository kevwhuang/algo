// 1103 - Distribute Candies to People

function distributeCandies(candies, num_people) {
    const res = new Uint32Array(num_people);
    let acc = 1;
    while (true) {
        for (let i = 0; i < num_people; acc++, i++) {
            if (acc > candies) res[i] += candies;
            if (acc > candies) return res;
            res[i] += acc, candies -= acc;
        }
    }
}
