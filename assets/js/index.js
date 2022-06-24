"use strict";

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

const ul = document.getElementsByTagName('ul')[0]
const li = document.querySelector('li:nth-child(4)')
const h2 = document.getElementsByTagName('h2')
const img = document.querySelector('img[alt=sea]')
const p = document.querySelector('img[alt=sea]+.text')
console.log(ul);
console.log(li);
console.log(h2);
console.log(img);
console.log(p);