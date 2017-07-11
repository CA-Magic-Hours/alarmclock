
var btn = document.getElementById('btn').addEventListener('click', alarm);
var ding = document.getElementById('ding');
var hoursDropdown = document.getElementById('hoursDropdown');
var minutesDropdown = document.getElementById('minutesDropdown');

function alarm() {
  // These are the variables we're going to need when determining how to set up the alarm:
  // We need to know if the alarm is for AM or PM
  // We'll need to know what values the user actually selected
  // We'll need to know what time it ACTUALLY is on the computer
  var ampm = document.getElementById('ampm').value;
  var userHours = parseInt(hoursDropdown.value);
  var userMins = parseInt(minutesDropdown.value);
  var clockHours = window.rawHours;
  var clockMinutes = parseInt(window.minutes);

  // This is a little message so the user knows that their alarm has been set. We're using the ternary operator, which is a shorthand for the if/else statement. IF the stuff in the () is TRUE, then we'll return the first item ('0' + userMins), ELSE return the second item (userMins). When returned, that will be the value of minMessage.
  var minMessage = (userMins < 10) ? '0' + userMins : userMins;

  // After getting minMessage taken care of, it's just a simple textContent
  document.getElementById('message').textContent = 'Alarm set for ' + hoursDropdown.value + ':' + minMessage + ' ' + ampm + '.';

  // This is the logic for making sure the alarms go off when they're supposed to.
  // If the user selected PM...
  if (ampm === 'PM') {
    // Then we update our userHours by adding 12, because we've got to check the user's selection against the computer's ACTUAL time
    userHours = userHours + 12;
    // However, if the user said they wanted an alarm to go off at noon (meaning they selected 12, and we just added 12 to that...)
    if (userHours === 24) {
      // We want to make sure that userHours stays equal to 12, because the computer's ACTUAL time value for noon is 12.
      userHours = 12;
    };
    // If the user selects something other than PM (ie: AM)
  } else {
    // We simply want to check to see if they meant midnight
    if (userHours === 12) {
      // which the computer interprets as '0', so we update our value accordingly
      userHours = 0;
    };
  };

  // Finally, if the clockHours (computer's time) is equal to the userHours (after adjustment) AND the clockMinutes (computer's time) is equal to the userMins
  if (clockHours === userHours && clockMinutes === userMins) {
    // Then we display an updated message
    document.getElementById('message').textContent = 'DONE!';
    // Play a sound
    ding.play();
    // And end the function
    return;
  };
  // Call this function every second
  setTimeout(alarm, 1000);
};

// These two loops simply create all the content for the dropdowns so we don't have a messy HTML file.
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
