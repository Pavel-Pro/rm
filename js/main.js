    $('.dropdown').on('mouseenter', function() {
        console.log('mouseenter');
        var thisEl = $(this);
        clearTimeout(thisEl.data('slideUpTimeout'));
        thisEl.find('.sub-menu').stop().slideDown();
    }).on('mouseleave', function() {
        var thisEl = $(this);
        var slideUpTimeout = setTimeout(function() {
            console.log('mouseleave');
            thisEl.find('.sub-menu').stop().slideUp();
        }, 500);
        thisEl.data('slideUpTimeout', slideUpTimeout);
    });
    $('.burger').on('click', function(){
        $('.menu').slideToggle('500')
        $('.burger__item:first-child').toggleClass('burger__item-top')
        $('.burger__item:nth-child(2)').toggleClass('burger__item-middle')
        $('.burger__item:last-child').toggleClass('burger__item-bottom');
    });
    $('.gallery').slick({
        slidesToShow: 3,
        infinite: true,
        responsive: [{
            breakpoint: 850,
            settings: {
               centerMode: true,
               slidesToShow: 1,
               centerPadding: '100px',
               dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                infinite: false,
                dots: true,
                arrows: false
            }
        }]
    });