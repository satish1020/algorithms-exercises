/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work

  Note:
  Generally if we want to modify/ add / delete an array we go with linked list data structure.
  Delete and Insertion are good for linked list. 
  Retrieving and finding is difficult with linked list.
  Doubly linked list will have next as well as previous.
  Practically we dont use linked list much in javascript because, Javascript array faster than anything we implement. If we are writing in c, c++ or java it is useful.

*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // no return for push
  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  // pop returns deleted node value.
  pop() {
    return this.delete(this.length - 1);
  }
  //1,2,3 
  //return the current pointer
  _find(index) {
    if (index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
  // returns value
  get(index) {
    const node = this._find(index);
    if (!node) return void 0;
    return node.value;
  }

  //return node value deleted
  delete(index) {
    // if index is zero, we want to delete the head
    if (index === 0) {
      const head = this.head;
      // head exists that means we need to delete this and 
      // we will assign next element of head a s head.
      if (head) {
        this.head = head.next;
      } else {
        // if head doesnt exist that means it is empty and we assign head and tail as null
        this.head = null;
        this.tail = null;
      }
      // decreasing the length of linked list as first element is deleted.
      this.length--;
      // returns deleted node.
      return head.value;
    }

    // if deleting element is not the first node then we need to find the node just before the
    // node that we want to delete.
    const node = this._find(index - 1);
    // exicse is the element that we need to delete. which is the next of the current node
    const excise = node.next;
    // if excise node we want to delete is not present we return null.
    if (!excise) return null;
    // else since we need to delete this node execise. 
    // Current node.next will now be the excise node next as excise will be deleted.
    node.next = excise.next;
    // if excise next node which is now the current node next node is not present 
    // try ti understand this
    if (!node.next) this.tail = node.next;
    // we are decreasing the length of the linked list.
    this.length--;
    return excise.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// unit tests
// do not modify the below code
describe("LinkedList", function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  test("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});
