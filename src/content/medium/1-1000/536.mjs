// 536 - Construct Binary Tree From String

function str2tree(s) {
    function construct() {
        const start = i;
        while (s[i] === '-' || '0' <= s[i] && s[i] <= '9') i++;
        if (start === i) return null;
        const node = new TreeNode(s.slice(start, i));
        if (s[i] === '(') {
            i++;
            node.left = construct();
            i++;
        }
        if (s[i] === '(') {
            i++;
            node.right = construct();
            i++;
        }
        return node;
    }
    if (s.length === 0) return null;
    let i = 0;
    return construct();
}
