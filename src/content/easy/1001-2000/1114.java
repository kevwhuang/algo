// 1114 - Print in Order

class Foo {
    private byte acc = 0;
    public synchronized void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        acc++;
        notifyAll();
    }
    public synchronized void second(Runnable printSecond) throws InterruptedException {
        while (acc < 1) wait();
        printSecond.run();
        acc++;
        notifyAll();
    }
    public synchronized void third(Runnable printThird) throws InterruptedException {
        while (acc < 2) wait();
        printThird.run();
    }
}
