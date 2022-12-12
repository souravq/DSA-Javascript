/*
344. Reverse String
Easy

6515

1024

Add to List

Share
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
Accepted
1,895,301
Submissions
2,485,041
*/



const s = ["h","e","l","l","o"];

// const new_str = [];

// for(let i = s.length-1; i>-1; i--){
//     new_str.push(s[i]);
// }
let start = 0;
let end = s.length-1;
let tenmp= "";
while(start<=end){
    temp = s[end];
    s[end]=s[start];
    s[start]=temp;
    start++;
    end--;
}

console.log(s);
//accepted