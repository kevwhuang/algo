// 2866 - Beautiful Towers II

function maximumSumOfHeights(maxHeights) {
    const arr = maxHeights, len = arr.length;
    const left = new Array(len);
    let stack = [];
    for (let i = 0; i < len; i++) {
        const cur = arr[i];
        while (stack.length) {
            if (arr[stack[stack.length - 1]] < cur) break;
            stack.pop();
        }
        if (stack.length) {
            const last = stack[stack.length - 1];
            left[i] = left[last] + cur * (i - last);
        } else {
            left[i] = cur * (i + 1);
        }
        stack.push(i);
    }
    stack = [];
    let max = 0;
    const right = new Array(len);
    for (let i = len - 1; ~i; i--) {
        const cur = arr[i];
        while (stack.length) {
            if (arr[stack[stack.length - 1]] < cur) break;
            stack.pop();
        }
        if (stack.length) {
            const last = stack[stack.length - 1];
            right[i] = right[last] + cur * (last - i);
        } else {
            right[i] = cur * (len - i);
        }
        stack.push(i);
        max = Math.max(left[i] + right[i] - cur, max);
    }
    return max;
}
