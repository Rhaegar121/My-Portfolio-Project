// menu bar
const bar = document.querySelector('.fa-bars');
const welcome = document.querySelector('#welcome');
const menu = document.querySelector('#menu');
function mobilemenu() {
  bar.classList.toggle('fa-xmark');
  if (menu.style.display === 'flex' && welcome.style.display === 'none') {
    menu.style.display = 'none';
    welcome.style.display = 'flex';
  } else {
    menu.style.display = 'flex';
    welcome.style.display = 'none';
  }
}
bar.addEventListener('click', mobilemenu);
// menu.addEventListener('click', mobilemenu);

// popup window
const allProjects = [
  {
    name: 'World Digital Economy & Technology Summit',
    description:
      'This project is the World Economy & Technology summit website based on the design of Cindy Shin in Behance which contains both mobile and desktop versions and consists of two pages (home and about pages). Built with HTML, CSS, and Javascript in Microverse Module 1.',
    image: 'photo/wdet screenshot 2.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/WDET-Summit/',
    sourceLink: 'https://github.com/Rhaegar121/WDET-Summit',
  },
  {
    name: 'Awesome Books Project ES6',
    description:
    'Awesome Books Project is a simple website that displays a list of books and allows you to add and remove books from that list. Mainly built with javascript in Microverse Module 2.',
    image: 'photo/awesome book screenshot 1.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/Rhaegar121/Awesome-Books-ES6',
  },
  {
    name: 'To Do List Project',
    description:
    'To Do List Project is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. Mainly built with javascript in Microverse Module 2.',
    image: 'photo/To do list screenshot .jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/To-Do-list/dist/',
    sourceLink: 'https://github.com/Rhaegar121/To-Do-list',
  },
  {
    name: 'Tic Tac Toe',
    description:
      'Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.',
    image: 'photo/tic tac toe screenshot 2.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/Tic-Tac-Toe/',
    sourceLink: 'https://github.com/Rhaegar121/Tic-Tac-Toe',
  },
  {
    name: 'Guess The Word',
    description:
      'Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.',
    image: 'photo/guess the word screenshot 2.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/Guess-the-word/',
    sourceLink: 'https://github.com/Rhaegar121/Guess-the-word',
  },
  {
    name: 'Keeping track of hundreds of components1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'photo/detail_img.jpg',
    tech: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://rhaegar121.github.io/',
    sourceLink: 'https://github.com/Rhaegar121/My-Portfolio-Project',
  },
];

const detail = document.querySelector('#detail');
const detailTitle = document.querySelector('.detail-title');
const detailText = document.querySelector('.detail-text');
const img = document.querySelector('#img');
const modalTag = document.querySelector('#modal-tag');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');
// let screenWidth = window.innerWidth;
// window.onresize = () => {
//   screenWidth = window.innerWidth;
// };

// function openModal() {
//   detail.style.display = 'block';
//   detailTitle.textContent = allProjects.name;
//   detailText.textContent = allProjects.description;
//   liveLink.href = allProjects.liveLink;
//   sourceLink.href = allProjects.sourceLink;
//   if (screenWidth < 768) {
//     img.setAttribute('src', allProjects.mobileImg);
//     for (let i = 0; i < allProjects.mobileTech.length; i += 1) {
//       const liTag = document.createElement('li');
//       liTag.textContent = allProjects.mobileTech[i];
//       modalTag.appendChild(liTag);
//     }
//   } else {
//     img.setAttribute('src', allProjects.desktopImg);
//     for (let i = 0; i < allProjects.desktopTech.length; i += 1) {
//       const liTag = document.createElement('li');
//       liTag.textContent = allProjects.desktopTech[i];
//       modalTag.appendChild(liTag);
//     }
//   }
// }

const projectBtn = [...document.querySelectorAll('.button')];
projectBtn.forEach((item, i) => item.addEventListener('click', () => {
  detail.style.display = 'block';
  const project = allProjects[i];
  detailTitle.textContent = project.name;
  detailText.textContent = project.description;
  liveLink.href = project.liveLink;
  sourceLink.href = project.sourceLink;
  img.setAttribute('src', project.image);
  for (let i = 0; i < project.tech.length; i += 1) {
    const liTag = document.createElement('li');
    liTag.textContent = project.tech[i];
    modalTag.appendChild(liTag);
  }
}));

const close = document.querySelector('#close');
close.onclick = () => {
  detail.style.display = 'none';
  while (modalTag.firstChild) {
    modalTag.removeChild(modalTag.firstChild);
  }
};

// form validation
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please enter a valid email';
  } else form.submit();
});

email.onkeypress = () => {
  error.textContent = '';
};

// local storage
const inputs = document.querySelectorAll('#name, #email, #message');
const inputData = Array.from(inputs);
const dataObj = {
  Name: '',
  Email: '',
  Message: '',
};
inputData.forEach((input) => {
  input.addEventListener('input', () => {
    dataObj.Name = inputData[0].value;
    dataObj.Email = inputData[1].value;
    dataObj.Message = inputData[2].value;
    localStorage.setItem('dataObj', JSON.stringify(dataObj));
  });
});
window.onload = () => {
  const data = JSON.parse(localStorage.getItem('dataObj'));
  if (data) {
    inputData[0].value = data.Name;
    inputData[1].value = data.Email;
    inputData[2].value = data.Message;
  }
};