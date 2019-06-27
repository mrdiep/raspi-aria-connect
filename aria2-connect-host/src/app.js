import Aria2 from 'aria2';
import io from 'socket.io-client';

const aria2 = new Aria2();
const socket = io('http://localhost:8081');
console.log('start server');

socket.on('connect', function(){
  console.log('connected')
});
socket.on('call', async function(data) {
  //const [guid] = await aria2.call("addUri", [magnet], { dir: "D:/aa" });
  console.log('data', data)
});
socket.on('disconnect', function(){
  console.log('connected')
});

aria2
  .open()
  .then(() => console.log("open"))
  .catch(err => console.log("error", err));

  async function download() {

    // const magnet =
    // "magnet:?xt=urn:btih:88594AAACBDE40EF3E2510C47374EC0AA396C08E&dn=bbb_sunflower_1080p_30fps_normal.mp4&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&ws=http%3a%2f%2fdistribution.bbb3d.renderfarming.net%2fvideo%2fmp4%2fbbb_sunflower_1080p_30fps_normal.mp4";
    // const [guid] = await aria2.call("addUri", [magnet], { dir: "D:/aa" });
    // console.log(guid)

  const notifications = await aria2.listNotifications();
  notifications.forEach((notification) => {
    aria2.on(notification, (params) => {
      console.log('aria2', notification, params)
    })
  })
  }

  

  download().then()

