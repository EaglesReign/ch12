load("CArray.js");
load("bubbleSort.js");
load("selectionSort.js");
load("insertionSort.js");
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.bubbleSort();
print();
print(mynums.toString());
