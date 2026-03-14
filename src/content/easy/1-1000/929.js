// 929 - Unique Email Addresses

function numUniqueEmails(emails) {
    const unique = new Set();
    for (let i = 0; i < emails.length; i++) {
        const s = emails[i];
        const posAt = s.indexOf('@');
        let local = s.slice(0, posAt).replaceAll('.', '');
        const posPlus = local.indexOf('+');
        if (posPlus !== -1) local = local.slice(0, posPlus);
        unique.add(local + s.slice(posAt));
    }
    return unique.size;
}
