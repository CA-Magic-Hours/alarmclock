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

    // This code here is making some content available globally - by creating a property on the global object (window) and then setting the value of that new property.
    // Specifically, we want to know what the raw hours value is, because computers use military time, and we are using a 12-hour clock. Our alarm values are ALSO going to be in 12 hour format. We want both the adjusted and unadjusted hours, and which we use will depend on the sitation.
    window.rawHours = hour;

    if (hour > 12) {
      hour = hour - 12;
    } else if (hour === 0) {
      hour = 12;
    };

    minute = checkTime(minute);
    second = checkTime(second);
    window.minutes = minute;
    document.getElementById('time').textContent = hour + ":" + minute + ":" + second;
    setTimeout(startTime, 1000);
})();
