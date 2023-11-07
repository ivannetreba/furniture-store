// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);


// Quastions 

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    questions.forEach(q => {
      if (q !== question) {
        q.classList.remove('show-text');
      }
    })

    question.classList.toggle('show-text');
  })
})


// Numbers

const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});


// Reviews

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'ivan netreba',
    job: 'instruction designer',
    img: 'person-5.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi doloribus dignissimos assumenda veritatis. Autem vel harum aperiam a quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi doloribus dignissimos assumenda veritatis. Autem vel harum aperiam a quis!',
  }
];

let indexPerson = 0;

const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


window.addEventListener('DOMContentLoaded', () => {
  showPerson()
})

prevBtn.addEventListener('click', () => {
  indexPerson--;
  if (indexPerson < 0) {
    indexPerson = reviews.length - 1;
  }
  showPerson();
})

nextBtn.addEventListener('click', () => {
  indexPerson++;
  if (indexPerson > reviews.length - 1) {
    indexPerson = 0;
  }
  showPerson();
})

randomBtn.addEventListener('click', () => {
  indexPerson = Math.floor(Math.random() * reviews.length);
  showPerson();
})

function showPerson() {
  const person = reviews[indexPerson];
  personImg.src = person.img;
  author.textContent = person.author;
  job.textContent = person.job;
  text.textContent = person.text;
}


