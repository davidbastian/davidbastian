function pageAnimation() {
        return {
            enter: function(element, done) {

                console.log(element)


               /* TweenMax.from(element, .5, {
                    opacity: 0,
                   // y: 50,
                    onComplete: done
                })*/

                TweenMax.to($('.white'), 1, {
                    autoAlpha: 1,
                     ease: Power4.easeOut,
                    onComplete:done
                });


                TweenMax.to($('.white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                     ease: Back.easeOut.config(1)
                })

            },
            leave: function(element, done) {
                TweenMax.to($('#home'), .1, {
                   // y: '-20vh',
                    opacity: 0,
                    delay:0.7,
                    ease: Power4.easeOut,
                    onComplete: done
                })




                /*TweenMax.staggerTo(".media", 0.8, {opacity: 0, y: '30px'}, 0.2, done);

                TweenMax.staggerTo(".media", 0.8, {opacity: 0, y: '30px'}, 0.2, done);*/


                /*TweenMax.to(element, .5, {
                    opacity: 0,
                    //y: -50,
                    onComplete: done
                })*/
            }
        }
}
export {pageAnimation};