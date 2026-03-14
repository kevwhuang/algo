// 1379 - Find a Corresponding Node of a Binary Tree in a Clone of That Tree

function getTargetCopy(original, cloned, target) {
    if (!original) return;
    if (original === target) return cloned;
    return getTargetCopy(original.left, cloned.left, target)
        || getTargetCopy(original.right, cloned.right, target);
}
