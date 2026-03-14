// 2525 - Categorize Box According to Criteria

function categorizeBox(length, width, height, mass) {
    let isBulky = length >= 1e4 || width >= 1e4 || height >= 1e4;
    isBulky ||= length * width * height >= 1e9;
    const isHeavy = mass >= 1e2;
    if (isBulky && isHeavy) return 'Both';
    else if (isBulky && !isHeavy) return 'Bulky';
    else if (!isBulky && isHeavy) return 'Heavy';
    return 'Neither';
}
