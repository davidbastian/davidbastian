import zepto from 'npm-zepto'
var count = 0;

function listo() {

    TweenMax.set($('.description, .media-container'), {
        x: 0 + '%',
    });

    TweenMax.set($('.next'), {
        x: 100 + '%',
    });

    TweenMax.set($('.ballC'), {
        x: '0',
        y: '0',
    });

    TweenMax.set($('.ballC .ball-inner'), {
        scale: '0.3'
    });

    $('.media-container').css(
        '-webkit-filter', 'grayscale(' + 0 + '%)'
    )

    TweenMax.set($('.next'), {
        autoAlpha: 1,
        y: '0vh',
        x: '100%'
    });

    $('.page-switch').css('display', 'none');
    TweenMax.to($('#single .white'), 2, {
        //  top: '-100vh',
        autoAlpha: 0,
        ease: Power4.easeOut
    })


    TweenMax.to($('#single .white h1'), 0.65, {
        y: '-200vh',
        opacity: 0,
        ease: Power4.easeIn,
        onComplete:function(){
            $('#single .white h1').remove();
        }
    })

    TweenMax.staggerTo("#single .appear", .7, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        delay: 0.7
    }, 0.01);

    TweenMax.to($('.ballC .ball-inner'), 0.8, {
        autoAlpha: 1,
        scale: '1',
        delay: 0.2,
        ease: Back.easeIn,
        onComplete: function() {

            TweenMax.to($('.ballC .ball-inner'), 1, {
                scale: '0.3',
                ease: Expo.easeOut
            });

        }
    });

    

}

function singlePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                TweenMax.to($('#single .white'), 1, {
                    autoAlpha: 1,
                    ease: Power4.easeOut,
                    // onComplete: done
                });
                TweenMax.to($('#single .white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                    ease: Power4.easeOut
                });

                var sizeItem = $('#single .item.preload').size();

                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                        count = count + 1;

                        var done = ((count * 100) / sizeItem);

                        setTimeout(function() {
                          //  console.log(Math.round(done) + '%') // show the percent 
                            $('#single .white h1').text(Math.round(done) + '.');

                            if (done === 100) {
                                // console.log('yes') // ready 
                                $('#single .item').removeClass('preload');
                                count = 0; // reset counter

                                listo();
                            }

                        }, 500)

                    } else {
                        setTimeout(checkLoad, 100);
                    }
                }

                checkLoad();

            })
        }
    }
}
export {
    singlePreload
};
