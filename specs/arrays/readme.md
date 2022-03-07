// Key for push and delete, check if the linked list has a head or not before pushing 
// for findBy and get have a current pointer

// length of linked list increase and decrease happens only when push or delete.

// find returns node at an index
// get returns node value at an index

// delete returns the value of the node deleted at an index provided.
// solution:
// condition check index is zero --> index is zero --> condition check head is present or not
// condition check index is zero --> index is not zero --> find excise element  
// condition check if excise node is present or not 
// if excise node is not present return null
// if excise node is present --> assign next of previous node of excise node as the next of excise node i.e this.node.next = this.exciseNode.next
// if exciseNode.next.next  is null that means exciseNode is the tail node, now since we are deleting the excise node the new tail this.tail will be the 
// previous node of excise node i.e this.node = this.tail.



//1) for delete check if the index is zero, if index is zero it means head is the element we need to delete. 
// a) check if head is present. 
// b) if head is present, node to delete will be head as index is zero, so we assign the next element as the new head i.e this.head = this.head.next.
// c) id head is not present then the list is empty and we just assign this.head = this.null,
// d) as index is zero and head is the element we need to return which is this.head, which in the above condition is either this.head.next or null
// 2) if index is not zero, then we need to find the index element in the linked list and delete or return that element.
// a) find the index-1 element which is the node previous to the node which we want to delete. i.r const node = this.findBy(index-1)
// b) now node to excise or node to delete will be this.node.next
// c) if excise element is not present that means the node to delete is not present and just return null.
// d) if excise node is present --> assign next of previous node of excise node as the next of excise node i.e this.node.next = this.exciseNode.next
if exciseNode.next.next  is null that means exciseNode is the tail node, now since we are deleting the excise node the new tail this.tail will be the previous node of excise node i.e this.node = this.tail.

   a. check if head is present, if it is present then this make head.next as the head.
   b. If head is not present make this.head as null and this.tail as null return null.

//2) push node value
// a) create a node with the value using new Node(value)
   b) check if head is present? 
   c) if head is not present the new node will be the head and the head.next will be null.
   d) In the else block, if head is present, then the new node will be the next element of tail. this.tail.next will be the new node.
   e) always the new node will be the tail of the linked list.


//3) find node by index
a) if index is greater than length of linked list return null.
b) note for findBy, have a pointer current element. Initially current element will be header.  loop through the linked list from 0 until you reach the index and on each loop move current = current.next, return the current, once we reach the index..

4) get node by index.
a) find the node by index and if node is not found return zero. If node is not found return node[value];
