'use strict';

const btnCollapse = document.getElementById('btn-collape'), 
        title = document.getElementsByClassName('content-title'),
        contentPart = document.querySelector('.content-title'),
        body = document.getElementsByClassName('content-body');

//To do after click the title
// title is not only one title[0],title[1],title[2]
for(let i = 0; i < title.length; i++ ){ // click every title
    title[i].addEventListener('click', function(){
       for(let j = 0; j < contentPart.length; j++){  //click every contentPart
         contentPart[j].classList.remove('active');  
       } 
    });
}
