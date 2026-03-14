// 2217 - Find Palindrome With Fixed Length

function kthPalindrome(queries, intLength) {
    const digits = (intLength + 1) / 2 >> 0;
    const base = 10 ** (digits - 1);
    const bound = 10 ** digits - base;
    for (let i = 0; i < queries.length; i++) {
        if (queries[i] > bound) queries[i] = -1;
        else {
            let palindrome = base + queries[i] - 1;
            let reflection = palindrome;
            if (intLength & 1) reflection = reflection / 10 >> 0;
            while (reflection) {
                palindrome = 10 * palindrome + reflection % 10;
                reflection = reflection / 10 >> 0;
            }
            queries[i] = palindrome;
        }
    }
    return queries;
}
