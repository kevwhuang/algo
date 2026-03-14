// 2284 - Sender With Largest Word Count

function largestWordCount(messages, senders) {
    const map = new Map();
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        let words = 1;
        for (let j = 0; j < message.length; j++) {
            if (message[j] === ' ') words++;
        }
        words += map.get(senders[i]) ?? 0;
        map.set(senders[i], words);
    }
    let res, max;
    for (const name of map.keys()) {
        const words = map.get(name);
        if (!max || words > max || (words === max && res < name)) {
            res = name;
            max = words;
        }
    }
    return res;
}
