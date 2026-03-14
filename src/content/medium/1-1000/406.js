// 406 - Queue Reconstruction by Height

function reconstructQueue(people) {
    people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    const queue = [];
    for (let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
}
