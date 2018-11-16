function qSort(list){
  if(list.length === 0){
    return [];
  }
  var left = [];
  var right = [];
  //基点
  var pivot = list[0];

  for(var i=1; i<list.length; i++){
    if(list[i] < pivot){
      left.push(list[i]);
    }else{
      right.push(list[i])
    }
  }

  return qSort(left).concat(pivot,qSort(right));
}

var arr = [2,1,3,4];
console.log(qSort(arr));

// module.exprots = {
//   qSort:qSort
// }
