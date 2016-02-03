import zepto from 'npm-zepto'
var count = 0;

function listo() {
    $('.page-switch').css('display', 'none');
    $('footer').css('display', 'block');
    TweenMax.to($('#single .white'), 2, {
        //  top: '-100vh',
        autoAlpha: 0,
        ease: Power4.easeOut
    })


    TweenMax.to($('#single .white h1'), 0.65, {
        y: '-200vh',
        opacity: 0,
        ease: Power4.easeIn
    })

    TweenMax.staggerTo("#single .appear", .7, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        delay: 0.4
    }, 0.2);

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

                var sizeItem = $('#single .item').size();

                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                        count = count + 1;

                        var done = ((count * 100) / sizeItem);

                        setTimeout(function() {
                            //  console.log(Math.round(done) + '%') // show the percent 
                            $('#single .white h1').text(Math.round(done) + '.');

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
    singlePreload
};
