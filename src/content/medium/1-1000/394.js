// 394 - Decode String

function decodeString(s) {
    const replacer = (_, num, char) => char.repeat(num);
    const re = /(\d+)\[([a-z]+)\]/g;
    while (s.includes('[')) s = s.replace(re, replacer);
    return s;
}
