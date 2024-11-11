var contents;
fetch("/res/JLPT.csv")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        contents = text.split('\n');
    })
    .catch(error => {
        console.error('Error fetching file:', error);
    });

var i = 0;

var interval = setInterval(() => {

var body = contents[Math.floor(Math.random()*contents.length)];
const n = new Notification("通知", { body:body, icon:"/favicon.ico", tag:"1", renotify:true});
i++;
}, 1000*60*15);