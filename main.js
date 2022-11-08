'use strict';
const show_content = (classNameButton,classNameContent) =>{
    const btn = document.querySelector(`.${classNameButton}`);
    const content = document.querySelector(`.${classNameContent}`);
    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')){
            btn.innerText = 'Hidden';
        }else {
            btn.innerText = 'Show more';
        }
        content.classList.toggle('show-content');
    });
}
show_content('button-show','hidden-content');