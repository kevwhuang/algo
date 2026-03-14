// 2410 - Maximum Matching of Players With Trainers

function matchPlayersAndTrainers(players, trainers) {
    const arr1 = new Uint32Array(players).sort();
    const arr2 = new Uint32Array(trainers).sort();
    let res = 0, i = 0, j = -1;
    while (i < arr1.length && ++j < arr2.length) {
        if (arr1[i] <= arr2[j]) res++, i++;
    }
    return res;
}
