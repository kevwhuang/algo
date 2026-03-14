// 2024 - Maximize the Confusion of an Exam

function maxConsecutiveAnswers(answerKey, k) {
    function check(key) {
        let l = 0, r = 0, rem = k;
        while (r < answerKey.length) {
            if (answerKey[r++] === key) rem--;
            if (rem >= 0) continue;
            if (answerKey[l++] === key) rem++;
        }
        return r - l;
    }
    return Math.max(check('T'), check('F'));
}
