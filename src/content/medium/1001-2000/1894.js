// 1894 - Find the Student That Will Replace the Chalk

function chalkReplacer(chalk, k) {
    k %= chalk.reduce((s, e) => s + e);
    for (let i = 0; i < chalk.length; i++) {
        k -= chalk[i];
        if (k < 0) return i;
    }
}
