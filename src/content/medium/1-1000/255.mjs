// 255 - Verify Preorder Sequence in Binary Search Tree

function verifyPreorder(preorder) {
    let min = 0, i = -1, j = -1;
    while (++i < preorder.length) {
        while (~j && preorder[i] > preorder[j]) min = preorder[j--];
        if (min > preorder[i]) return false;
        preorder[++j] = preorder[i];
    }
    return true;
}
