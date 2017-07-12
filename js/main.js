
var btn = document.getElementById('btn').addEventListener('click', alarm);
var ding = document.getElementById('ding');
var hoursDropdown = document.getElementById('hoursDropdown');
var minutesDropdown = document.getElementById('minutesDropdown');

function alarm() {

  var ampm = document.getElementById('ampm').value;
  var userHours = parseInt(hoursDropdown.value);
  var userMins = parseInt(minutesDropdown.value);
  var clockHours = window.rawHours;
  var clockMinutes = parseInt(window.minutes);

  var minMessage = (userMins < 10) ? '0' + userMins : userMins;

  document.getElementById('message').textContent = 'Alarm set for ' + hoursDropdown.value + ':' + minMessage + ' ' + ampm + '.';

  // What does this do, and why is it here?
  // What does it add, and more specifically, what does it FIX from the original version (old.js).
  return (function alarmCheck() {
    if (ampm === 'PM') {
      userHours = userHours + 12;
      if (userHours === 24) {
        userHours = 12;
      };
    } else {
      if (userHours === 12) {
        userHours = 0;
      };
    };

    if (clockHours === userHours && clockMinutes === userMins) {
      document.getElementById('message').textContent = 'DONE!';
      ding.play();
      return;
    };
    setTimeout(alarmCheck, 1000);
  })();
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
