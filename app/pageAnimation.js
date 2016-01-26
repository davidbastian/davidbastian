function pageAnimation() {
        return {
            enter: function(element, done) {

                console.log(element)


                TweenMax.from(element, .5, {
                    opacity: 0,
                   // y: 50,
                    onComplete: done
                })

                /*TweenMax.to($('#single .white'), .5, {
                    width: '100vw'
                })*/

            },
            leave: function(element, done) {
                /*TweenMax.to($('#home'), .5, {
                    x: '-20vw',
                    opacity: 0
                })*/

                /*TweenMax.staggerTo(".media", 0.8, {opacity: 0, y: '30px'}, 0.2, done);

                TweenMax.staggerTo(".media", 0.8, {opacity: 0, y: '30px'}, 0.2, done);*/


                TweenMax.to(element, .5, {
                    opacity: 0,
                    //y: -50,
                    onComplete: done
                })
            }
        }
}
export {pageAnimation};