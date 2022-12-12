/*
2108. Find First Palindromic String in the Array
Easy

639

21

Add to List

Share
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.



Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
Accepted
69,970
Submissions
89,011
*/





// words = ["abc","car","ada","racecar","cool"] //ada

function palindrome(str){
    const str_arr = [...str];
    let start = 0;
    let end = str_arr.length-1;
    //let temp = "";
    while(start<=end){
        if(str_arr[start]!= str_arr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
const words = ["notapalindrome","racecar"];
//console.log(palindrome("adaq"));
let i = 0;
for(i = 0; i<words.length; i++){
    if(palindrome(words[i])){
        console.log(words[i])
        break;
    }
}
if(i==words.length){
    console.log(" ");
}