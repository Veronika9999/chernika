function menuOpen(){
    let hamburger=document.querySelector('#hamburger');
    let navLinks=document.querySelector('#nav__links');
    let body=document.querySelector('#body');
    hamburger.onclick=function(){
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
        body.classList.toggle('scroll_none');
    }
    let navLinksA=document.querySelectorAll('#nav__links a');
    navLinksA.forEach(function(navLinkA){
        navLinkA.onclick=function(){
           setTimeout(menuClouse, 500); //задержка перед какой-то функцией//
        }
    })
    function menuClouse(){
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active')
        body.classList.remove('scroll_none')
    }
}
menuOpen();
function servicesModalOpen(){
    let modalLinks=document.querySelectorAll('.services__link');
    let modalContent=document.querySelectorAll('.content');
    let modalWrapper=document.querySelector('#modalWrapper');
    let body=document.querySelector('#body');
    for (let i=0;i<6;i++) {
        modalLinks[i].onclick=function(){
            modalContent[i].classList.add('content_active');
            modalWrapper.classList.add('modal-wrapper_active');
            body.classList.add('scroll_none');
        }
        modalWrapper.onclick=function(){
            let modalContentActive=document.querySelector('.content_active');
            modalContentActive.classList.remove('content_active');
            modalWrapper.classList.remove('modal-wrapper_active');
            body.classList.remove('scroll_none');
        }
    }
}
servicesModalOpen();
new Swiper('.work__swiper',{
    effect: 'cube',
    autoplay:{
        delay:2000,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
     speed: 1500,
     navigation: { //добовляем стрелки
        nextEl: '#swiperButtonNext',
        prevEl: '#swiperButtonPrev',
      },
      pagination: { //добовляем булиты
        el: '.swiper-pagination', //добовляем елемент
        type: 'bullets', //добовляем тип 
        clickable: true, //добовляем нажатие
        dynamicBullets: true, //добовляем трансформацию булитов
      },    
})
new Swiper('#reviewsSwiper',{
    effect: 'flip',
    loop:true,
     speed: 1500,
     navigation: { //добовляем стрелки
        nextEl: '#reviewsSwiperButtonNext',
        prevEl: '#reviewsSwiperButtonPrev',
      },
      pagination: { //добовляем булиты
        el: '#reviewsSwiperPagination', //добовляем елемент
        type: 'bullets', //добовляем тип 
        clickable: true, //добовляем нажатие
        dynamicBullets: true, //добовляем трансформацию булитов
      }, 
});
function navShow(){
    let screen=window.pageYOffset; //создаём переменную, которая показывает на какой высоте сайта мы находимся
    let nav=document.querySelector('nav');
    let navSocial=document.querySelector('.nav__social');
    window.onscroll=function(){
        let scrollHight=window.pageYOffset; //перезаписывается в момент прокрутки
        if  (screen>scrollHight || scrollHight==0){ //если прокрутка вниз, то нав прячется
            nav.style.top='0px';
            navSocial.style.top='52px';
        }else{ // иначе, если прокрутка вверх, то нав показывается
            nav.style.top='-200px';
            navSocial.style.top='-300px';
        } 
        screen=scrollHight; //перезапивывается в конце прокрутки
    }  
}
navShow();
