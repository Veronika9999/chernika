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