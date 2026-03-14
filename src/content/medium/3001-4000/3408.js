// 3408 - Design Task Manager

class TaskManager {
    constructor(tasks) {
        this.fn = (a, b) => b[2] - a[2] || b[1] - a[1];
        this.map = new Map();
        this.pq = new PriorityQueue({ compare: this.fn });
        tasks.forEach(e => this.map.set(e[1], e) & this.pq.enqueue(e));
    }
    add(userId, taskId, priority) {
        this.map.set(taskId, [userId, taskId, priority]);
        this.pq.enqueue(this.map.get(taskId));
    }
    edit(taskId, newPriority) {
        this.add(this.map.get(taskId)[0], taskId, newPriority);
    }
    execTop() {
        while (this.pq.size()) {
            const arr1 = this.pq.dequeue(), arr2 = this.map.get(arr1[1]);
            if (!arr2 || arr1[0] !== arr2[0] || arr1[2] !== arr2[2]) continue;
            return this.rmv(arr1[1]) || arr1[0];
        }
        return -1;
    }
    rmv(taskId) {
        this.map.set(taskId, null);
    }
}
