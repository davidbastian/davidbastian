import zepto from 'npm-zepto'


function scrollFunctionB() {

    function displaywheelB(e) {
        if (!$('#single').size() > 0) {


            var el = $('#tagHome'),
                scrollTime = 2,
                scrollDistance = 200,

                evt = window.event || e,
                delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,

                scrollLeft = el.scrollLeft(),
                finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10),
                equal = (finalScroll * 100) / $('#home').width(),
                b = (equal * ($('#tagHome').width())) / 100;

            //console.log(delta);



            if (!$('body').hasClass('home-first')) {

                $('body').addClass('home-first');

                TweenMax.to($('#home .white'), 1, {
                    autoAlpha: 0,
                    ease: Power4.easeOut
                });

                TweenMax.to($('.msg'), 1.2, {
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

            TweenLite.to($('.ball'), 1, {
                x: b + 'px',
                ease: Expo.easeOut,
            });

            if (!$('#single').size() > 0) {
                $('body').attr('data-scroll', $('#tagHome').scrollLeft())
                $('body').attr('data-ball', $('.ball').css('transform'));

            }

            TweenMax.to(el, scrollTime, {
                scrollTo: {
                    x: finalScroll
                },
                ease: Expo.easeOut,
                overwrite: 5,
                onComplete: function() {

                    if (!$('#single').size() > 0) {
                        $('body').attr('data-scroll', $('#tagHome').scrollLeft())
                        $('body').attr('data-ball', $('.ball').css('transform'));

                    }

                }
            });


        }
    }

    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on" + mousewheelevt, displaywheelB)
    } else if (document.addEventListener) {
        document.addEventListener(mousewheelevt, displaywheelB, false)
    }
}

function Dragdot() {


    Draggable.create($('.ball'), {
        //type: "x",
        edgeResistance: 0.65,
        bounds: '#tagHome',
        throwProps: true,
        onDrag: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / (($('#tagHome').width()) - $('.ball').width())),
                equal = ((percent * $('#home').width()) / 100);

            $('#tagHome').scrollLeft(equal);
            $('.ball').addClass('grab');

            $('body').attr('data-scroll', $('#tagHome').scrollLeft())
            $('body').attr('data-ball', $('.ball').css('transform'));


        },

        onDragStart: function() {
            if (!$('body').hasClass('home-first')) {
                TweenMax.to($('.msg'), 1.2, {
                    autoAlpha: 0,
                    ease: Power4.easeOut
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
                }, 0.02);
            }


            $('#home a').each(function(i) {

                var posY = i * 10;

                //$(this).data("y", posY);
                // console.log(posY);

                TweenMax.to($('#home a').eq(i), 0.5, {

                    left: '33vw',
                    x: -posY + '%',
                    scale: '0.9',
                    y: '2%',
                    ease: Expo.easeOut
                });


            });


            TweenMax.to($('.ball-inner'), .5, {
                scale: '1',
                ease: Power4.easeOut
            });


        },

        onDragEnd: function() {
            $('.ball').removeClass('grab');
            $('body').addClass('home-first');

            TweenMax.to($('#home a'), 1.5, {
                scale: '1',
                y: '0%',
                x: '0%',
                left: '0vw',
                ease: Expo.easeOut
            });

            TweenMax.to($('.ball-inner'), .5, {
                scale: '0.3',
                ease: Power4.easeOut
            });

        },
        onThrowUpdate: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / (($('#tagHome').width()) - $('.ball').width())),
                equal = ((percent * $('#home').width()) / 100);

            $('#tagHome').scrollLeft(equal);
            // $('.ball').addClass('grab');

            $('body').attr('data-scroll', $('#tagHome').scrollLeft())
            $('body').attr('data-ball', $('.ball').css('transform'));


        }

    });

}

function homeScroll($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {



                scrollFunctionB();
                Dragdot();

            })
        }
    }
}

export {
    homeScroll
};
