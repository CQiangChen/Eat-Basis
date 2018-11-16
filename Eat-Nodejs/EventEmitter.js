var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log('连接成功');

  //触发data_received事件
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function(){
  console.log('数据接收成功');
})

//触发connection事件
eventEmitter.emit('connection');


console.log('程序执行完毕');