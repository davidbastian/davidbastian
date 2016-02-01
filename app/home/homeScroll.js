import zepto from 'npm-zepto'



function scrollFunction() {
    function displaywheel(e) {
        var el = $('#tagHome'),
            scrollTime = 2,
            scrollDistance = 200,

            evt = window.event || e,
            delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,
            scrollLeft = el.scrollLeft(),
            finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10);

        //console.log(finalScroll) 

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


function homeScroll($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                console.log($('html').hasClass('safari'));

                //scrollFunction();

                Draggable.create($('.ball'), {
                    //type: "x",
                    edgeResistance: 0.65,
                    bounds: '#tagHome',
                    throwProps: true,
                    onClick: function() {
                        return false;
                    },
                    onDrag: function() {
                        var suPos = 1 * (parseInt(this.x, 10));
                        //console.log(suPos);

                        var percent = ((suPos * 100) / (($('#tagHome').width()- $('#home').width()) - $('.ball').width()));
                        console.log(percent);

                        TweenLite.set($('#home'), {
                            x: -percent + '%',
                        });


                    },
                    onDragEnd: function() {
                        //        $('.grab').removeClass('grabbing');
                    },
                    onThrowUpdate: function() {
                        var suPos = 1 * (parseInt(this.x, 10));
                        //console.log(suPos);

                        var percent = ((suPos * 100) / (($('#tagHome').width()- $('#home').width()) - $('.ball').width()));
                        console.log(percent);

                        TweenLite.set($('#home'), {
                            x: -percent + '%',
                        });

                    }



                });

            })
        }
    }
}
export {
    homeScroll
};
