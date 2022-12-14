/*
832. Flipping an Image
Easy

2672

216

Add to List

Share
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

Constraints:

n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
Accepted
336,309
Submissions
418,003
*/



// 832. Flipping an Image
//[[1,1,0],[1,0,1],[0,0,0]]     
const arr_2d = [[1,1,0],[1,0,1],[0,0,0]];

for( let i = 0; i< arr_2d.length; i++){
    let start = 0;
    let end = arr_2d.length-1;
    let temp = 0;
    while(start<=end){
        temp = arr_2d[i][end];
        arr_2d[i][end] = 1-arr_2d[i][start]
        arr_2d[i][start] = 1-temp;
        start++;
        end--;
    }
}
console.log(arr_2d); //[[1,0,0],[0,1,0],[1,1,1]]