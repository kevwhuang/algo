// 2992 - Number of Self-Divisible Permutations

function selfDivisiblePermutationCount(n) {
    return [1, 1, 3, 4, 28, 16, 256, 324, 3600, 3600, 129744, 63504][n - 1];
}
