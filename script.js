const bar = document.querySelector('.fa-bars');
const welcome = document.querySelector('#welcome');
const menu = document.querySelector('#menu');

bar.addEventListener('click', () => {
  bar.classList.toggle('fa-xmark');
  if (menu.style.display === 'block' && welcome.style.display === 'none') {
    menu.style.display = 'none';
    welcome.style.display = 'block';
  } else {
    menu.style.display = 'block';
    welcome.style.display = 'none';
  }
});
