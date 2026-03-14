// 10006 - Get Elements by Attribute

export function getElementsByAttribute(attributeValue) {
    function dfs(node) {
        if (node.getAttribute(key) === val) res.push(node);
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i]);
        }
    }
    const res = [], [key, val] = attributeValue.split('=');
    dfs(document.body);
    return res;
}
