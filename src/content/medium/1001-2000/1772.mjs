// 1772 - Sort Features by Popularity

function sortFeatures(features, responses) {
    const map = new Map();
    for (let i = 0; i < features.length; i++) {
        map.set(features[i], 0);
    }
    for (let i = 0; i < responses.length; i++) {
        for (const word of new Set(responses[i].split(' '))) {
            if (map.has(word)) map.set(word, map.get(word) + 1);
        }
    }
    return features.sort((a, b) => map.get(b) - map.get(a));
}
