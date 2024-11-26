function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskQueue {
    constructor(delay) {
        this.delay = delay;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    run() {
        let taskChain = Promise.resolve();

        this.tasks.forEach((task) => {
            taskChain = taskChain
                .then(() => task())
                .then((result) => {
                    console.log(result);
                    return delay(this.delay);
                });
        });

        return taskChain.then(() => {
            return "Усі завдання завершено";
        });
    }
}

const queue = new TaskQueue(1000); // затримка між завданнями — 1 секунда

queue.addTask(() => Promise.resolve("Task 1 виконано"));
queue.addTask(() => Promise.resolve("Task 2 виконано"));
queue.addTask(() => Promise.resolve("Task 3 виконано"));

queue.run().then((message) => {
    console.log(message); // Усі завдання завершено
});
