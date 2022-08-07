<h1 align="center">Complete Intro to Computer Science: Algorithms and Data Structures</h1> <br>

<p align="center">
 As taught by Brian Holt for Frontend Masters
</p>

Learn computer science with Brian Holt!

- [See the course website][site]
- [See it on Frontend Masters][fem]

## PRs

If you have any issues with _this_ repo, please file the issues with the main repo [here][other-repo]. Feel free to open PRs for mistakes in this repo though.

## License

The **code** is this repo is licensed under the Apache 2.0 license.

The **content** is this repo is licensed under the CC-BY-NC-4.0 license.

[site]: https://btholt.github.io/complete-intro-to-computer-science
[fem]: https://www.frontendmasters.com
[other-repo]: https://github.com/btholt/complete-intro-to-computer-science


Algorithms and Data Structures:


o(n) OR BigO of n or linear time.

o(n2)   or quadratic time

o(1)  constant time.

O(n) examples:

function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}

function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}


O(n2) example:

function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

O(1) Example:

function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}





Red line represents a constant no matter how many items in array, it will be a constant.

Blue line is o(n) or linear time if there are 6 items in an array, it takes a constant amount of time based on how many items in an array.

Green one is o(n2) is a quadratic one and exponential amount of time.


The purple one here is logarithmic time.




Purple line is ologn, algorithmic time, which might be in recursion, merge sort or quick sort.


We need to think the more items that I add to input how is it going to effect?

If we increase the number of elements in an array how it will 

Let say we write comment system for a website and let say this comment system has sorting and filtering mechanism. So what is the time complexity of this algorithm?

It depends on we need to ask for more info.

Because it depends on number of comments the web app has.

For example Reditt has lot of comments so if o(n3) is the code time complexity for reditt, since it has lot of comments perhaps the app doesn’t load at all. 

Spatial Complexity:


So far we've just talked about computational complexity. In general, if someone talks about Big O and doesn't specify what type they're talking about, it's usually about computational complexity, or analyzing how long something takes to run. Let's talk about spatial complexity or how much space (e.g. how much RAM or disk space) an algorithm needs to complete.
When the trainer was working in Netflix, he was considering how much ram it is using, where it can hamper viewing like sign up experience.

If we have an array of 10 items 


Functional programming might cause to turn through lot of arrays.

When space complexity is a concern, we need to often refactor the functional program.


We need to evaluate ourselves, am I going to run in a low signal rural android device or in a super working computer or if we are running on cloud or azure, the space complexity is not a problem, it is not much needed to consider space complexity, even if we have some random code, that’s not an issue.

If it is an android with low signal, then we need to make sure that we consider about spatial complexity. 

We can discuss in interview on time complexity or space complexity, when trying to refactor the code.

This might increase to purchase more efficient servers.

Customer experience vs money. Which one to give importance.


We never write the merge sort, quick sort etc…

But we will take these concepts to write the code.


Bubble Sort:

[1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5]

Are 4 and 5 out of order? No.
End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.

We go through array and if array [0] > a [1], swap them.
We go through the entire array once.
We will check during previous iteration is anything swapped.

If so, we keep iterating until there was no items that were swapped before, then we break the loop.


There will be outer while loop, which will check if there is something that’s swapped in previous iteration.

Also, there will be an inner for loop which will iterate through the entire array.

So, the time complexity will be o(n2).

Because every item in an array will be compared with another item in an array. So average time complexity is o(n2).

Worst case scenario of bubble sort is if the input is reverse sorted array.	

Best case scenario is a sorted list so if the array is of size n and already sorted then time complexity is o(n).

Spatial complexity of bubble sort is o (1) a constant.

We are not creating a additional array or such. We are using the existing array, which means no new memory is created so spatial complexity is o(1) or a constant.


Is this sort stable?

If two items are considered equal in a sort. For example, in the below array If we do sort based on state, since Shirley came before Scott Moss, and both are from same state.

Shirley should come before Scott Moss, for this to be stable. 

Bubble sort will not change this order; hence it is considered stable.

[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]

Since we are operating on same array Bubble Sort is called destructive. Because if we want to get the original array after sorting, we need to have a copy of the actual array before the sorting has begun, to retain the actual array after the sort.

Difference between do loop and while loop is

Do loop atleast happens once.


// insertion sort is better than bubble sort.


Insertion sort:


[3, 2, 5, 4, 1]

With insertion sort, you treat the first part 3 of your list as sorted and the second part 2 of your list as unsorted. 

We will start comparing 2 with 3 and if 2 is less than 3, we move 3 to the right and 2 at index 0.

Then we move the index to the next one which is 5.


[3, 2, 5, 4, 1]
initially number to insert is 2 and left of 2 i.e 3 is considered sorted and right of 2 i.e., 5,4,1 is considered unsorted.
    ↓
[3, 2, 5, 4, 1] // the ↓ is the number we're looking to insert, everything before is sorted

Is 2 larger than 3? No. Move 3 to the right.
Beginning of list, insert 2 at index 0.

       ↓
[2, 3, 5, 4, 1]

Here number to insert is moved to 5 from 3 and left to 5 i.e 2,3 are sorted and right to 5 i.e 4,1 are unsorted.

Is 5 larger than 3? Yes.
Insert after 3 (it's already there so it doesn't move)

          ↓
[2, 3, 5, 4, 1]

Is 4 larger than 5? No. Move 5 to the right.
Is 4 larger than 3? Yes.
Insert after 3 at index 2.

             ↓
[2, 3, 4, 5, 1]

Is 1 larger than 5? No. Move 5 to the right.
Is 1 larger than 4? No. Move 4 to the right.
Is 1 larger than 3? No. Move 3 to the right.
Is 1 larger than 2? No. Move 2 to the right.
Beginning of list, insert 1 at index 0

[1, 2, 3, 4, 5]

Reached end of list, list is sorted.


Worst time complexity case for insertion sort is o(n2) because if it’s a reverse sorted list then every item should be compared with another item, and it must be shuffles.

Best time complexity case for insertion sort is o(n) because if it’s already sorted list then it will loop through all the items and check if anything needs to be shifted, but it won’t shift as list is already sorted, so best time complexity is o(n).

What's the average time complexity of a randomly shuffled array? Well, it'll make a lot of comparisons and swaps, and those just grow exponentially as the array grows, so it'll still be O(n²). 

What about spatial complexity? O(1)! We don't create any additional items for this sort.
The sort is destructive since we work on the array itself and the sort can be stable as long as you program it so that they stay in order during the insertions.

When to use  Insertion Sort:

In cases for ex: where we already know the results from a database will already be sorted or mostly 98%sorted and we need to apply sort again on top of this. In such scenarios
Insertion sort is better to be used as compared to quick sort and other sorts. Because the time complexity is O(n) for already sorted list or mostly sorted list.

Some times we need to combine sorts like, we start with insertion sort for few iterations and if it is not yet sorted we go to quick sort or merge sort.

Recurssion:

Recursion occurs occasionally in our work.


If we have a bigger problem like solve an array of million numbers.

Recurssion is break down them to 500k and other fo r500k.

You keep doing this until eventually you end up of a problem on which you know how to solve the problem, and we can restitch the solution together again.


Fibbanocci is a classic example of recursion.

For ex:

In the below Fibonacci example
For Fibonacci (5) we are calling Fibonacci(3) twice, so the best way
Of avoiding this call multiple times is using use Memo for this Fibonacci function.
So calculation of Fibonacci(3) can be avoided to be called twice.


Merge Sort:

For merge sort the best and worst time complexity is the same. Because no matter how the list is if it is sorted, reverse sorted, or semi sorted. Every number is not compared to another number in merge sort. We divide the list into the smaller list until the length of the list is 1 or 0 (n). So now we have two sorted lists, and we combine them all back into one sorted list. We then start merging all to form sorted list. While doing this we don’t compare all the items(log n). So, the total time complexity of this sort is nlogn.


Most of the JavaScript engines will be using merge sort because it is the safest way and if we don’t know what’s coming in merge sort is the best sort.

The time complexity of this sort is nlogn.

Spatial complexity will be worst for merge sort because we are dividing the list into smallest and each element in arrays are given a size. So spatial complexity is n.


Quick sort:

The worst case for quick sort is o(n2)

If we have a sorted array ex: [1,2,3,4,5,6,7]

7 is the pivot.

So, every other element in the array goes to the left as they are less than 7.
The elements in the right will be empty as 7 is the largest in the array.

This goes on, so every element in an array of already sorted list when quick sorted will compare with the other element in an array.

So, the Worst-case time complexity of this sorted array is O(n2). which is the worst case of a quick sort.

Similar is the case for reverse sorted list the worst case will be O(N2) because this time 
[7,6,5,4,3,2,1]

This time pivot is 7 and all the other elements will move to the right and time complexity is O(n2).

There are ways to mitigate the risk.
Instead of making the last as pivot element. We can make the middle element as pivot and is called as quick sort 3. In this case we end up in a much better average time complexity as
 n logn.  The average case scenario of quick sort can be achieved using quick sort 3 and it will be
nlogn. There are other variations of quick sort based on how you select the pivot element. We discussed about quick sort and quick sort 3.

The best case scenario is the more shuffle the array is the better the quick sort, which is also the average case of quick sort i.e nlogn as every element is not compared with every other element in an array, just like merge sort but has better spatial complexity when compare to merge sort.
 

We can do as nondestructive version, but we will do as destructive for better spatial complexity.

Binary Search Tree:

Binary stands for it have a max of two children’s, it can have 0,1 children. Similarly search stands for this tree is primarily to search.

We use trees to optimize search. The best-case scenario of BST is logn, which is good. Which is the reason why we use BST for binary Search.

The top node of a BST is called the root.

The child to the right of root node is always greater than root node and the nodes to the left of the root node is always less.

Average Time Complexity: logn

Best Time Complexity: o(1) the searched item being the root.

Worst Case Time Complexity:  n


The average case time complexity in BST look up or search is logn as we are not going through all the nodes.

The use case of BST for look ups is Data base index. For ex: if we ask mongo db to create a data base index of id’s. What Mongo db does is it creates BST of all the id’s and have pointers to all objects its stored in BST. This is not exactly a BST in this case but dfinetely a tree.


Best case scenario of time complexity of a BST is if the node which we are searching is the root of the node. So the best case scenario of a BST is o(1)

Worst case scenario time complexity is n, as we need to go through all nodes in the below example to reach 5.	If we add all the nodes in sorted order in a BST, then that is the worst case scenario. This can be mitigated using a Self-Balancing tree.
1
 \
  2
   \
    3
     \
      4
       \
        5


To delete a node in BST, is by replacing it with the greatest left sub child or the least right child.

If the node doesn’t have any child, then just delete the node 

A double linked list is not a BST, BST doesn’t have a order as BST. Doubly linked list is circular.

They both have two pointers to the next items.


