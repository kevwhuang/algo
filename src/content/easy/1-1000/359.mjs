// 359 - Logger Rate Limiter

class Logger {
    constructor() {
        this.log = new Map();
    }
    shouldPrintMessage(timestamp, message) {
        if (this.log.get(message) > timestamp) return false;
        this.log.set(message, timestamp + 10);
        return true;
    }
}
