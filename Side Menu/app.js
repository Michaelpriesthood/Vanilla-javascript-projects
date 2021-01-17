const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let rotateLine = false;

menuBtn.addEventListener('click', menuRotatation);

function menuRotatation() {
  if (!rotateLine) {
    menuBtn.classList.add('close');
    rotateLine = true;
    menu.classList.add('show');
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    rotateLine = false;
  }
}
