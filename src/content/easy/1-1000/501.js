// 501 - Find Mode in Binary Search Tree

function findMode(root) {
    function dfs(cur) {
        if (!cur) return;
        dfs(cur.left);
        cur.val === prev ? count++ : count = 1;
        prev = cur.val;
        count === mode && res.push(cur.val);
        count > mode && (res = [cur.val]) && (mode = count);
        dfs(cur.right);
    }
    let res = [], mode = 0, count, prev;
    dfs(root);
    return res;
}
