/** Node: node for a linked list. */
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained-together nodes. */
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    /** addLast(val): add new value to the end of the list. */
    addLast(val) {
      const newNode = new Node(val);
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    /** removeFirst(): remove the node from the start of the list and return its value. */
    removeFirst() {
      if (this.size === 0) {
        throw new Error("List is empty");
      }
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
      return removedNode.val;
    }
  
    /** getFirst(): return the value of the first node in the list. */
    getFirst() {
      if (this.size === 0) {
        return null;
      }
      return this.head.val;
    }
  
    /** isEmpty(): return true if the list is empty, otherwise false */
    isEmpty() {
      return this.size === 0;
    }
  }
  
  /** Queue: uses LinkedList to manage the queue. */
  class Queue {
    constructor() {
      this.list = new LinkedList();
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
    enqueue(val) {
      this.list.addLast(val);
      return undefined;
    }
  
    /** dequeue(): remove the node from the start of the queue and return its value. Should throw an error if the queue is empty. */
    dequeue() {
      return this.list.removeFirst();
    }
  
    /** peek(): return the value of the first node in the queue. */
    peek() {
      return this.list.getFirst();
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false */
    isEmpty() {
      return this.list.isEmpty();
    }
  }
  
  module.exports = Queue;