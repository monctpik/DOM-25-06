"use strict";

const imagesDB = [
  "https://www.cbc.ca/kids/images/chinaanimals_header.jpg",
  "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_3x4.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg",
  "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg",
];

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);
const img = document.querySelector(".slider-container .slider img");

const slider = new Slider(imagesDB);

const createSlideBtnHandler = (direction = 'next')=> () => {
 
  slider.currentIndex = slider[direction === "next" ? "next" : "prev"];
  updateView()
};

nextBtn.addEventListener("click", createSlideBtnHandler('next'));
prevBtn.addEventListener("click", createSlideBtnHandler('prev'));

function updateView() {
  img.setAttribute("src", slider.currentSlide);
}
img.setAttribute("src", slider.currentSlide);

// function btnHandler(){
//   console.log('button is clicked')
// }
// //const [btn] = document.getElementsByTagName('button');
// //console.log(btn)
// //const btn = document.getElementById('btn');
// const btn = document.querySelector('.btn+.btn');

// const btns1 = document.getElementsByClassName('btn');
// const btns2 = document.querySelectorAll('.btn');

// //btn.addEventListener('click', btnHandler);

// const ul = document.getElementsByTagName('ul')[0]
// const li = document.querySelector('li:nth-child(4)')
// const h2 = document.getElementsByTagName('h2')
// const img = document.querySelector('img[alt=sea]')
// const p = document.querySelector('img[alt=sea]+.text')
// console.log(ul);
// console.log(li);
// console.log(h2);
// console.log(img);
// console.log(p);
