// 10017 - Mutation Observer

export function observeMutations(node, callback) {
    const obj = {
        attributes: true,
        attributeOldValue: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
    };
    const obs = new MutationObserver(e => e.forEach(callback));
    obs.observe(node, obj);
    return obs;
}
