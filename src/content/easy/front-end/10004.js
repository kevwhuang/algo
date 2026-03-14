// 10004 - Simple Query Selector All

export function querySelectorAll(selector) {
    switch (selector[0]) {
        case '#': return [document.getElementById(selector.slice(1))];
        case '.': return document.getElementsByClassName(selector.slice(1));
        default: return document.getElementsByTagName(selector);
    }
}
