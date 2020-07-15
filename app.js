$(function(){
    let currentPage;
    let hashChange = () =>{
        let _hash = location.hash;
        if (_hash) {
            let page = _hash.replace('#', '')
            showPage(currentPage, page)
            currentPage = page
        } else {
            showPage(currentPage, 'home');
            if (window.innerWidth < 1100) {
                $(".animated-border-mobile").fadeIn();
                $(".abm2").fadeIn('fast');
                $(".menu-title a").css('color', "#fff");
            } else {
                $(".animated-border").fadeIn('slow');
            }
            gsap.from('.homeElm', {
                delay: 0.1,
                duration: 1,
                opacity: 0,
                y: 80,
                stagger: 0.5,
            });
            gsap.to('.nameTitle', {
                delay: 2.2,
                duration: 0.5,
                css: {
                    color: '#ff4028'
                },
                
            });
        }
    }
    hashChange();
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
        window.open("https://github.com/leszekkorzan", '_blank');
    })
    const pages = [
        {
            domEl: '.showskills',
            link: 'skills'
        },
        {
            domEl: '.showprojects',
            link: 'projects'
        },
        {
            domEl: '.showcontact',
            link: 'contact'
        }
    ]
    pages.map(
        (page) => {
            const { domEl, link } = page
            $(domEl).click( () => {
                showPage(currentPage, link)
                currentPage = link
            } )
        }
    )
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
        if(cPage === toPage){
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

        $(`.${toPage}`).delay(400).addClass('ptshow');
        $(`.${toPage}`).fadeIn('fast');
        setTimeout(function() {
            $(`.${cPage}`).removeClass('pthide');
            $(`.${toPage}`).removeClass('ptshow');
        }, 700);
        if(toPage === 'skills'){
            gsap.from('.skill', {
                y: 60,
                duration: 1.5,
                scale: 0.9, 
                opacity: 0, 
                delay: 0.5, 
                stagger: 0.1,
                ease: 'elastic', 
            });
        }else if(toPage === 'projects'){
            gsap.from('.projects-box a', {
                y: 50,
                duration: 1.5,
                opacity: 0, 
                delay: 0.5, 
                stagger: 0.2,
                ease: 'power3'
            });
        }else if(toPage === 'contact'){
            gsap.from('.contact-box a', {
                y: 50,
                duration: 1.5,
                opacity: 0, 
                delay: 0.5, 
                stagger: 0.2,
                ease: 'power3'
            });
        }
    
    }
    $(window).on( 'hashchange', function( e ) {
        hashChange();
    } );
})