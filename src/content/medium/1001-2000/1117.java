// 1117 - Building H2O

import java.util.concurrent.*;

class H2O {
    Semaphore a, b;
    public H2O() {
        a = new Semaphore(2);
        b = new Semaphore(0);
    }
    public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {
        a.acquire();
        releaseHydrogen.run();
        b.release();
    }
    public void oxygen(Runnable releaseOxygen) throws InterruptedException {
        b.acquire(2);
        releaseOxygen.run();
        a.release(2);
    }
}
