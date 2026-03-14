// 165 - Compare Version Numbers

function compareVersion(version1, version2) {
    version1 = version1.split('.').map(Number);
    version2 = version2.split('.').map(Number);
    while (version1.length < version2.length) version1.push(0);
    while (version1.length > version2.length) version2.push(0);
    for (let i = 0; i < version1.length; i++) {
        if (version1[i] < version2[i]) return -1;
        if (version1[i] > version2[i]) return 1;
    }
    return 0;
}
