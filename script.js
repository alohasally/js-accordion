'use strict';

const btnCollapse = document.getElementById('btn-collapse'), 
        title = document.getElementsByClassName('content-title'),
        contentPart = document.getElementsByClassName('content-part'),
        body = document.getElementsByClassName('content-body');

//To do after click the title
// title is not only one title[0],title[1],title[2]
for(let i = 0; i < title.length; i++ ){  // click every title
    title[i].addEventListener('click', function(ev){
       for(let j = 0; j < contentPart.length; j++){  
         contentPart[j].classList.remove('active'); 
         ev.target.parentNode.classList.add('active');
         activateBody();
       } //click every contentPart
    });
}
function activateBody(){
    //hiding body - display:none;
    for(let x = 0; x < contentPart.length; x++){
    body[x].style.display = 'none';
    }

    //showing active Part - body 
    //.content-part.active .content-body
    const activeContent = document.querySelector('.content-part.active .content-body');
    activeContent.style.display='block';
}
activateBody();

//when Click the Button , hiding Body
const closing = btnCollapse.addEventListener('click', function(){
    for(let i =0; i<body.length; i++){
        body[i].style.display='none';
    }   
})
closing();