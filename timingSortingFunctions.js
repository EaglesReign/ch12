load("mergeSortCArray.js");
load("bubbleSort.js");
load("selectionSort.js");
load("insertionSort.js");
load("shellsort.js");
load("shellsort1.js");
load("mergeSort.js");
var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " + 
      numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selection sort on " + 
      numElements + " elements is: " +  elapsed + " milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " + 
       numElements + " elements is: " + elapsed + " milliseconds.");
