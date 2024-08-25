// // 如果用户同意收到通知让我们尝试发送十个通知
// var i = 0;
// // 使用时间间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
// var interval = setInterval(() => {
// // 由于 tag 参数，我们应该只能看到“Hi！9”通知
// var body = '这是第'+i+'个';
// const n = new Notification("通知", { body:body, icon:"/favicon.ico", tag:"1", renotify:true});
// i++;
// }, 2000);
var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",2000);
}

timedCount();