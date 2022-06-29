"use strict";
//
//                                  ЦВЕТА И КЛИКИ ПО НИМ
//

// const buttonsColor = document.querySelectorAll("#root>button");
// const root = document.getElementById("root");

// const color = ({target}) =>{
// root.style.backgroundColor = target.dataset.color
// }
// for (const btn of buttonsColor) {
//   btn.addEventListener('click', color)
// }
// const buttons = document.querySelectorAll("#buttons>button");
// const flex = document.getElementById("flex");

// const handleButtonClick = ({ target }) => {

//   flex.style.flexDirection = target.innerText.toLowerCase();
// };

// for (const btn of buttons) {
//   btn.addEventListener("click", handleButtonClick);}

//
//                                          ПРИ НАВЕДЕНИИ REVERSE
//
// const [openBtn, closeBtn] = document.getElementsByClassName('btn')
// const reverse = () =>{
// let buffer = openBtn.textContent
// openBtn.textContent = closeBtn.textContent
// closeBtn.textContent = buffer
// }
// openBtn.addEventListener("mouseover", reverse);
// closeBtn.addEventListener("mouseover", reverse);

// const anchors = document.links;
// console.log(anchors)
// function anchorHandler(e){
//     e.preventDefault()
//     e.target.dataset.portSecret = '777'
//     console.log(e.target.dataset.portSecret)
// }

// for (const anchor of anchors) {
//     anchor.addEventListener('click', anchorHandler)
// }

// const imagesDB = [
//   "https://www.cbc.ca/kids/images/chinaanimals_header.jpg",
//   "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_3x4.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg",
//   "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg",
// ];

// const [prevBtn, nextBtn] = document.querySelectorAll(
//   ".slider-container button"
// );
// const img = document.querySelector(".slider-container .slider img");

// const slider = new Slider(imagesDB);

// const createSlideBtnHandler =
//   (direction = "next") =>
//   () => {
//     slider.currentIndex = slider[direction === "next" ? "next" : "prev"];
//     updateView();
//   };

// nextBtn.addEventListener("click", createSlideBtnHandler("next"));
// prevBtn.addEventListener("click", createSlideBtnHandler("prev"));

// function updateView() {
//   img.setAttribute("src", slider.currentSlide);
// }
// img.setAttribute("src", slider.currentSlide);

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
