// 10010 - Delete Nodes With Text

export function deleteNodesWithText(node, searchText) {
    const fn = node => node.textContent.includes(searchText);
    const arr = [];
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, fn);
    while (walker.nextNode()) arr.push(walker.currentNode.parentNode);
    arr.forEach(e => e.remove());
}
