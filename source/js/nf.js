window.addEventListener("load", () => {
    updateContentInput();
});

function updateContentInput() {
    const source = document.getElementById("source").value;
    const contentGroup = document.getElementById("contentGroup");

    // 清空内容
    contentGroup.innerHTML = "";

    let contentInput;
    if (source === "text") {
        contentInput = document.createElement("textarea");
        contentInput.placeholder = "请输入通知内容";
        contentInput.rows = 4;
    } else if (source === "built-in") {
        contentInput = document.createElement("select");
        const options = ["N5-N1"];
        options.forEach((optionText) => {
            const option = document.createElement("option");
            option.value = optionText;
            option.text = optionText;
            contentInput.add(option);
        });
    } else if (source === "file") {
        contentInput = document.createElement("input");
        contentInput.type = "file";
        contentInput.accept = "text/plain,text/csv";
    }

    if (contentInput) {
        contentInput.id = "contentInput";
        contentInput.style.width = "100%";
        contentGroup.appendChild(contentInput);
    }
}

function toggleNotifications() {
    const isEnabled = document.getElementById("notificationToggle").checked;
    if (isEnabled) {
        if (Notification?.permission === "granted") {
            startNotificationCycle();
        } else {
            if (Notification?.permission !== "denied"){
                // 如果用户没有告诉他们是否想要收到通知（注意：由于 Chrome，我们不确定是否设置了权限属性），因此检查“默认”值是不安全的。
                Notification.requestPermission().then((status) => {
                // 如果用户同意
                if (status === "granted") {
                    const n = new Notification(`授权成功`, {body:"请重新点击开始"});
                } else {alert("授权被拒绝，想继续使用请刷新重试");}
                });
            } else {alert("授权被拒绝，想继续使用请刷新重试");}
            document.getElementById("notificationToggle").checked = false;
        }
    } else {
        stopNotificationCycle();
    }
}

let notificationIntervalId;

function startNotificationCycle() {
    const source = document.getElementById("source").value;
    const interval = parseInt(document.getElementById("interval").value * 1000 * 60, 10);
    const repeatCount = parseInt(document.getElementById("repeatCount").value, 10);
    const nextNotification = document.getElementById("nextNotification");
    var contents = "";

    if (source === "text") {
        contents = document.getElementById("contentInput").value;
    } else if (source === "built-in") {
        const reader = new FileReader();
        reader.onload = function(e) {
            contents = e.target.result;
        };
        reader.readAsText("JLPT.txt");
    }

    if (contents==="" || isNaN(interval) || interval <= 0 || isNaN(repeatCount) || repeatCount < 0) {
        alert("请设置好通知内容、时间间隔和重复次数");
        document.getElementById("notificationToggle").checked = false;
        return;
    }
    contents = contents.split('\n');

    let remainingRepeats = repeatCount;
    let i = 0;
    nextNotification.textContent = new Date(Date.now() + interval).toLocaleTimeString();

    notificationIntervalId = setInterval(() => {
        var content = "";
        if (source === "text") {
            content = contents[i];
            i = (i+1)%contents.length;
        } else {
            contents[Math.floor(Math.random()*contents.length)];
        }
        alert(content);
        // const n = new Notification("通知", { body:content, icon:"/favicon.ico", tag:"1", renotify:true});
        nextNotification.textContent = new Date(Date.now() + interval).toLocaleTimeString();
        if (remainingRepeats > 1) {remainingRepeats -= 1;}
        if (remainingRepeats === 1) {stopNotificationCycle(); return;}
    }, interval);
}

function stopNotificationCycle() {
    clearInterval(notificationIntervalId);
    document.getElementById("nextNotification").textContent = "----";
    document.getElementById("notificationToggle").checked = false;
}
