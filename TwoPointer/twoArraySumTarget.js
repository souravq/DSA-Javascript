const arr1 = [1,2,6,8,11];
const arr2 = [3,4,6,9,10];

let target = 12;

let m = 0;
let n = arr2.length-1;

let count = 0;

while(m<arr1.length && n>=0){
    if((arr1[m]+arr2[n])==target){
        console.log(arr1[m] +" "+ arr2[n])
        n--;
        m++;
        count++;
    }else if((arr1[m]+arr2[n])>target){
        n--;
    }else{
        m++;
    }
}
console.log(count);