window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });   
});



$(document).ready(function(){

    // Slow scroll
    $('a[href^="#"').on('click', function() {
        

        let href = $(this).attr('href');
        
    
        $('html, body').animate({
            
            scrollTop: $(href).offset().top
        });
        return false;
    });

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
       $('.ani').fadeIn(); 
    } else {
        $('.ani').fadeOut();
    }
});