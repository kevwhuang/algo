// 201 - Bitwise AND of Numbers Range

function rangeBitwiseAnd(left, right) {
    const shifts = Math.log2(left ^ right);
    return left >> shifts << shifts;
}
