// 10029 - Get Next Right Sibling

export function getNextRightSibling(targetNode) {
    if (!targetNode) return null;
    let root = targetNode;
    while (root.parentElement) root = root.parentElement;
    let Q = [root];
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            if (node === targetNode) return i < Q.length - 1 ? Q[i + 1] : null;
            for (const e of node.children) {
                if (e.nodeType === 1) N.push(e);
            }
        }
        Q = N;
    }
}
