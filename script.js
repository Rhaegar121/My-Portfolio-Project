// menu bar
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

// popup window
const allProjects = [{
  name: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  mobileImg: 'photo/detail_img.jpg',
  desktopImg: 'photo/Snapshoot Portfolio.png',
  mobileTech: ['Ruby on rails', 'CSS', 'JavaScript'],
  desktopTech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  liveLink: 'https://rhaegar121.github.io/',
  sourceLink: 'https://github.com/Rhaegar121/My-Portfolio-Project/tree/master',
}];

allProjects.name = 'Keeping track of hundreds of components';
allProjects.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
allProjects.mobileImg = 'photo/detail_img.jpg';
allProjects.desktopImg = 'photo/Snapshoot Portfolio.png';
allProjects.mobileTech = ['Ruby on rails', 'CSS', 'JavaScript'];
allProjects.desktopTech = ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'];
allProjects.liveLink = 'https://rhaegar121.github.io/';
allProjects.sourceLink = 'https://github.com/Rhaegar121/My-Portfolio-Project/tree/master';

const detail = document.querySelector('#detail');
const detailTitle = document.querySelector('.detail-title');
const detailText = document.querySelector('.detail-text');
const img = document.querySelector('#img');
const modalTag = document.querySelector('#modal-tag');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');
let screenWidth = window.innerWidth;
window.onresize = () => {
  screenWidth = window.innerWidth;
};

function openModal() {
  detail.style.display = 'block';
  detailTitle.textContent = allProjects.name;
  detailText.textContent = allProjects.description;
  liveLink.href = allProjects.liveLink;
  sourceLink.href = allProjects.sourceLink;
  if (screenWidth < 768) {
    img.setAttribute('src', allProjects.mobileImg);
    for (let i = 0; i < allProjects.mobileTech.length; i += 1) {
      const liTag = document.createElement('li');
      liTag.textContent = allProjects.mobileTech[i];
      modalTag.appendChild(liTag);
    }
  } else {
    img.setAttribute('src', allProjects.desktopImg);
    for (let i = 0; i < allProjects.desktopTech.length; i += 1) {
      const liTag = document.createElement('li');
      liTag.textContent = allProjects.desktopTech[i];
      modalTag.appendChild(liTag);
    }
  }
}

function closeModal() {
  detail.style.display = 'none';
  while (modalTag.firstChild) {
    modalTag.removeChild(modalTag.firstChild);
  }
}

const project = [...document.querySelectorAll('.button')];
project.forEach((btn) => {
  btn.onclick = () => {
    openModal();
  };
});

const close = document.querySelector('#close');
close.onclick = () => {
  closeModal();
};

// form validation
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please enter a valid email';
  };
});