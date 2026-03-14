// 1424 - Diagonal Traverse II

function findDiagonalOrder(nums) {
    const res = [];
    let queue1 = [nums[0]], queue2 = [0], i = 1;
    while (queue1.length) {
        const nextQueue1 = [], nextQueue2 = [];
        if (i < nums.length) {
            nextQueue1.push(nums[i++]);
            nextQueue2.push(0);
        }
        for (let j = 0; j < queue1.length; j++) {
            let index = queue2[j];
            res.push(queue1[j][index]);
            if (++index === queue1[j].length) continue;
            nextQueue1.push(queue1[j]);
            nextQueue2.push(index);
        }
        queue1 = nextQueue1, queue2 = nextQueue2;
    }
    return res;
}
