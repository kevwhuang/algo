// 10009 - Add to Sorted List

export function addToSortedList(node, text) {
    const li = document.createElement('li');
    li.textContent = text;
    const n = node.children.length;
    if (n === 0) return node.appendChild(li);
    for (let i = 0; i < n; i++) {
        const cur = node.children[i].textContent;
        if (cur > text) return node.children[i].previousSibling.after(li);
        if (cur === text) return node.children[i].after(li);
    }
    return node.lastChild.after(li);
}
