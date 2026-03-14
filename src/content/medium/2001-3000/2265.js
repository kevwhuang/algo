// 2265 - Count Nodes Equal to Average of Subtree

function averageOfSubtree(root) {
    function dfs(node) {
        if (!node) return [0, 0];
        const [leftCount, leftSum] = dfs(node.left);
        const [rightCount, rightSum] = dfs(node.right);
        const curCount = leftCount + rightCount + 1;
        const curSum = leftSum + rightSum + node.val;
        if (node.val === Math.floor(curSum / curCount)) nodes++;
        return [curCount, curSum];
    }
    let nodes = 0;
    dfs(root);
    return nodes;
}
