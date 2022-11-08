'use strict';
const btn = document.querySelector('.button-show');
const content = document.querySelector('.hidden-content');
btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
    if(btn.classList.contains('active')){
        btn.innerText = 'Hidden';
    }else {
        btn.innerText = 'Show more';
    }
    content.classList.toggle('show-content');
});