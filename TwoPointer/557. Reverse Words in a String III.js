/*
557. Reverse Words in a String III
Easy

4371

215

Add to List

Share
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
Accepted
621,932
Submissions
761,973
*/






function reverseStr(str){
    const char_arr = [...str];
    let start = 0;
    let end = char_arr.length-1;
    let temp = "";
    while(start<=end){
        temp = char_arr[end];
        char_arr[end] = char_arr[start];
        char_arr[start] = temp;
        start++;
        end--;
    }
    return (char_arr.join(""));
}


// "God Ding" // "doG gniD"
const str = "Let's take LeetCode contest";
const str_arr = str.split(" ");
//const str_arr = [...str];

console.log(str_arr);
for(let i = 0; i<str_arr.length; i++){
    str_arr[i] = reverseStr(str_arr[i]);
}

console.log(str_arr.join(" "));