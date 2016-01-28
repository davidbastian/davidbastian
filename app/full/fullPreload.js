import zepto from 'npm-zepto'
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
        ease: Power4.easeIn
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
