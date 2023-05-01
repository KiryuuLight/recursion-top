//Assignment 1

//Using iteration, write a function fibs which takes a number and returns an array containing 
//that many numbers from the fibonacci sequence. 

//Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (n) => {
    let val1 = 0;
    let val2 = 1;
    let temp = 0;
    const arr = [val1,val2]
    while (n-2) {
        temp = val1+val2;
        val1 = val2;
        val2 = temp;
        arr.push(temp)
        n--;
    }
    return arr;
}

console.log(fibs(8));

//Now write another method fibsRec which solves the same problem recursively. 
//This can be done in just a couple of lines 
//(or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

const fibsRec = (n) => {
    if (n === 0) return [0];
    if (n === 1) return [0,1];
    const arr = fibsRec(n-1);
    return [...arr, arr[n-1] + arr[n-2]];
}

console.log(fibsRec(8))

//Assignment 2

//Build a function mergeSort that takes in an array and returns a sorted array, 
//using a recursive merge sort methodology.

 const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor((arr.length) / 2);
    const leftHalf = mergeSort(arr.slice(0,mid))
    const rigthHalf = mergeSort(arr.slice(mid))
    return merge(leftHalf,rigthHalf)
 }

 const merge = (leftHalf,rigthHalf) => {
    const newArray = []
    let i = 0 , j = 0;

    while (i < leftHalf.length && j < rigthHalf.length) {
        if (leftHalf[i] < rigthHalf[j]) {
            newArray.push(leftHalf[i++])
        } else {
            newArray.push(rigthHalf[j++])
        }
    }

    for (i; i < leftHalf.length; i++) {
        newArray.push(leftHalf[i])
    }
    
    for (j; j < rigthHalf.length; j++) {
        newArray.push(rigthHalf[j])
    }

    return newArray;
}

const arr = [9,3,7,5,6,4,8,2];

console.log(mergeSort(arr))