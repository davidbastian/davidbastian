import zepto from 'npm-zepto'


function scrollFunction() {

    function displaywheel(e) {
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

    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on" + mousewheelevt, displaywheel)
    } else if (document.addEventListener) {
        document.addEventListener(mousewheelevt, displaywheel, false)
    }

}

function singleScroll($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                scrollFunction();

            })
        }
    }
}

export {
    singleScroll
};
