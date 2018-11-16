var fs = require('fs');

// var data_1 = fs.readFileSync('./node回调函数/input.txt');

// console.log(data_1.toString());
// console.log('程序执行结束!');




var data_2 = fs.readFile('./node回调函数/input.txt',function(err, data){
  if(err) throw err;
  console.log(data.toString())
})

console.log('程序执行结束');
