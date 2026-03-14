// 1813 - Sentence Similarity III

function areSentencesSimilar(sentence1, sentence2) {
    let arr1 = sentence1.split(' ');
    let arr2 = sentence2.split(' ');
    if (arr1.length > arr2.length) [arr1, arr2] = [arr2, arr1];
    let l1 = 0, r1 = arr1.length - 1;
    let l2 = 0, r2 = arr2.length - 1;
    while (l1 <= r1) {
        if (arr1[l1] === arr2[l2]) l1++, l2++;
        else if (arr1[r1] === arr2[r2]) r1--, r2--;
        else return false;
    }
    return true;
}
