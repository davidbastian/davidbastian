import zepto from 'npm-zepto'
var count = 0;

function listo() {

    $('#tagHome').scrollLeft($('body').attr('data-scroll'));


    var databall = $('body').attr('data-ball');

    if (databall !== null) {
        var obj = databall.replace("translate3d", " ").replace("(", "").replace(")", "");
        var arr = obj.split(',');

        var arrX = arr[0];
        var arrY = arr[1];

        //console.log(arrX, arrY);

        TweenMax.set($('.ball'), {
            y: arrY,
            x: arrX
        })
    }


    TweenMax.to($('#home .white h1'), 0.65, {
        y: '200vh',
        opacity: 0,
        ease: Power4.easeIn
    })

    if ($('html').hasClass('mobile')) {

        TweenMax.to($('#home .white'), 1, {
            autoAlpha: 0,
            ease: Power4.easeOut
        });

        TweenMax.staggerTo("#home .appear", 1, {
            opacity: 1,
            x: 0,
            y: 0,
            ease: Power4.easeOut,
            delay: 0.4
        }, 0.06);


    }



    if ($('body').hasClass('home-first')) {

        TweenMax.to($('#home .white'), 2, {
            autoAlpha: 0,
            ease: Power4.easeOut
        });

        TweenMax.staggerTo("#home .appear", .7, {
            opacity: 1,
            y: 0,
            ease: Power4.easeOut,
            delay: 0.4
        }, 0.01);

        TweenMax.to($('.ball .ball-inner'), 0.8, {
            autoAlpha: 1,
            scale: '1',
            delay: 0.2,
            ease: Back.easeIn,
            onComplete: function() {

                TweenMax.to($('.ball .ball-inner'), 1, {
                    scale: '0.3',
                    ease: Expo.easeOut
                });

            }
        });




    } else {



        window.onmouseover = function() {

            if (!$('body').hasClass('home-first')) {

                setTimeout(function() {
                    TweenMax.to($('.msg'), 1.2, {
                        autoAlpha: 0,
                        x:'8vw',
                        ease: Power4.easeOut,
                        delay: 0.4,
                    });
                    TweenMax.to($('#home .white'), 1, {
                        autoAlpha: 0,
                        ease: Power4.easeOut
                    });

                    TweenMax.staggerTo("#home .appear", 1, {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: Power4.easeOut,
                        delay: 0.4
                    }, 0.06);

                    $('body').addClass('home-first');

                }, 500)
            }

        }





        TweenMax.to($('.ball .ball-inner'), 1.2, {
            y: '0px',
            scale: '0.3',
            opacity: 1,
            ease: Power4.easeOut,
            delay: 0.75
        })


        TweenMax.to($('.msg'), 1, {
            autoAlpha: 0.5,

            top: '50%',
            ease: Power4.easeOut,
            delay: 0.65
        })

    }



}

function homePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                $('.page-switch').css('display', 'block');
                $('.page-switch').attr('href', '#/full');

                TweenMax.to($('#home .white'), 1, {
                    autoAlpha: 1,
                    ease: Power4.easeOut
                });
                TweenMax.to($('#home .white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                    ease: Power4.easeOut
                });

                TweenMax.to($('.page-switch').find('.w'), .6, {
                    opacity: '1',
                    scale: '1',
                    ease: Power4.easeOut,
                    delay: 0.8
                });

                TweenMax.to($('.page-switch').children().eq(0), .4, {
                    opacity: '1',
                    x: '0',
                    ease: Power4.easeOut,
                });

                TweenMax.to($('.page-switch').children().eq(1), .5, {
                    opacity: '0',
                    x: '0',
                    ease: Power4.easeOut,
                });

                TweenMax.to($('.page-switch').children().eq(2), .6, {
                    opacity: '0',
                    ease: Power4.easeOut,
                });


                var sizeItem = $('#home .item').size();

                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                        count = count + 1;

                        var done = ((count * 100) / sizeItem);

                        setTimeout(function() {
                            //console.log(Math.round(done) + '%') // show the percent 
                            $('#home .white h1').text(Math.round(done) + '.');

                            if (done === 100) {
                                // console.log('yes') // ready 
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
    homePreload
};
