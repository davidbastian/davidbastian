import zepto from 'npm-zepto'
var count = 0;


function listo() {
    // TweenMax.staggerTo(".media", 0.8, {opacity: 1, y: 0}, 0.2);

    TweenMax.to($('.white'), 2, {
      //  top: '-100vh',
        autoAlpha:0,
        ease: Power4.easeOut
    })
  

    TweenMax.to($('.white h1'), 0.65, {
        y: '-200vh',
        opacity: 0,
         ease: Power4.easeIn
    })

    TweenMax.staggerTo(".appear", .7, {opacity: 1, y: 0, ease: Power4.easeOut, delay:0.4}, 0.2);
    //TweenMax.staggerTo(".media", .5, {opacity: 1, y: 0, ease: Expo.easeOut, delay:0.6}, 0.2);

}


function pagePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

                var sizeItem = $('.item').size();
                // console.log(element)

                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                        count = count + 1;

                        var done = ((count * 100) / sizeItem);

                        setTimeout(function() {
                            console.log(done) // show the percent 
                            $('.white h1').text( Math.round(done) + '.');
                            
                            if (done === 100) {
                                console.log('yes') // ready 
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
    pagePreload
};
