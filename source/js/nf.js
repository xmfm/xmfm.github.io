const reader = new FileReader();
var contents;
reader.onload = function(e) {
  contents = e.target.result;
  contents = contents.split('\n');
};
reader.readAsText('JLPT.csv');

var i = 0;

var interval = setInterval(() => {

var body = contents[Math.floor(Math.random()*contents.length)];
const n = new Notification("通知", { body:body, icon:"/favicon.ico", tag:"1", renotify:true});
i++;
}, 60000);