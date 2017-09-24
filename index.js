'use strict'

let item = document.querySelectorAll('li.content-button'); 

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(event) {

    let target = event.target;	
    let remover = document.querySelector('.active');


    let Switcher = function(elem){
	    remover.classList.remove('active'); 
	    target.classList.add('active');
	    let data = target.dataset;
	    let fixDiv = data.index;
        document.querySelector('.show').classList.remove('show');
        document.getElementById(fixDiv).classList.add('show');

    }
    
    Switcher(remover);

    
})

};		

window.addEventListener('wheel', scroller);


window.addEventListener('wheel', scroller);


function scroller(test){
 
 test = window.event;
 let itemActive = document.querySelector('li.active');

 let delta = test.deltaY;
 let next = itemActive.nextElementSibling;
 let prev = itemActive.previousElementSibling;

 if(next !== null && delta > 55){//check next elem exist
    console.log('delta');

    itemActive.classList.remove('active');
    itemActive.nextElementSibling.classList.add('active');
    let activeData = document.querySelector('li.active').dataset;
    let showDiv = activeData.index;
    document.querySelector('.show').classList.remove('show');
    document.getElementById(showDiv).classList.add('show');


 } 
 else if (delta < 55 && prev !== null){

    itemActive.classList.remove('active');
    itemActive.previousElementSibling.classList.add('active');
    let activeData = document.querySelector('li.active').dataset;
    let showDiv = activeData.index;
    document.querySelector('.show').classList.remove('show');
    document.getElementById(showDiv).classList.add('show');

 }

}
    