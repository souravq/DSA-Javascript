/*
917. Reverse Only Letters
Easy

1667

57

Add to List

Share
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:


 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
Accepted
149,009
Submissions
242,297
*/




const s_s = "a7_28]";
const s = [...s_s];
console.log(s);
let start = 0;
let end = s.length-1;
let temp = "";

while(start<=end){
    if(!((s_s.charCodeAt(start)>=65 && s_s.charCodeAt(start)<=90) || (s_s.charCodeAt(start)>=97 && s_s.charCodeAt(start)<=122))){
        console.log("enter start"+start);
        start++;
    }
    if(!((s_s.charCodeAt(end)>=65 && s_s.charCodeAt(end)<=90) || (s_s.charCodeAt(end)>=97 && s_s.charCodeAt(end)<=122))){
        console.log("enter end"+end);
        end--;
    }
    if(((s_s.charCodeAt(start)>=65 && s_s.charCodeAt(start)<=90) || (s_s.charCodeAt(start)>=97 && s_s.charCodeAt(start)<=122)) && ((s_s.charCodeAt(end)>=65 && s_s.charCodeAt(end)<=90) || (s_s.charCodeAt(end)>=97 && s_s.charCodeAt(end)<=122))){
        if(start<=end){
            temp = s[end];
            s[end] = s[start];
            s[start] = temp;
            start++;
            end--;
        }
    }
    
    
    console.log(s);
}
console.log(s);
console.log(s.join(""));