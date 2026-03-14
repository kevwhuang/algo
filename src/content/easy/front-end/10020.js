// 10020 - Match DOM Content

export function matchDomContent(node) {
    const fn = () => node.textContent = node.getAttribute('data-content') ?? '';
    const obj = { attributes: true, attributeFilter: ['data-content'] };
    new MutationObserver(fn).observe(node, obj);
}
