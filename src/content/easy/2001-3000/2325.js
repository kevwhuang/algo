// 2325 - Decode the Message

function decodeMessage(key, message) {
    const map = new Map([[' ', ' ']]);
    for (let i = 0, code = 97; i < key.length && code < 123; i++) {
        if (map.has(key[i])) continue;
        map.set(key[i], String.fromCharCode(code++));
    }
    let res = '';
    for (let i = 0; i < message.length; i++) {
        res += map.get(message[i]);
    }
    return res;
}
