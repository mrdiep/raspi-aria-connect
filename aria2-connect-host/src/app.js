import Aria2 from 'aria2';
import io from 'socket.io-client';

const aria2 = new Aria2();
const socket = io('http://localhost:8081');
console.log('start server');

socket.on('connect', async () => {
  console.log('connected');

  const methods = await aria2.listMethods();
  var files = await aria2.call("getFiles", 'ab4eb47b5f3d7369');
  console.log(JSON.stringify(files, null, 4));

  var status = await aria2.call('tellStatus', 'ab4eb47b5f3d7369');
  console.log(status ,methods)
  var e = await aria2.open();
  const notifications = await aria2.listNotifications();
  notifications.forEach((notification) => {
    aria2.on(notification, (params) => {
      socket.emit('aria2', {notification, params}) 
    })
  })
 
});
socket.on('news', async function(data) {
  console.log('data', data)
});
socket.on('disconnect', function(){
  console.log('connected')
});

