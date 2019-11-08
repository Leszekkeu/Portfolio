$(function(){
    var currentPage;
    $(".btn").on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $(".menu-nav").slideToggle();
        $(".cnt").delay(300).fadeToggle();
    });
    $(".menu-el a").click(function(){
        if($(".btn").hasClass("active")){
            $(".cnt").show();
            $(".menu-nav").slideUp();
            $(".btn").toggleClass('active');
            $(".btn").toggleClass('not-active'); 
        }
    })
    $(".github-link").click(function(){
        window.open("https://github.com/Leszekkeu", '_blank');
    })
    $(".showskills").click(function(){
        showPage(currentPage, 'skills')
        currentPage = "skills";
    })
    $(".showprojects").click(function(){
        showPage(currentPage, 'projects')
        currentPage = "projects";
    })
    $(".showcontact").click(function(){
        showPage(currentPage, 'contact')
        currentPage = "contact";
    })
    $(".menu-title a").click(function(){
        showPage(currentPage, 'home');
        if($(window).width() < 1100){
            $(".animated-border-mobile").fadeIn();
            $(".abm2").fadeIn('fast');
            $(".menu-title a").css('color', "#fff");
        }else{
            $(".animated-border").fadeIn('slow');
        }
        currentPage = "home";
    })

    function showPage(cPage, toPage){
        if(cPage == null){
            cPage = "home";
        }
        if(cPage == toPage){
            return;
        }
        if(cPage == "home"){
            $(".animated-border-mobile").fadeOut();
            $(".abm2").fadeOut('fast');
            $(".animated-border").fadeOut('fast');
            $(".menu-title a").css('color', "#000");
        }
        $(`.${cPage}`).addClass('pthide');
        $(`.${cPage}`).delay(200).fadeOut('fast');

        $(`.${toPage}`).delay(370).addClass('ptshow');
        $(`.${toPage}`).fadeIn('fast');
        setTimeout(function() {
            $(`.${cPage}`).removeClass('pthide');
            $(`.${toPage}`).removeClass('ptshow');
        }, 700);
    
    }
})