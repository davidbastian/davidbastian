import zepto from 'npm-zepto'
var count = 0;

function listo() {
    TweenMax.to($('#home .white'), 2, {
        autoAlpha: 0,
        ease: Power4.easeOut
    });

    TweenMax.to($('#home .white h1'), 0.65, {
        y: '200vh',
        opacity: 0,
        ease: Power4.easeIn
    })


    TweenMax.staggerTo("#home .appear", .7, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        delay: 0.4
    }, 0.05);

}

function homePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

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
