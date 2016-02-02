import zepto from 'npm-zepto'


function scrollFunction() {








    function displaywheel(e) {
        var el = $('#tagHome'),
            scrollTime = 2,
            scrollDistance = 200,

            evt = window.event || e,
            delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,
            scrollLeft = el.scrollLeft(),
            finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10),
            equal = (finalScroll * 100) / $('#home').width(),
            b = (equal * ($('#tagHome').width())) / 100;



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




        TweenMax.to(el, scrollTime, {
            scrollTo: {
                x: finalScroll
            },
            ease: Expo.easeOut,
            overwrite: 5
        });

    }
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on" + mousewheelevt, displaywheel)
    } else if (document.addEventListener) {
        document.addEventListener(mousewheelevt, displaywheel, false)
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
            // console.log(equal);
            $('#tagHome').scrollLeft(equal);
            $('.ball').addClass('grab');
            /*TweenLite.set($('#home'), {
                x: -equal + 'px',
            });*/
            $('body').attr('data-s', $('#tagHome').scrollLeft())

        },

        onDragStart: function() {
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


        },

        onDragEnd: function() {
            $('.ball').removeClass('grab');
            $('body').addClass('home-first');
        },
        onThrowUpdate: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / (($('#tagHome').width()) - $('.ball').width())),
                equal = ((percent * $('#home').width()) / 100);
            //console.log(equal);
            $('body').attr('data-s', $('#tagHome').scrollLeft());

            $('#tagHome').scrollLeft(equal);

            /*TweenLite.set($('#home'), {
                x: -equal + 'px',
            });*/

        }



    });

}


function homeScroll($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                //console.log($('html').hasClass('safari'));

                scrollFunction();
                Dragdot();



            })
        }
    }
}
export {
    homeScroll
};
