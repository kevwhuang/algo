// 1195 - Fizz Buzz Multithreaded

class FizzBuzz {
    private int n;
    private int cur = 1;
    public FizzBuzz(int n) {
        this.n = n;
    }
    public synchronized void fizz(Runnable printFizz) throws InterruptedException {
        while (cur <= n) {
            if (cur % 3 != 0 || cur % 5 == 0) {
                wait();
                continue;
            }
            printFizz.run();
            cur++;
            notifyAll();
        }
    }
    public synchronized void buzz(Runnable printBuzz) throws InterruptedException {
        while (cur <= n) {
            if (cur % 3 == 0 || cur % 5 != 0) {
                wait();
                continue;
            }
            printBuzz.run();
            cur++;
            notifyAll();
        }
    }
    public synchronized void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        while (cur <= n) {
            if (cur % 15 != 0) {
                wait();
                continue;
            }
            printFizzBuzz.run();
            cur++;
            notifyAll();
        }
    }
    public synchronized void number(IntConsumer printNumber) throws InterruptedException {
        while (cur <= n) {
            if (cur % 3 == 0 || cur % 5 == 0) {
                wait();
                continue;
            }
            printNumber.accept(cur);
            cur++;
            notifyAll();
        }
    }
}
