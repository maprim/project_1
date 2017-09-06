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
