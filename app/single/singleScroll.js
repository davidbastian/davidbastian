import zepto from 'npm-zepto'


function scrollFunction() {

    function displaywheel(e) {
        if ($('#single').size() > 0) {


            var el = $('#tagSingle'),
                scrollTime = 2,
                scrollDistance = 180,

                evt = window.event || e,
                delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,
                scrollTop = el.scrollTop(),
                finalScroll = scrollTop - parseInt((delta * scrollDistance), 10);

            //console.log(finalScroll) 

            TweenMax.to(el, scrollTime, {
                scrollTo: {
                    y: finalScroll
                },
                ease: Expo.easeOut,
                overwrite: 5
            });


        }

    }

    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on" + mousewheelevt, displaywheel)
    } else if (document.addEventListener) {
        document.addEventListener(mousewheelevt, displaywheel, false)
    }




}


function nextProject() {
    var myNext = Draggable.create($('.ballC'), {
        //type: "x",
        edgeResistance: 0.65,
        bounds: '#tagSingle',
        throwProps: true,
        onDrag: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / $(window).width()),
                gray = -((percent * 2));


           // console.log(percent);


            if (percent < -55) {

                $('.next').addClass('done');

            } else {
                $('.next').removeClass('done');

            }

            if ($('html').hasClass('ipad') || $('html').hasClass('mobile')) {

                TweenMax.set($('.description, .media-container'), {
                    x: (percent * 2) + '%',
                })

                TweenMax.set($('.next'), {
                    x: (100 + (percent * 1.5)) + '%',
                })



            } else {
                TweenMax.set($('.description, .media-container'), {
                    x: percent + '%',

                })

                TweenMax.set($('.next'), {
                    x: (100 + (percent * 2)) + '%',
                })

            }







            $('.media-container').css(
                '-webkit-filter', 'grayscale(' + gray + '%)'
            )


            $('.ball').addClass('grab');


        },

        onDragStart: function() {

            TweenMax.to($('.ballC .ball-inner'), .5, {
                scale: '1',
                ease: Power4.easeOut
            });


            $('.white').remove();


        },

        onDragEnd: function() {


            if (!$('.next').hasClass('done')) {

                $('.ball').removeClass('grab');

                TweenMax.to($('.ballC'), 1.5, {
                    x: '0',
                    y: '0',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.ballC .ball-inner'), .5, {
                    scale: '0.3',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.description, .media-container'), 1.5, {
                    x: 0 + '%',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.next'), 1.5, {
                    x: 100 + '%',
                    ease: Power4.easeOut
                });

                $('.media-container').css(
                    '-webkit-filter', 'grayscale(' + 0 + '%)'
                )



            }





        },

        onThrowUpdate: function() {


            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / $(window).width()),
                gray = -((percent * 2));


            //console.log(percent);


            if (percent <= -55) {

                if ($('html').hasClass('ipad') || $('html').hasClass('mobile')) {

                    TweenMax.set($('.description, .media-container'), {
                        x: (percent * 2) + '%',
                    })

                    TweenMax.set($('.next'), {
                        x: (100 + (percent * 1.5)) + '%',
                    })



                } else {
                    TweenMax.set($('.description, .media-container'), {
                        x: percent + '%',

                    })

                    TweenMax.set($('.next'), {
                        x: (100 + (percent * 2)) + '%',
                    })

                }



                $('.media-container').css(
                    '-webkit-filter', 'grayscale(' + gray + '%)'
                )

            } else {

                $('.ball').removeClass('grab');

                TweenMax.to($('.ballC'), 1.5, {
                    x: '0',
                    y: '0',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.ballC .ball-inner'), .5, {
                    scale: '0.3',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.description, .media-container'), 1.5, {
                    x: 0 + '%',
                    ease: Power4.easeOut
                });

                TweenMax.to($('.next'), 1.5, {
                    x: 100 + '%',
                    ease: Power4.easeOut
                });

                $('.media-container').css(
                    '-webkit-filter', 'grayscale(' + 0 + '%)'
                )



            }





        }

    });


}

function singleScroll($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                scrollFunction();
                nextProject();

            })
        }
    }
}

export {
    singleScroll
};
