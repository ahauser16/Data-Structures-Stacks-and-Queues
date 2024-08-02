# Data Structures: Stacks and Queues

This project implements basic data structures: Stacks and Queues, using JavaScript.

## Assignment Instructions

### **Queues**

- [x] Make a **_Queue_** class. It should include methods for enqueuing, dequeuing, peeking, and checking if the queue is empty. Make it throw an error if you try to dequeue from an empty queue.

#### myNotes

The `Queue` class is a data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. The class uses nodes to store values and links them together.

Here's a breakdown of what each method should do:

1. `enqueue(val)`: This method adds a new value to the end of the queue. It should create a new node with the given value and update the `last` pointer of the queue. If the queue is empty, it should also update the `first` pointer. The method should return `undefined`.

2. `dequeue()`: This method removes the node from the start of the queue and returns its value. If the queue is empty, it should throw an error. It should update the `first` pointer to the next node in the queue. If the queue becomes empty after the operation, it should also update the `last` pointer to `null`.

3. `peek()`: This method returns the value of the first node in the queue without removing it. If the queue is empty, it should return `null`.

4. `isEmpty()`: This method returns `true` if the queue is empty, otherwise `false`.

Here is the implementation of the `Queue` class with the required methods:

```
/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const removedNode = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
```

### Common Use Cases for the `Queue` class

A common use case for using the Queue class is to manage tasks in a First-In-First-Out (FIFO) order. This is useful in scenarios where the order of operations is important, such as:

1. **Task Scheduling**: Managing tasks that need to be executed in the order they were added.
2. **Breadth-First Search (BFS)**: Implementing BFS in graph traversal algorithms.
3. **Print Queue**: Managing print jobs sent to a printer.
4. **Order Processing**: Handling customer orders in the order they were received.

Here is an example of using the `Queue` class for task scheduling:

```
const Queue = require('./queue');
const taskQueue = new Queue();

taskQueue.enqueue("Task 1");
taskQueue.enqueue("Task 2");
taskQueue.enqueue("Task 3");

while (!taskQueue.isEmpty()) {
  const task = taskQueue.dequeue();
  console.log(`Processing ${task}`);
}
```

This will output:

```
Processing Task 1
Processing Task 2
Processing Task 3
```

### **Stacks**

- [x] Make a **_Stack_** class. It should include methods for pushing, popping, peeking, and checking if the stack is empty. Make it throw an error if you try to pop from an empty stack.

#### myNotes

The `Stack` class is a data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. The class uses nodes to store values and links them together. Below is the implementation of the `Stack` class with the required methods:

```
/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.top = null; // equivalent to `first`
    this.bottom = null; // equivalent to `last`
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    if (this.isEmpty()) {
      this.bottom = null;
    }
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
```

### Common Use Cases for the `Stack` class

A common use case for using the `Stack` class is to manage tasks in a Last-In-First-Out (LIFO) order. This is useful in scenarios where the most recently added item needs to be accessed first, such as:

1. **Function Call Management**: Managing function calls in programming languages, where the most recent function call needs to be completed before returning to the previous one.
2. **Undo Mechanism**: Implementing undo functionality in applications, where the most recent action needs to be undone first.
3. **Expression Evaluation**: Evaluating mathematical expressions, particularly in converting infix expressions to postfix expressions and evaluating them.
4. **Depth-First Search (DFS)**: Implementing DFS in graph traversal algorithms.

Here is an example of using the `Stack` class for managing function calls:

```
const Stack = require('./stack');
const callStack = new Stack();

function functionA() {
  callStack.push('functionA');
  console.log('Entering functionA');
  functionB();
  console.log('Exiting functionA');
  callStack.pop();
}

function functionB() {
  callStack.push('functionB');
  console.log('Entering functionB');
  functionC();
  console.log('Exiting functionB');
  callStack.pop();
}

function functionC() {
  callStack.push('functionC');
  console.log('Entering functionC');
  // Do some work
  console.log('Exiting functionC');
  callStack.pop();
}

functionA();
```

This will output:

```
Entering functionA
Entering functionB
Entering functionC
Exiting functionC
Exiting functionB
Exiting functionA
```

### **Further Study: Composition**

You’ve probably noticed that your **_Stack_** and **_Queue_** classes involve a lot of duplicate code compared to your **_LinkedList_** class. One way to avoid this problem is to use a **_LinkedList_** class internally to manage your stack or your queue:

Re-implement your classes by using a **_LinkedList_** internally to manage the data structure. Then make a new version using an array instead of a linked list. Which do you prefer?

### myNotes on LinkedList and Queue data types

The `Stack` and `Queue` classes share similarities with the `LinkedList` data type but also have distinct differences. Here's a comparison:

**I. Similarities**

1.  Node-Based Structure: Both `Stack` and `Queue` use nodes to store values and link them together, similar to a `LinkedList`.
2.  Dynamic Size: All three data structures can dynamically grow and shrink in size as elements are added or removed.
3.  Operations: Basic operations like adding and removing elements are fundamental to all three data structures.

**II. Differences**

1. Order of Operations:

   - **Stack**: Follows Last-In-First-Out (LIFO) principle. Elements are added and removed from the top.
   - **Queue**: Follows First-In-First-Out (FIFO) principle. Elements are added at the end and removed from the front.
   - **LinkedList**: Allows insertion and deletion of elements at any position.

2. Methods:


      - **Stack**: Typically includes `push(val)`, `pop()`, `peek()`, and `isEmpty()`.
      - **Queue**: Typically includes `enqueue(val)`, `dequeue()`, `peek()`, and `isEmpty()`.
      - **LinkedList**: Typically includes methods like `addAtPosition(val, pos)`, `removeAtPosition(pos)`, `getAtPosition(pos)`, and `isEmpty()`.

    3. Use Cases:
      - **Stack**: Used for scenarios requiring LIFO order, such as function call stacks, undo mechanisms, and parsing expressions.
      - **Queue**: Used for scenarios requiring FIFO order, such as task scheduling, breadth-first search (BFS) in graphs, and managing print jobs.
      - **LinkedList**: Best suited for scenarios where frequent insertions and deletions at arbitrary positions are required, such as implementing other data structures (e.g., stacks, queues), and managing ordered collections of elements.

**III. Use Case for Linked List**
The `LinkedList` data type is best suited for scenarios where:

- Frequent insertions and deletions at arbitrary positions are required.
- The size of the data structure is dynamic and not known in advance.
- Memory usage needs to be efficient, as linked lists do not require contiguous memory allocation.

For example, a `LinkedList` is ideal for implementing other data structures like stacks and queues, managing ordered collections of elements, and scenarios where elements need to be frequently added or removed from the middle of the list.

See `linkedListQueue.js` for a `LinkedList` implementation of the `Queue` class.

- The `LinkedList` class manages the nodes and provides methods to add to the end, remove from the start, get the first value, and check if the list is empty.
- The `Queue` class uses an instance of the `LinkedList` class to perform its operations, delegating the actual work to the `LinkedList` methods.

**IV Benefits of using a LinkedList and Queue class together**
Using the `LinkedList` and `Queue` classes together provides several benefits:

**1. Efficient Operations:**

- Enqueue and Dequeue: The `LinkedList` class allows efficient addition of elements to the end (`addLast`) and removal from the start (`removeFirst`). These operations are O(1) in a linked list, making the `Queue` operations efficient.

**2. Dynamic Size:**

- The `LinkedList` class can dynamically grow and shrink as elements are added or removed, which is beneficial for a `Queue` that may have varying numbers of elements over time.

**3. Simplified Implementation:**

- By using a `LinkedList` internally, the `Queue` class can delegate the actual work of managing nodes to the `LinkedList`, reducing code duplication and simplifying the `Queue` implementation.

**4. Memory Efficiency:**

- Linked lists do not require contiguous memory allocation, which can be more memory-efficient compared to arrays, especially when the size of the queue changes frequently.

**5. Reusability:**

- The `LinkedList` class can be reused for other data structures (e.g., stacks, deques), promoting code reuse and reducing maintenance effort.

**V Benefits of using a LinkedList and Stack class together**

**1. Efficient Operations:**
   - Push and Pop: The LinkedList class allows efficient addition of elements to the start (addFirst) and removal from the start (removeFirst). These operations are O(1) in a linked list, making the Stack operations efficient.

**2. Dynamic Size:**
   - The LinkedList class can dynamically grow and shrink as elements are added or removed, which is beneficial for a Stack that may have varying numbers of elements over time.

**3. Simplified Implementation:**
   - By using a LinkedList internally, the Stack class can delegate the actual work of managing nodes to the LinkedList, reducing code duplication and simplifying the Stack implementation.

**4. Memory Efficiency:**
   - Linked lists do not require contiguous memory allocation, which can be more memory-efficient compared to arrays, especially when the size of the stack changes frequently.

**5. Reusability:**   
  - The LinkedList class can be reused for other data structures (e.g., queues, deques), promoting code reuse and reducing maintenance effort.

### **Further Study Build: Deque**

For extra practice with linked lists, build a deque using a doubly-linked list. Make sure it includes all of the expected methods for a deque.

### **Challenges**

For these challenges, use either a stack or a queue (or a combination of both!)

### **Browser Back/Forward**

Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

Write pseudo-code for this.

### **String Reversal**

Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.

### **Balanced Brackets?**

Write a function that is passed a string which can contain any text, including different kinds of brackets: `{} [] ()`.

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

Examples of balanced strings:

- `hello` *(no brackets)*
- `(hi) [there]`
- `(hi [there])`
- `(((hi)))`

Imbalanced:

- `(hello` *(bracket left open at end)*
- `(nope]` *(wrong type closed)*
- `((ok) [nope)]` *(closed out of order)*

### **Josephus Survivor**

This is a classic algorithm problem, based on a Biblical-era tale.

Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

```
1  2  3  4  5  6  7  8  9  10
      !        !        !
```

This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

```
1  2  3  4  5  6  7  8  9  10
   !  X        X  !     X
```

And again, starting where that left off, at #8, and continuing:

```
1  2  3  4  5  6  7  8  9  10
!  X  X        X  X  !  X

1  2  3  4  5  6  7  8  9  10
X  X  X     !  X  X  X  X

1  2  3  4  5  6  7  8  9  10
X  X  X     X  X  X  X  X  !
```

At this point, only #4 remains, so that person would be our “survivor”.

Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor.

For example:

```
find_survivor(10, 3) // 4
```

There are different ways you can solve this, but a good solution uses one of the structures covered in this exercise.

Want a hint on the data structure?

```
**Linked List**

You could solve this in other ways, but using a linked list (or a doubly-linked list) is often a good way to solve this problem. You can do so by making the list “circular”—having the last item in the linked list point back to the first item.

This will let you traverse the list, removing items until one remains.
```

### **Calculator**

In this exercise, you’ll build a “polish notation calculator”.

Polish notation is a different way to write an artithmetic expression. For example, instead of writing **_1 + 2 _ 3\***, as we would in normal (“infix”) style, we could write it with the operators to the left of their arguments. This expression would become **_+ 1 _ 2 3\***. You can read a polish notation expression backwards to see exactly what it does — in this case, multiply 2 times 3, and add that result to 1.

Let’s try this out:

```
calc("+ 1 2")  # 1 + 2 == 3

calc("* 2 + 1 2")  # 2 * (1 + 2) == 6

calc("+ 9 * 2 3")   # 9 + (2 * 3) == 15
```

Let’s make sure we have non-commutative operators (subtraction and division) working:

```
calc("- 1 2")  # 1 - 2 == -1

calc("- 9 * 2 3")  # 9 - (2 * 3) == 3

calc("/ 6 - 4 2")  # 6 / (4 - 2) == 3
```

Data Structure

You’ll want to turn the expression into a string and work through it *backwards*. Do this by hand and see how it feels.

### **Hacker Rack Challenges**

Pick and work on challenges from HackerRank:
(https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=queues)[https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=queues]

(https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks)[https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks]

```
class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
    this._list = new LinkedList();
  }
}
```

## Project Structure

. ├── package.json ├── queue.js ├── queue.test.js ├── README.MD ├── stack.js ├── stack.test.js

## Installation

To install the dependencies, run:

```sh
npm install
```

## Running Tests

To run the tests, use: `npm test`

## Stack

The `Stack` class is implemented in `stack.js`. It supports the following methods:

- `push(val)`: Add a new value to the top of the stack.
- `pop()`: Remove the value from the top of the stack and return it.
- `peek()`: Return the value at the top of the stack without removing it.
- `isEmpty()`: Return true if the stack is empty, otherwise false.

### Example

const Stack = require('./stack');
const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
console.log(stack.isEmpty()); // false

## Queue

The Queue class is implemented in queue.js. It supports the following methods:

- `enqueue(val)`: Add a new value to the end of the queue.
- `dequeue()`: Remove the value from the front of the queue and return it.
- `peek()`: Return the value at the front of the queue without removing it.
- `isEmpty()`: Return true if the queue is empty, otherwise false.

### Example

```
const Queue = require('./queue');
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.isEmpty()); // false
```

## myNotes

### Queue class

The `Queue` class is a data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. The class uses nodes to store values and links them together.

Here's a breakdown of what each method should do:

1. `enqueue(val)`: This method adds a new value to the end of the queue. It should create a new node with the given value and update the `last` pointer of the queue. If the queue is empty, it should also update the `first` pointer. The method should return `undefined`.

2. `dequeue()`: This method removes the node from the start of the queue and returns its value. If the queue is empty, it should throw an error. It should update the `first` pointer to the next node in the queue. If the queue becomes empty after the operation, it should also update the `last` pointer to `null`.

3. `peek()`: This method returns the value of the first node in the queue without removing it. If the queue is empty, it should return `null`.

4. `isEmpty()`: This method returns `true` if the queue is empty, otherwise `false`.

Here is the implementation of the `Queue` class with the required methods:

```
/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const removedNode = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
```

### Common Use Cases for the `Queue` class

A common use case for using the Queue class is to manage tasks in a First-In-First-Out (FIFO) order. This is useful in scenarios where the order of operations is important, such as:

1. **Task Scheduling**: Managing tasks that need to be executed in the order they were added.
2. **Breadth-First Search (BFS)**: Implementing BFS in graph traversal algorithms.
3. **Print Queue**: Managing print jobs sent to a printer.
4. **Order Processing**: Handling customer orders in the order they were received.

Here is an example of using the `Queue` class for task scheduling:

```
const Queue = require('./queue');
const taskQueue = new Queue();

taskQueue.enqueue("Task 1");
taskQueue.enqueue("Task 2");
taskQueue.enqueue("Task 3");

while (!taskQueue.isEmpty()) {
  const task = taskQueue.dequeue();
  console.log(`Processing ${task}`);
}
```

This will output:

```
Processing Task 1
Processing Task 2
Processing Task 3
```

### Stack class

The `Stack` class is a data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. The class uses nodes to store values and links them together. Below is the implementation of the `Stack` class with the required methods:

```
/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.top = null; // equivalent to `first`
    this.bottom = null; // equivalent to `last`
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    if (this.isEmpty()) {
      this.bottom = null;
    }
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
```

### Common Use Cases for the `Stack` class

A common use case for using the `Stack` class is to manage tasks in a Last-In-First-Out (LIFO) order. This is useful in scenarios where the most recently added item needs to be accessed first, such as:

1. **Function Call Management**: Managing function calls in programming languages, where the most recent function call needs to be completed before returning to the previous one.
2. **Undo Mechanism**: Implementing undo functionality in applications, where the most recent action needs to be undone first.
3. **Expression Evaluation**: Evaluating mathematical expressions, particularly in converting infix expressions to postfix expressions and evaluating them.
4. **Depth-First Search (DFS)**: Implementing DFS in graph traversal algorithms.

Here is an example of using the `Stack` class for managing function calls:

```
const Stack = require('./stack');
const callStack = new Stack();

function functionA() {
  callStack.push('functionA');
  console.log('Entering functionA');
  functionB();
  console.log('Exiting functionA');
  callStack.pop();
}

function functionB() {
  callStack.push('functionB');
  console.log('Entering functionB');
  functionC();
  console.log('Exiting functionB');
  callStack.pop();
}

function functionC() {
  callStack.push('functionC');
  console.log('Entering functionC');
  // Do some work
  console.log('Exiting functionC');
  callStack.pop();
}

functionA();
```

This will output:

```
Entering functionA
Entering functionB
Entering functionC
Exiting functionC
Exiting functionB
Exiting functionA
```

## License

This project is licensed under the ISC License.
