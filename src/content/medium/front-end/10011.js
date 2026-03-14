// 10011 - Text Highlighter

export function highlightText(node, text) {
    const fn = node => node.textContent.toLowerCase().includes(text);
    if (!text) return;
    text = text.toLowerCase();
    const arr = [];
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, fn);
    while (walker.nextNode()) arr.push(walker.currentNode.parentNode);
    const reg = new RegExp(`(${text})`, 'ig');
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = arr[i].innerHTML.replace(reg, '<mark>$1</mark>');
    }
}
