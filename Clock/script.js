// Rotates every 1second
setInterval(setClock, 1000);

// Selectors
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// Functions
function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  //   call the clockRotation function
  clockRotation(hourHand, hourRatio);
  clockRotation(minuteHand, minuteRatio);
  clockRotation(secondHand, secondRatio);
}

function clockRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
