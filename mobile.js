'use strict'
let mobileButton = document.querySelector('.nav-mobile-toggler');

    
    function toggler(){
        let menuMobile = document.querySelector('.main-navigation-right-side');
        menuMobile.style.display = menuMobile.style.display === 'block' ? '' : 'block';
    };

    let clickEvent = (function(){
        if('ontouchstart' in document.documentElement === true){
            return 'touchstart';
        } else{
            return 'click';
        }
    })();

    mobileButton.addEventListener(clickEvent, toggler);