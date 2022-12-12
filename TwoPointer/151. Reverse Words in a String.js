/*
151. Reverse Words in a String
Medium

5107

4423

Add to List

Share
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

Accepted
860,113
Submissions
2,699,547
*/





//s = "the sky is blue" //"blue is sky the"
const s = "a good   example";

const s_s = s.split(" ");
const s_s_s = [];
for(let i=0; i<s_s.length; i++){
    if(s_s[i]!=""){
        console.log(s_s[i]);
        s_s_s.push(s_s[i])
    }
}
console.log(s_s_s);

let start = 0;
let end = s_s_s.length-1;
let temp = "";
while(start<=end){
    temp = s_s_s[end];
    s_s_s[end] = s_s_s[start];
    s_s_s[start] = temp; 
    start++;
    end--;
}
console.log(s_s_s.join(" "));