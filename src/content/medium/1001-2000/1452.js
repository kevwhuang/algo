// 1452 - People Whose List of Favorite Companies Is Not a Subset of Another List

function peopleIndexes(favoriteCompanies) {
    for (let i = 0; i < favoriteCompanies.length; i++) {
        favoriteCompanies[i].sort();
    }
    const res = [];
    for (let i = 0; i < favoriteCompanies.length; i++) {
        let unique = true;
        const company1 = favoriteCompanies[i];
        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i === j) continue;
            const company2 = favoriteCompanies[j];
            if (company1.length > company2.length) continue;
            let p1 = 0, p2 = 0;
            while (p1 < company1.length && p2 < company2.length) {
                if (company1[p1] === company2[p2++]) p1++;
            }
            if (p1 < company1.length) continue;
            unique = false;
            break;
        }
        if (unique) res.push(i);
    }
    return res;
}
