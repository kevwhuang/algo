// 911 - Online Election

class TopVotedCandidate {
    constructor(persons, times) {
        this.persons = persons;
        this.times = times;
        this.#init(persons);
    }
    q(t) {
        let l = 0, r = this.persons.length;
        while (l < r) {
            const m = l + r >> 1;
            if (this.times[m] <= t) l = m + 1;
            else r = m;
        }
        return this.persons[l - 1];
    }
    #init(persons) {
        const map = new Map();
        let leader, max = 0;
        for (let i = 0; i < persons.length; i++) {
            const person = persons[i];
            const votes = (map.get(person) ?? 0) + 1;
            map.set(person, votes);
            if (votes >= max) leader = person, max = votes;
            persons[i] = leader;
        }
    }
}
