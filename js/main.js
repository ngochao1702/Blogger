$(document).ready(function(){
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    /* click toggle */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
    /*owl-course */
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots:false,
        nav: true,
        navText:[$('.owl-navagation .owl-nav-prev'),$('.owl-navagation .owl-nav-next')],
    });
       
    
});