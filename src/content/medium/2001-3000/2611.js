// 2611 - Mice and Cheese

function miceAndCheese(reward1, reward2, k) {
    let points = 0;
    const arr = new Array(reward1.length);
    for (let i = 0; i < reward1.length; i++) {
        points += reward2[i];
        arr[i] = reward1[i] - reward2[i];
    }
    arr.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        points += arr[i];
    }
    return points;
}
