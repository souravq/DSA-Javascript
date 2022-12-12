/*
2000. Reverse Prefix of Word
Easy

523

12

Add to List

Share
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence 
of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting
string will be "dcbaefd".
Return the resulting string.

 

Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
Example 2:

Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
Example 3:

Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
 

Constraints:

1 <= word.length <= 250
word consists of lowercase English letters.
ch is a lowercase English letter.
Accepted
50,825
Submissions
65,337
*/




// word = "xyxzxe", ch = "z"   // "zxyxxe"

let word = "xyxzxe";
const word_arr = [...word];
let ch = "z";
let start = 0;
let end = -1;
for(let i = 0; i < word_arr.length; i++){
    if(word_arr[i]==ch){
        end = i;
        break;
    }
}
let temp = "";
while(start<=end){
    temp = word_arr[end];
    word_arr[end] = word_arr[start];
    word_arr[start] = temp;

    start++;
    end--;
}

console.log(word_arr.join(""))

//word = [...word];
//console.log(word);



