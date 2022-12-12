/*
35. Search Insert Position
Easy

10689

503

Add to List

Share
Given a sorted numsay of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */

function SearchInsertPosition(nums, target){
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    if(target<nums[0]){
        return 0;
    }
    if(target>nums[nums.length-1]){
        return nums.length;
    }
    while(start<=end){
        mid = Math.floor((start+end)/2);
        //console.log(mid);
        if(nums[mid]==target){
            console.log(nums[mid])
            return mid;
        }else if(nums[mid]<target){
            start = mid + 1;
        }else{
            end = end - 1;
        }
    }
    return mid;
}
console.log(SearchInsertPosition([2,4,6,8],6));