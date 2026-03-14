// 2618 - Check If Object Instance of Class

function checkIfInstanceOf(obj, classFunction) {
    if (obj === undefined || obj === null) return false;
    if (typeof classFunction !== 'function') return false;
    return Object(obj) instanceof classFunction;
}
