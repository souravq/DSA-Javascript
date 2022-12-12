/*
4. Median of Two Sorted Arrays
Hard

20844

2362

Add to List

Share
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
Accepted
1,687,039
Submissions
4,772,874
*/




//nums1 = [1,2], nums2 = [3,4]     //2.50000

const nums1 = [1,3];
const nums2 = [2,4];

let nums1_start = 0;
let nums2_start = 0;

const merge_arr = [];

while(nums1_start<nums1.length || nums2_start<nums2.length){
    if(nums1[nums1_start]<=nums2[nums2_start]){
        merge_arr.push(nums1[nums1_start]);
        nums1_start++;
    }else{
        merge_arr.push(nums2[nums2_start]);
        nums2_start++;
    }

    if(nums1_start==nums1.length && nums2_start<nums2.length){
        merge_arr.push(nums2[nums2_start]);
        nums2_start++;
    }

    if(nums2_start==nums2.length && nums1_start<nums1.length){
        merge_arr.push(nums1[nums1_start]);
        nums1_start++;
    }
}
let merge_arr_length = merge_arr.length;
let median = 0;
if(merge_arr_length%2==0){
    median = (merge_arr[merge_arr_length/2] + merge_arr[(merge_arr_length/2)-1])/2;
}else{
    median =  merge_arr[Math.floor(merge_arr_length/2)];
}
console.log(merge_arr);

console.log(median);


