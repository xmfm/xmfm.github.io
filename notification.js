window.addEventListener("load", () => {
  const buttonOn = document.getElementById("on");
  const buttonOff = document.getElementById("off");
  buttonOn.style.width = "200px";
  buttonOn.style.height = "100px";
  buttonOff.style.width = "200px";
  buttonOff.style.height = "100px";

  var iterval = null;
  
  // 如果用户没有告诉他们是否想要收到通知（注意：由于 Chrome，我们不确定是否设置了权限属性），因此检查“默认”值是不安全的。
  Notification.requestPermission().then((status) => {
    // 如果用户同意
    if (status === "granted") {
      const n = new Notification(`授权成功`, {
        tag: "点击开始键开始定期推送",
      });
      Notification.requestPermission(function(status) {var n=new Notification('123',{body:'2345'});});
    } else {
      // 否则，我们可以回退到常规模式的提醒
      alert("授权被拒绝，想继续使用请刷新重试");
    }
  });

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
      alert("授权被拒绝，想继续使用请刷新重试");
    }
  });

  buttonOff.addEventListener("click", ()=>{
    clearInterval(interval);
  });
});
