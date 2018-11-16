>学于 30 seconds of code
##All
```
// 原例子：const all = (arr,fn = Boolean) => arr.every(fn);

// all([4,2,3],x=> x > 1); //true

const all = function(arr){
  return arr.every(function(x){
    return x>1;
  });
}
console.log(all([4, 2, 3]));

```
利用Array.evert()的方法根据所提供的function进行判断是否为真，若全为真则返回true,若有一个为false则返回true.

##allEqual







