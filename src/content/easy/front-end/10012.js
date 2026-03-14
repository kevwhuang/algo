// 10012 - DOM Content Loaded

export function onDomContentLoaded(callback) {
    if (document.readyState === 'complete') callback();
    else if (document.readyState === 'interactive') callback();
    else document.addEventListener('DOMContentLoaded', callback);
}
