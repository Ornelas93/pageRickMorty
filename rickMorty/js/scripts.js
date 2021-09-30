$(document).ready(function(){
    //Progress bar
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });

    // iniciando o loader quando o ususario chega no elemento

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
        if ((scroll > (dataAreaOffset.top - 1000)) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
            stop = 1;
        }
    });

    //Paralax
    setTimeout(function(){
        $('#data-area').parallax({imageSrc:'img/parallax.jpg'});
        $('#pattern-img').parallax({imageSrc:'img/banner4.jpg'});
    }, 250);
    
    //Filtro das temporadas

    $('.filter-btn').on('click', function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'first-btn'){
            eachBoxes('first', boxes);
        } else if (type == 'second-btn'){
            eachBoxes('second', boxes);
        } else if (type == 'third-btn'){
            eachBoxes('third', boxes);
        }else if (type == 'fourth-btn'){
            eachBoxes('fourth', boxes);
        } else{
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes){
        if (type == 'all'){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                } else{
                    $(this).fadeIn();
                }
            });
        }

    }

    //scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let attributesSection = $('#attributes-area');
    let charactersSection = $('#characters');
    let seasonsSection = $('#seasons-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id');

        if (btnId == 'about-menu'){
            scrollTo = aboutSection;
        } else if(btnId == 'attributes-menu'){
            scrollTo = attributesSection;
        } else if(btnId == 'characters-menu'){
            scrollTo = charactersSection;
        } else if(btnId == 'seasons-menu'){
            scrollTo = seasonsSection;
        } else if(btnId == 'contact-menu'){
            scrollTo = contactSection;
        } else{
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 68
        }, 1500);
    })
});