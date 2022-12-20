const bar = document.querySelector('.fa-bars');
const welcome = document.querySelector('#welcome');
const menu = document.querySelector('#menu');
function mobilemenu() {
  bar.classList.toggle('fa-xmark');
  if (menu.style.display === 'block' && welcome.style.display === 'none') {
    menu.style.display = 'none';
    welcome.style.display = 'block';
  } else {
    menu.style.display = 'block';
    welcome.style.display = 'none';
  }
}
bar.addEventListener('click', mobilemenu);
menu.addEventListener('click', mobilemenu);

const detail = document.querySelector('#detail');
const project = [...document.querySelectorAll('.button')];
project.forEach((btn) => {
  btn.onclick = () => {
    detail.style.display = 'block';
  };
});

const close = document.querySelector('#close');
close.onclick = () => {
  detail.style.display = 'none';
};