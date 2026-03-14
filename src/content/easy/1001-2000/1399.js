// 1399 - Count Largest Group

function countLargestGroup(n) {
    const map = new Map();
    let maxSum = 1, maxGroups = [];
    for (let i = 1; i <= n; i++) {
        let num = i, sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        map.set(sum, map.get(sum) + 1 || 1);
        if (map.get(sum) === maxSum) {
            maxGroups.push(i);
        } else if (map.get(sum) > maxSum) {
            maxSum++;
            maxGroups = [i];
        }
    }
    return maxGroups.length;
}
