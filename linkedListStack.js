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
  
    /** addFirst(val): add new value to the start of the list. */
    addFirst(val) {
      const newNode = new Node(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    /** removeFirst(): remove the node from the start of the list and return its value. */
    removeFirst() {
      if (this.head === null) throw new Error("List is empty");
      const val = this.head.val;
      this.head = this.head.next;
      if (this.head === null) this.tail = null;
      this.size--;
      return val;
    }
  
    /** getFirst(): return the value of the first node in the list. */
    getFirst() {
      if (this.head === null) throw new Error("List is empty");
      return this.head.val;
    }
  
    /** isEmpty(): return true if the list is empty, otherwise false */
    isEmpty() {
      return this.size === 0;
    }
  }
  
  /** Stack: chained-together nodes where you can
   *  remove from the top or add to the top. */
  class Stack {
    constructor() {
      this.list = new LinkedList();
    }
  
    /** push(val): add new value to end of the stack. Returns undefined. */
    push(val) {
      this.list.addFirst(val);
    }
  
    /** pop(): remove the node from the top of the stack and return its value. Should throw an error if the stack is empty. */
    pop() {
      return this.list.removeFirst();
    }
  
    /** peek(): return the value of the top node in the stack. */
    peek() {
      return this.list.getFirst();
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
    isEmpty() {
      return this.list.isEmpty();
    }
  }
  
  module.exports = Stack;