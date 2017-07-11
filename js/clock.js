function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

(function startTime() {
    var currentTime = new Date()
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    window.rawHours = hour;
    window.hours = hour;

    if (hour > 12) {
      hour = hour - 12;
      window.hours = hour;
    } else if (hour === 0) {
      hour = 12;
      window.hours = hour;
    };

    minute = checkTime(minute);
    second = checkTime(second);
    window.minutes = minute;
    document.getElementById('time').textContent = hour + ":" + minute + ":" + second;
    setTimeout(startTime, 1000);
})();
