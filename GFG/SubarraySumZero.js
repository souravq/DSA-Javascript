/*
Subarray with 0 sum

Easy
Accuracy: 39.79%
Submissions: 100k+
Points: 2

Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.

Example 1:

Input:
5
4 2 -3 1 6

Output: 
Yes

Explanation: 
2, -3, 1 is the subarray 
with sum 0.
Example 2:

Input:
5
4 2 0 1 6

Output: 
Yes

Explanation: 
0 is one of the element 
in the array so there exist a 
subarray with sum 0.
Your Task:
You only need to complete the function subArrayExists() that takes array and n as parameters and returns true or false depending upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the drivers code.

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(n).

Constraints:
1 <= n <= 104
-105 <= a[i] <= 105


*/


const arr = [4, 2, 1, 1, -3];






























// let flag = false;
// //let total = 0;
// for(let i = 0; i<arr.length; i++){
//     let total=arr[i];
//     if(total==0){
//         flag = true;
//         break;
//     }
//     for(let j = i+1; j<arr.length; j++){
//         total += arr[j];
//         if(total==0){
//             flag = true;
//             break;
//         }
//     }

// }

// console.log(flag);


