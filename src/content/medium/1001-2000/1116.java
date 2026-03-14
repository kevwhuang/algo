// 1116 - Print Zero Even Odd

class ZeroEvenOdd {
    private int n;
    private int cur = 0;
    public ZeroEvenOdd(int n) {
        this.n = n;
    }
    public synchronized void zero(IntConsumer printNumber) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            while (cur != 0) wait();
            printNumber.accept(0);
            cur = i % 2 == 0 ? 1 : 2;
            notifyAll();
        }
    }
    public synchronized void even(IntConsumer printNumber) throws InterruptedException {
        for (int i = 2; i <= n; i += 2) {
            while (cur != 2) wait();
            printNumber.accept(i);
            cur = 0;
            notifyAll();
        }
    }
    public synchronized void odd(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i += 2) {
            while (cur != 1) wait();
            printNumber.accept(i);
            cur = 0;
            notifyAll();
        }
    }
}
