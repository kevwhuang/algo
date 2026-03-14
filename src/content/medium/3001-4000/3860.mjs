// 3860 - Unique Email Groups

function uniqueEmailGroups(emails) {
    const set = new Set();
    for (let i = 0; i < emails.length; i++) {
        let s = '';
        const t = emails[i];
        for (let j = 0; t[j] !== '+' && t[j] !== '@'; j++) {
            if (t[j] !== '.') s += t[j];
        }
        set.add(s.concat(t.slice(t.lastIndexOf('@'))).toLowerCase());
    }
    return set.size;
}
