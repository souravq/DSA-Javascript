/*
125. Valid Palindrome
Easy

5449

6322

Add to List

Share
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
Accepted
1,673,281
Submissions
3,825,049
*/






//"A man, a plan,11 a canal: Panama" //amanaplanacanalpanama

const str = "A man, a plan, a canal: Panama";
const str_arr = [...str];
console.log(str_arr);
const new_arr = [];
for(let i = 0; i<str_arr.length; i++){
    if(str_arr[i]>='A' && str_arr[i]<='Z'){
        new_arr.push(str_arr[i].toLowerCase());
    }
    if((str_arr[i]>='a' && str_arr[i]<='z') || (str_arr[i]>=0 && str_arr[i]<=9)){
        console.log(str_arr[i]);
        if(str_arr[i]!=" "){
            new_arr.push(str_arr[i])
        }
        
    }
}
let start = 0;
let end = new_arr.length-1;
let flag = false;
while(start<=end){
    if(new_arr[start]==new_arr[end]){
        start++;
        end--;
        flag = true;
    }else{
        flag = false;
        break;
    }
}
console.log(new_arr);
console.log(flag);



/* Full Code */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if(s==" "){
        return true;
    }
    const str_arr = [...s];
    //console.log(str_arr);
    const new_arr = [];
    for(let i = 0; i<str_arr.length; i++){
        if(str_arr[i]>='A' && str_arr[i]<='Z'){
            new_arr.push(str_arr[i].toLowerCase());
        }
        if((str_arr[i]>='a' && str_arr[i]<='z') || (str_arr[i]>=0 && str_arr[i]<=9))            {
            //console.log(str_arr[i]);
            if(str_arr[i]!=" "){
                new_arr.push(str_arr[i])
            }

        }
    }
    //console.log(new_arr);
    if(new_arr.length==0){
        return true;
    }
    let start = 0;
    let end = new_arr.length-1;
    let flag = false;
    while(start<=end){
        if(new_arr[start]==new_arr[end]){
            start++;
            end--;
            flag = true;
        }else{
            flag = false;
            break;
        }
    }
    return flag;
    
};