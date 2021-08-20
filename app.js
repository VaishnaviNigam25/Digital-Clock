function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = "AM";
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = hour < 10 ? (hour = "0" + hour) : hour;
    minute = minute < 10 ? (minute = "0" + minute) : minute;
    second = second < 10 ? (second = "0" + second) : second;
    document.getElementById("clock").innerHTML =
        hour + " : " + minute + " : " + second + " " + session;

    setTimeout(showTime,1000);

}
showTime();
