// 3295 - Report Spam Message

function reportSpam(message, bannedWords) {
    bannedWords = new Set(bannedWords);
    for (let i = 0, seen; i < message.length; i++) {
        if (!bannedWords.has(message[i])) continue;
        if (seen) return true;
        seen = true;
    }
    return false;
}
