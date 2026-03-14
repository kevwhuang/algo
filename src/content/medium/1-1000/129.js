// 129 - Sum Root to Leaf Numbers

function sumNumbers(root) {
    function dfs(node, num) {
        num = num * 10 + node.val;
        if (!node.left && !node.right) return sum += num;
        node.left && dfs(node.left, num);
        node.right && dfs(node.right, num);
    }
    let sum = 0;
    dfs(root, 0);
    return sum;
}
