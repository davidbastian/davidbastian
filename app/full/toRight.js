function toRight() {

    var wrapActive = $('.wrap-a.active'),
        wrapA = $('.wrap-a'),
        wrapNext = $('.next');


    wrapNext.css('display', 'none');
    if (!wrapA.last().hasClass('active')) {

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
            left: '-100vw',
            ease: Power4.easeOut,
            onComplete: function() {
                wrapActive.removeClass('active').next().addClass('active');
                wrapNext.css('display', 'block');
            }
        });
        TweenMax.to(wrapActive.next(), .8, {
            left: '0vw',
            ease: Power4.easeOut,
        });

    } else {
        TweenMax.set(wrapA.first(), {
            left: '100vw'
        });

        TweenMax.to(wrapA.first(), .8, {
            left: '0vw',
            ease: Power4.easeOut,
        });

        TweenMax.to(wrapA.last(), .8, {
            left: '-100vw',
            ease: Power4.easeOut,

            onComplete: function() {
                wrapActive.removeClass('active');
                wrapA.first().addClass('active');
                wrapNext.css('display', 'block');
            }
        });
        /*wrapActive.removeClass('active');
        wrapA.first().addClass('active');*/
    }


}
export {

    toRight
};
