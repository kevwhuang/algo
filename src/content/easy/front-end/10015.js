// 10015 - Add Delegated Event Listener

export function addDelegatedEventListener(eventName, cssSelector, callback) {
    function fn(e) {
        if (e.target.matches(cssSelector)) callback.call(e.target, e.target);
    }
    this.addEventListener(eventName, fn);
}
