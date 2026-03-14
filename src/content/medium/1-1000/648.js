// 648 - Replace Words

function replaceWords(dictionary, sentence) {
    const trie = new Trie();
    for (let i = 0; i < dictionary.length; i++) {
        trie.insert(dictionary[i]);
    }
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        const index = trie.findIndex(sentence[i]);
        if (index === -1) continue;
        sentence[i] = sentence[i].slice(0, index + 1);
    }
    return sentence.join(' ');
}

class Trie {
    constructor() {
        this.children = {};
    }
    findIndex(word) {
        let node = this.children;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node)) break;
            if (node[char].isWord) return i;
            node = node[char];
        }
        return -1;
    }
    insert(word) {
        let node = this.children;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node)) node[char] = {};
            node = node[char];
        }
        node.isWord = true;
    }
}
