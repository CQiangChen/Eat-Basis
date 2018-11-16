//All

// const all = (arr,fn = Boolean) => arr.every(fn);

// all([4,2,3],x=> x > 1); //true

const all = function(arr){
  return arr.every(function(x){
    return x>1;
  });
}
console.log(all([4, 2, 3]));

