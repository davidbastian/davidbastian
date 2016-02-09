import zepto from 'npm-zepto'
var count = 0;

function listo() {



    var w = ($(window).width() / 2) - $('.ballB').width() / 2,
        y = $('.ballB').height() / 2;

    TweenMax.set($('.ballB'), {
        x: w + 3.51 + 'px',
        y: -y + 'px'
    })

    TweenMax.to($('#full .white'), 2, {
        autoAlpha: 0,
        ease: Power4.easeOut
    })

    TweenMax.to($('#full .white h1'), 0.65, {
        y: '-200vh',
        opacity: 0,
        ease: Power4.easeIn,
    })

    TweenMax.to("#full .appear", 1.5, {
        opacity: 1,
        scale: 1,
        ease: Power4.easeOut
    });


}

function fullPreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {


                var wrapSize = $('.wrap-a').size();

                Draggable.create($('.ballB'), {
                    //type: "x",
                    edgeResistance: 0.65,
                    bounds: '#tagFull',
                    throwProps: true,
                    onDrag: function() {
                        $('.ballB').addClass('grab');

                        var suPos = 1 * (parseInt(this.x, 10)),
                            percent = ((suPos * 100) / (($('#tagFull').width()) - $('.ballB').width())),
                            equal = Math.floor((percent * wrapSize) / 100);

                        if ((equal >= 0) && (equal < wrapSize)) {
                            $('.wrap-a').removeClass('active');
                            $('.wrap-a').eq(equal).addClass('active');

                        }

                        TweenMax.to($('.ballB .ball-inner'), .5, {
                            scale: '1',
                            ease: Power4.easeOut
                        });

                        TweenMax.to($('.el'), .5, {
                            scale: '0.9',
                            ease: Power4.easeOut
                        });

                    },

                    onDragStart: function() {

                    },

                    onDragEnd: function() {
                        $('.ballB').removeClass('grab');

                        TweenMax.to($('.ballB .ball-inner'), .5, {
                            scale: '0.3',
                            ease: Power4.easeOut
                        });

                        TweenMax.to($('.el'), .5, {
                            scale: '1',
                            ease: Power4.easeOut
                        });


                    },
                    onThrowUpdate: function() {

                        var suPos = 1 * (parseInt(this.x, 10)),
                            percent = ((suPos * 100) / (($('#tagFull').width()) - $('.ballB').width())),
                            equal = Math.floor((percent * wrapSize) / 100);

                        if ((equal >= 0) && (equal < wrapSize)) {
                            $('.wrap-a').removeClass('active');
                            $('.wrap-a').eq(equal).addClass('active');

                        }

                        TweenMax.to($('.el'), .5, {
                            scale: '0.9',
                            ease: Power4.easeOut
                        });



                    }

                });



                TweenMax.to($('.ball-inner'), 0.8, {
                    autoAlpha: 1,
                    scale: '1',
                    delay: 1,
                    ease: Back.easeIn,
                    onComplete: function() {

                        TweenMax.to($('.ball-inner'), 1, {
                            scale: '0.3',
                            ease: Expo.easeOut
                        });

                    }
                });


                $('.page-switch').css('display', 'block');
                $('.page-switch').attr('href', '/');

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
