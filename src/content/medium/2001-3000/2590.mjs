// 2590 - Design a To-Do List

class TodoList {
    constructor() {
        this.data = new Map();
        this.taskId = 1;
    }
    addTask(userId, taskDescription, dueDate, tags) {
        if (!this.data.has(userId)) this.data.set(userId, new Map());
        const user = this.data.get(userId);
        user.set(this.taskId, [taskDescription, dueDate, new Set(tags)]);
        return this.taskId++;
    }
    completeTask(userId, taskId) {
        const user = this.data.get(userId);
        if (user) user.delete(taskId);
    }
    getAllTasks(userId) {
        const user = this.data.get(userId);
        if (!user) return [];
        const tasks = [];
        for (const taskId of user.keys()) {
            const task = user.get(taskId);
            tasks.push([task[0], task[1]]);
        }
        return tasks.sort((a, b) => a[1] - b[1]).map(e => e[0]);
    }
    getTasksForTag(userId, tag) {
        const user = this.data.get(userId);
        if (!user) return [];
        const tasks = [];
        for (const taskId of user.keys()) {
            const task = user.get(taskId);
            if (!task[2].has(tag)) continue;
            tasks.push([task[0], task[1]]);
        }
        return tasks.sort((a, b) => a[1] - b[1]).map(e => e[0]);
    }
}
