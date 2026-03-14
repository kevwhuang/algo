// 331 - Verify Preorder Serialization of a Binary Tree

function isValidSerialization(preorder) {
    preorder = preorder.split(',');
    let available = 1;
    for (let i = 0; i < preorder.length; i++) {
        if (available === 0) return false;
        if (preorder[i] === '#') available--;
        else available++;
    }
    return available === 0;
}
