// 10007 - Get Node Relationship

export function getNodeRelationship(node1, node2) {
    if (node1 === node2) return null;
    if (node1.parentNode === node2) return 'parent';
    if (node2.parentNode === node1) return 'child';
    if (node1.parentNode === node2.parentNode) return 'sibling';
    return null;
}
