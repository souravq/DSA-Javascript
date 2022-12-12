/*
345. Reverse Vowels of a String
Easy

3012

2313

Add to List

Share
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
Accepted
464,189
Submissions
932,379
*/





//"hello"  //"holle"

const s_s = "leetcode";
const s = [...s_s];

let start = 0;
let end = s.length-1;
let temp = "";
while(start<=end){
    if((s[start]=='a' || s[start]=='e' || s[start]=='i' || s[start]=='o' || s[start]=='u' || s[start]=='A'|| s[start]=='E' || s[start]=='I' || s[start]=='O' || s[start]=='U') && (s[end]=='a' || s[end]=='e' || s[end]=='i' || s[end]=='o' || s[end]=='u' || s[end]=='A'|| s[end]=='E' || s[end]=='I' || s[end]=='O' || s[end]=='U')){
        temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        start++;
        end--;
    }else{
        if(!(s[start]=='a' || s[start]=='e' || s[start]=='i' || s[start]=='o' || s[start]=='u' || s[start]=='A'|| s[start]=='E' || s[start]=='I' || s[start]=='O' || s[start]=='U') ){
            start++
        }
        if(!(s[end]=='a' || s[end]=='e' || s[end]=='i' || s[end]=='o' || s[end]=='u' || s[end]=='A'|| s[end]=='E' || s[end]=='I' || s[end]=='O' || s[end]=='U') ){
            end--;
        }
        

    }
}

console.log(s.join(""));