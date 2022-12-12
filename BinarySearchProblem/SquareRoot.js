function squareRoot(x){
  let start = 0;
  let end = x-1;

  let mid = 0;

  while(start<=end){
    mid = Math.floor((start+end)/2);
    if(((mid+1)*(mid+1))==x){
       console.log(mid+1);
       return mid+1;
       
    }else if(((mid+1)*(mid+1))>x){
    	end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  if(((mid+1)*(mid+1))>x)
  	return mid;
  else
  	return mid+1;
}
console.log(squareRoot(37)); 