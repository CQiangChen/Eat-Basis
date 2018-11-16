/**
 * 非引用传递，普通去重方法
 * 优点：兼容性好！
 */
// var removeDuplicates = function(nums){
//   var len = nums.length;
//   var register = [];
//   for(var i=0; i<len; i++){
//     for(var j=i+1; j<len; j++){
//       if(nums[i] === nums[j]){
//         break;
//       }
//     }
//     if(j === len){
//       register.push(nums[i]);
//     }
//     j = 0;
//   }
//   return register;
// }

//利用indexOf简化内部循环
// var removeDuplicates = function(nums){
//   var len = nums.length;
//   var register = [];
//   for(var i=0; i<len; i++){
//     if(register.indexOf(nums[i]) === -1){
//       register.push(nums[i]);
//     }
//   }
//   return register;
// }

//对排序后的数组后一个与前一个比对是否相同

var removeDuplicates = function(nums){
  var seen = null;
  var sortedArray = nums.concat().sort();
  var register = [];
  var len = sortedArray.length;

  for(var i=0; i<len; i++){
    if(!i || seen !== sortedArray[i] ){
      register.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  return register;
}




//引用传递，不对实参进行任何拷贝
// var removeDuplicates = function(nums) {
//   for(var i=0; i<nums.length; i++){
//       for(var j=i+1; j<nums.length;j++){
//           if(nums[i] === nums[j]){
//               nums.splice(j,1);
//               j--;
//           }
//       }
//   }
//   return nums.length;
// };

var nums = [0,0,1,1,1,2,2,3,3,4,1];

nums = removeDuplicates(nums);
// removeDuplicates(nums);
console.log(nums);
