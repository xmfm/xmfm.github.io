window.addEventListener("load", () => {
  const buttonOn = document.getElementById("on");
  const buttonOff = document.getElementById("off");
  buttonOn.style.width = "200px";
  buttonOn.style.height = "100px";
  buttonOff.style.width = "200px";
  buttonOff.style.height = "100px";

  var iterval = null;

  Notification.requestPermission().then((status) => {});
  
  buttonOn.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      // 如果用户同意收到通知让我们尝试发送十个通知
      let i = 0;
      // 使用时间间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
      interval = setInterval(() => {
        // 由于 tag 参数，我们应该只能看到“Hi！9”通知
        var body = '这是第'+i+'个';
        const n = new Notification("通知", { body:body, icon:"/favicon.ico", tag:"1", renotify:true});
        Notification.requestPermission(function(status) {var n=new Notification('123',{body:body});});
        i++;
      }, 2000);
    } else {
      // 否则，我们可以回退到常规模式的提醒
      alert("授权被拒绝");
    }
  });

  buttonOff.addEventListener("click", ()=>{
    clearInterval(interval);
  });
});
