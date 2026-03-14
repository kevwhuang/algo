// 2353 - Design a Food Rating System

class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.ratings = new Map();
        this.cuisines = new Map();
        this.#init(foods, cuisines, ratings);
    }
    changeRating(food, newRating) {
        const ratings = this.ratings;
        ratings.get(food)[1] = newRating;
        const pq = this.cuisines.get(ratings.get(food)[0]);
        pq.enqueue([food, newRating]);
        while (ratings.get(pq.front()[0])[1] !== pq.front()[1]) pq.dequeue();
    }
    highestRated(cuisine) {
        return this.cuisines.get(cuisine).front()[0];
    }
    #init(foods, cuisines, ratings) {
        const comparator = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i], cuisine = cuisines[i], rating = ratings[i];
            this.ratings.set(food, [cuisine, rating]);
            if (!this.cuisines.has(cuisine)) {
                const pq = new PriorityQueue({ compare: comparator });
                this.cuisines.set(cuisine, pq);
            }
            this.cuisines.get(cuisine).enqueue([food, rating]);
        }
    }
}
