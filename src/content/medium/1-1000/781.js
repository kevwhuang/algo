// 781 - Rabbits in Forest

function numRabbits(answers) {
    const obj = {};
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] in obj) obj[answers[i]]++;
        else obj[answers[i]] = 1;
    }
    let rabbits = 0;
    for (let key in obj) {
        rabbits += Math.ceil(obj[key++] / key) * key;
    }
    return rabbits;
}
