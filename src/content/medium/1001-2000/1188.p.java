// 1188 - Design Bounded Blocking Queue

class BoundedBlockingQueue {
    private int capacity;
    private Queue<Integer> queue;
    public BoundedBlockingQueue(int capacity) {
        this.capacity = capacity;
        queue = new LinkedList<> ();
    }
    public synchronized void enqueue(int element) throws InterruptedException {
        while (queue.size() == capacity) wait();
        queue.add(element);
        notifyAll();
    }
    public synchronized int dequeue() throws InterruptedException {
        while (queue.isEmpty()) wait();
        int removed = queue.remove();
        notifyAll();
        return removed;
    }
    public int size() {
        return queue.size();
    }
}
