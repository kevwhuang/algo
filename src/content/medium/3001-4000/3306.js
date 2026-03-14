// 3306 - Count of Substrings Containing Every Vowel and K Consonants II

function countOfSubstrings(word, k) {
    function count() {
        let res = 0, a = 0, e = 0, i = 0, o = 0, u = 0, acc = 0;
        for (let l = 0, r = 0; r < word.length; r++) {
            switch (word[r]) {
                case 'a': a++; break;
                case 'e': e++; break;
                case 'i': i++; break;
                case 'o': o++; break;
                case 'u': u++; break;
                default: acc++;
            }
            while (a && e && i && o && u && acc > k) {
                switch (word[l++]) {
                    case 'a': a--; break;
                    case 'e': e--; break;
                    case 'i': i--; break;
                    case 'o': o--; break;
                    case 'u': u--; break;
                    default: acc--;
                }
            }
            res -= l;
        }
        return res;
    }
    return count() - count(--k);
}
