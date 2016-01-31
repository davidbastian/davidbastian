import zepto from 'npm-zepto'
import {
    toRight
}
from './toRight.js'
var count = 0;

function listo() {

    TweenMax.to($('#full .white'), 2, {
        //  top: '-100vh',
        autoAlpha: 0,
        ease: Power4.easeOut

    })

    TweenMax.to($('#full .white h1'), 0.65, {
        y: '-200vh',
        opacity: 0,
        ease: Power4.easeIn,
        onComplete: function() {

            setTimeout(function() {
                toRight();

            }, 1000)

            setInterval(function() {
                toRight();

            }, 8000)
        }
    })

    TweenMax.to("#full .appear", 1.5, {
        opacity: 1,
        scale: 1,
        ease: Power4.easeOut
    })


}

function fullPreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {


                $('.page-switch').css('display', 'block');
                $('.page-switch').attr('href', '#/');

                TweenMax.to($('#full .white'), 1, {
                    autoAlpha: 1,
                    ease: Power4.easeOut
                });
                TweenMax.to($('#full .white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                    ease: Power4.easeOut
                });

                TweenMax.to($('.page-switch').find('.w'), .6, {
                    opacity: '0',
                    scale: '0.8',
                    ease: Power4.easeOut,
                    onComplete: function() {

                        TweenMax.to($('.page-switch').children().eq(0), .4, {
                            opacity: '1',
                            x: '-22',
                            ease: Power4.easeOut
                        });

                        TweenMax.to($('.page-switch').children().eq(1), .5, {
                            opacity: '1',
                            x: '-11',
                            ease: Power4.easeOut
                        });

                        TweenMax.to($('.page-switch').children().eq(2), .6, {
                            opacity: '1',
                            ease: Power4.easeOut
                        });


                    }
                });



                var sizeItem = $('#full .item').size();
                // console.log(sizeItem)

                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                        count = count + 1;

                        var done = ((count * 100) / sizeItem);

                        setTimeout(function() {
                            //  console.log(Math.round(done) + '%') // show the percent 
                            $('#full .white h1').text(Math.round(done) + '.');

                            if (done === 100) {
                                //console.log('yes') // ready 
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
    fullPreload
};
