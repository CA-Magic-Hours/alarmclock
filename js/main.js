
var btn = document.getElementById('btn').addEventListener('click', alarm);
var hoursDropdown = document.getElementById('hoursDropdown');
var minutesDropdown = document.getElementById('minutesDropdown');

function alarm() {
  var alarmDone = false;
  var ampm = document.getElementById('ampm').value;
  var userHours = parseInt(hoursDropdown.value);
  var userMins = parseInt(minutesDropdown.value);
  var clockHours = parseInt(window.hours);
  var clockMinutes = parseInt(window.minutes);

  if (ampm === 'PM') {
    clockHours = window.rawHours;
    userHours = userHours + 12;
    if (userHours === 24) {
      userHours = 12;
    };
  } else {
    clockHours = window.rawHours;
    if (userHours === 12) {
      userHours = 0;
    };
  };

  if (clockHours === userHours && clockMinutes === userMins) {
    console.log('alarm');
    alarmDone = true;
    var ding = document.getElementById('ding');
    ding.play();
    return;
  };

  setTimeout(alarm, 1000);
};

for (let i = 1; i <= 12; i++) {
  let hourOption = document.createElement('option');
  hourOption.textContent = i;
  hoursDropdown.appendChild(hourOption);
};

for (let i = 0; i <= 60; i++) {
  let minuteOption = document.createElement('option');
  let minuteText = (i < 10) ? x = '0'+i : i;
  minuteOption.textContent = minuteText;
  minuteOption.value = i;
  minutesDropdown.appendChild(minuteOption);
};
