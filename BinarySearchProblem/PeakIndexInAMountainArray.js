/*
852. Peak Index in a Mountain Array
Medium

Add to List

Share
An array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

 

Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1
 

Constraints:

3 <= arr.length <= 105
0 <= arr[i] <= 106
arr is guaranteed to be a mountain array.
*/
// Accepted 

function mountainArr(arr){
  let start = 0;
  let end = arr.length-1;
  let mid = 0;
  while(start<=end){
  	mid = Math.floor((start+end)/2);
    console.log(mid);
    if(mid==0){
        return 1;
    }
    if(mid==arr.length-1){
        return arr.length-2;
    }
    if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
     	console.log(arr[mid]);
        return mid;
    }else if(arr[mid-1]<arr[mid] && arr[mid]<arr[mid+1]){
    	start = mid + 1;
    }else if(arr[mid-1]>arr[mid] && arr[mid]>arr[mid+1]){
    	end = mid - 1;
    }
  }
  return "Not Found";
}
console.log(mountainArr([3,4,5,1])); //2













