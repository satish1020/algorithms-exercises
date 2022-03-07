// linked list has a head tail and length of linked list
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // we push a value in linked list
  push(value) {
    // create a node
    const node = new Node(value);
    // increase the length each time we push a node into linked list
    this.length++;
    // list is empty when there is no head, we add this node as the head.
    if (!this.head) {
      this.head = node;
    } else {
      // if there is a head,
      // it means there are already two nodes, so the next of the current tail will be the new node.
      this.tail.next = node;
    }
    // now the added new node becomes the tail
    this.tail = node;
  }

  // 1,2,3
  push2(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node
  }

  // find returns node at an index
  find(index) {
    if (index >= this.length) return null;
    // we have to traverse linked list to find out the node
    // let us take a pointer current. which specifies where we are in the linked list.
    // initially since we start at the first node which is the header. Current is a header.
    let current = this.head;
    for (i = 0; i < index - 1; i++) {
      // current is a pointer on which node on a linked list we are at
      // we iterate through the linked list by making current as current.next.
      // initially current is 0 then after this loop it will be 1.
      // so on until we reach an element just before the index  which is index-1
      // now the current element is 1 before index so the next of the current element is the
      // element that we are looking for. so we assign current = current.next. we return the current element.
      current = current.next;
    }
    return current;
  }

  // get returns node value at an index
  get(index) {
    // this logic gives us the node, which is find a node.
    const node = this.find(index);
    // if there is no node, return null
    if (!node) return null;
    return node.value;
  }

  /// 1,2,3
  delete(index) {
    // is this the first node?
    let nodeToDelete = null;
    if ((index = 0)) {
      if (this.head) {
        nodeToDelete = this.head.value;
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
        nodeToDelete = this.head;
      }
      this.length--;
      return nodeToDelete;
    }
    const currentNode = this.find(index - 1);
    nodeToDelete = this.currentNode.next;
    if (!nodeToDelete) return null;
    if (nodeToDelete.next === null) {
      this.tail = currentNode;
      currentNode.next = null;
    }
    currentNode.next = nodeToDelete.next;
    return nodeToDelete;
  }
}

// delete the last element of linked list.
pop = () =>{
  return this.delete(this.length -1);
}

// a node has value and next item
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
