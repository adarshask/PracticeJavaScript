/**  Given an array arr[], the task is to print every alternate element of the array starting from the first element.

Examples:

Input: arr[] = [10, 20, 30, 40, 50]
Output: 10 30 50
Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

Input: arr[] = [-5, 1, 4, 2, 12]
Output: -5 4 12  */


// Iterative Approach

 function getAlternates(arr){
    let res = [];
    for(i=0; i < arr.length; i +=2){
        res.push(arr[i]);
    }
    return res;
 }

 const arr = [20,50,21,34,28,96,47];
 const res = getAlternates(arr);
 console.log(res.join(""));

/** Time Complexity: O(n), where n is the number of elements in arr[].
Auxiliary Space: O(1) */

// Recursive Approach

function getAlternatesRec(arr, idx, res) {
    if(idx < arr.length){
        res.push(arr[idx]);
        getAlternatesRec(arr, idx, res);
    }
}


function getAlternatesRecs(arr){
    let res = [];
    getAlternatesRec(arr, 0, res);
    return res;
}

// Driver code 
let arrs = [10, 30, 40, 70, 564, 90];
let resr = getAlternates(arr);
console.log(res.join(""));
