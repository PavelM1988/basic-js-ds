const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null
  }

  getUnderlyingList() {
    return this.head
  }
  
  enqueue(val) {
    if (!this.head) {
      this.head = new ListNode(val)
    } else {
      let actual = this.head
      while (actual.next) {
        actual = actual.next
      }
      actual.next = new ListNode(val)
    }
  }

  dequeue() {
    let actual = this.head
    this.head = actual.next
    return actual.val
  }
}

module.exports = {
  Queue
};
