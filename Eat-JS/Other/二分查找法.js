// const qSort = require('./快速排序.js')

function binSearch(arr,data){
  var arr = arr.sort();

  var upperBound = arr.length-1;
  var lowerBound = 0;

  while(lowerBound<=upperBound){
    var mid = Math.floor((lowerBound + upperBound)/2);

    if(arr[mid] < data){
      lowerBound = mid + 1;
    }else if(arr[mid] > data){
      upperBound = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
}

var arr = [1,2,5,4,3];
console.log(binSearch(arr,5));
