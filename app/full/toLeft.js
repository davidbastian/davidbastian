function toLeft() {

    var wrapActive = $('.wrap-a.active'),
        wrapA = $('.wrap-a'),
        wrapNext = $('.next');

    //console.log('right');
    wrapNext.css('display', 'none');
    if (!wrapA.first().hasClass('active')) {

        TweenMax.set(wrapActive, {
            left: '0vw'
        });
        TweenMax.set(wrapActive.next(), {
            left: '100vw'
        });
        TweenMax.set(wrapActive.prev(), {
            left: '-100vw'
        });

        TweenMax.to(wrapActive, .8, {
            left: '100vw',
            ease: Power4.easeOut,
            onComplete: function() {
                wrapActive.removeClass('active').prev().addClass('active');
                wrapNext.css('display', 'block');
            }
        });
        TweenMax.to(wrapActive.prev(), .8, {
            left: '0vw',
            ease: Power4.easeOut,
        });

    } else {
        TweenMax.set(wrapA.last(), {
            left: '-100vw'
        });

        TweenMax.to(wrapA.last(), .8, {
            left: '0vw',
            ease: Power4.easeOut,
        });

        TweenMax.to(wrapA.first(), .8, {
            left: '100vw',
            ease: Power4.easeOut,

            onComplete: function() {
                wrapActive.removeClass('active');
                wrapA.last().addClass('active');
                wrapNext.css('display', 'block');
            }
        });

    }

}
export {

    toLeft
};
