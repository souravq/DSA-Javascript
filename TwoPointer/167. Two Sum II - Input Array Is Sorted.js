/*
167. Two Sum II - Input Array Is Sorted
Medium

8281

1121

Add to List

Share
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
Accepted
1,296,752
Submissions
2,159,589
*/





// numbers = [2,7,11,15], target = 9  // 1,2

const numbers = [-1,0];
let target = -1;

let start = 0;
let end = numbers.length-1;

while(start<=end){
    if((numbers[start]+numbers[end])==target){
        console.log(start+ " "+ end);
        break;
    }else{
        if(numbers[end]>target){
            end--;
        }else if(numbers[end]<target){
            start++;
        }
    }
}

/* Full Accepted Code */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    //const numbers = [-1,0];
//let target = -1;

    let start = 0;
    let end = numbers.length-1;
    let ans_arr = [];

    while(start<=end){
        if((numbers[start]+numbers[end])==target){
            ans_arr.push(start+1);
            ans_arr.push(end+1);
            console.log(start+ " "+ end);
            break;
        }else{
            if(numbers[end]>target){
                end--;
            }else if(numbers[end]<=target){
                if((target-numbers[end]) > numbers[start]){
                    start++;
                }else{
                    end--;
                }
                
            }
        }
        console.log(start+ " "+ end);
    }
    return ans_arr;
    
};