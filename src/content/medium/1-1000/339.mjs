// 339 - Nested List Weight Sum

function depthSum(nestedList) {
    function dfs(list, depth) {
        for (let i = 0, cur; i < list.length; i++) {
            cur = list[i];
            if (cur.isInteger()) sum += cur.getInteger() * depth;
            else dfs(cur.getList(), depth + 1);
        }
    }
    let sum = 0;
    dfs(nestedList, 1);
    return sum;
}
