window.addEventListener("load", () => {
  const buttonOn = document.getElementById("on");
  const buttonOff = document.getElementById("off");
  buttonOn.style.width = "200px";
  buttonOn.style.height = "100px";
  buttonOff.style.width = "200px";
  buttonOff.style.height = "100px";

  // var iterval;
  var w;
  
  buttonOn.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      w = new Worker("nf.js");
    } else if (Notification?.permission !== "denied"){
        // 如果用户没有告诉他们是否想要收到通知（注意：由于 Chrome，我们不确定是否设置了权限属性），因此检查“默认”值是不安全的。
        Notification.requestPermission().then((status) => {
          // 如果用户同意
          if (status === "granted") {
            const n = new Notification(`授权成功`, {
              tag: "重新点击开始键开始定期推送",
            });
          } else {
            // 否则，我们可以回退到常规模式的提醒
            alert("授权被拒绝，想继续使用请刷新重试");
          }
        });
    } else {
      // 否则，我们可以回退到常规模式的提醒
      alert("授权被拒绝，想继续使用请刷新重试");
    }
  });

  buttonOff.addEventListener("click", ()=>{
    // clearInterval(interval);
    w.terminate();
    w = undefined;
  });
});
