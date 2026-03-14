// 1115 - Print FooBar Alternately

class FooBar {
    private int n;
    private boolean flag = true;
    public FooBar(int n) {
        this.n = n;
    }
    public synchronized void foo(Runnable printFoo) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            if (!flag) wait();
            printFoo.run();
            flag = false;
            notify();
        }
    }
    public synchronized void bar(Runnable printBar) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            if (flag) wait();
            printBar.run();
            flag = true;
            notify();
        }
    }
}
