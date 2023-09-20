import areEqual from "../Lib/areEqual.js";
import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { mergeSort } from "./merge_myImpl.js";
import { quickSortHelper as quickSort } from "./quick.js";
import { selectionSort } from "./selection.js";

let exArr = [...Array(500)].map(() => Math.floor(Math.random() * 300));
const original = [...exArr];

// Bubble sort
console.time('Bubble');
const bubble = bubbleSort(exArr);
console.timeEnd('Bubble');
exArr = [...original];

// Selection sort
console.time('Selection');
const selection = selectionSort(exArr)
console.timeEnd('Selection');
exArr = [...original];

// Insertion sort
console.time('Insertion');
const insertion = insertionSort(exArr)
console.timeEnd('Insertion');
exArr = [...original];

// Merge sort
console.time('Merge');
const merge = mergeSort(exArr)
console.timeEnd('Merge');
exArr = [...original];

// Quick sort
console.time('Quick');
const quick = quickSort(exArr);
console.timeEnd('Quick');

// Checking array equality
console.time('Checking...');
const check = () => {
    if (areEqual(bubble, selection) &&
        areEqual(selection, insertion) &&
        areEqual(insertion, merge) &&
        areEqual(merge, quick)) {
        return true
    } else {
        return false;
    }
}
console.log(`Equality is ${check()}`)
console.timeEnd('Checking...');