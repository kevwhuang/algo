// 1226 - The Dining Philosophers

class DiningPhilosophers {
    Semaphore s = new Semaphore(1);
    public void wantsToEat(int philosopher,
        Runnable pickLeftFork,
        Runnable pickRightFork,
        Runnable eat,
        Runnable putLeftFork,
        Runnable putRightFork
    ) throws InterruptedException {
        s.acquire();
        pickLeftFork.run();
        pickRightFork.run();
        eat.run();
        putLeftFork.run();
        putRightFork.run();
        s.release();
    }
}
