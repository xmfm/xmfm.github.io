window.addEventListener("load", () => {
  const button = document.querySelector("button");

  if (window.self !== window.top) {
    // 确保如果我们的文档位于框架中，我们会让用户首先在自己的选项卡或窗口中打开它。否则，它将无法请求发送通知的权限
    button.textContent = "查看上面示例代码的实时运行结果";
    button.addEventListener("click", () => window.open(location.href));
    return;
  }

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      // 如果用户同意收到通知让我们尝试发送十个通知
      let i = 0;
      // 使用时间间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
      const interval = setInterval(() => {
        // 由于 tag 参数，我们应该只能看到“Hi！9”通知
        const n = new Notification(`Hi! ${i}`, { tag: "soManyNotification" });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification && Notification.permission !== "denied") {
      // 如果用户没有告诉他们是否想要收到通知（注意：由于 Chrome，我们不确定是否设置了权限属性），因此检查“默认”值是不安全的。
      Notification.requestPermission().then((status) => {
        // 如果用户同意
        if (status === "granted") {
          let i = 0;
          // 使用间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
          const interval = setInterval(() => {
            // 由于 tag 参数，我们应该只能看到“嗨！9”通知
            const n = new Notification(`嗨！${i}`, {
              tag: "soManyNotification",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // 否则，我们可以回退到常规模式的提醒
          alert("Hi!");
        }
      });
    } else {
      // 如果用户拒绝收到通知，我们可以回退到常规模式的提醒
      alert("Hi!");
    }
  });
});
