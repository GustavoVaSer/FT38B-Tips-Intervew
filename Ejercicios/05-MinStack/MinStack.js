class Node {
  constructor(value, min) {
    this.value = value;
    this.min = min;
    this.next = null;
  }
}

class MinStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newMin = value;
    if (this.top !== null && value > this.top.min) {
      newMin = this.top.min;
    }
    const newNode = new Node(value, newMin);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  min() {
    if (this.top === null) {
      return null;
    }
    return this.top.min;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.value;
  }
}

module.exports = {
  Node,
  MinStack,
};
